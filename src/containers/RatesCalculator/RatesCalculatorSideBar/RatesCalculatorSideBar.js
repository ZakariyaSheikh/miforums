import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RatesContext from '../../../context/rates/ratesContext';
import Dropdown from '../../../components/UI/Dropdown';

const RatesCalculatorSideBar = ({ settings }) => {
    const { currencies, dicountRatioX2, dicountRatioX3 } = settings;

    const ratesContext = useContext(RatesContext);

    const { selectedEvent } = ratesContext;

    const [singleRate, setSingleRate] = useState(0);
    const [currency, setCurrency] = useState('£');

    useEffect(() => {
        onCurrency(currencies[1]);
        // eslint-disable-next-line
    }, [selectedEvent]);

    const onCurrency = (e) => {
        const currency = typeof e !== 'object' ? e : e.target.value;
        switch (currency) {
            case 'GBP':
                setCurrency('£');
                break;
            case 'USD':
                setCurrency('$');
                break;
            default:
                setCurrency('£');
                break;
        }
        // singleEventCalc(currency);
        calculate(currency);
    };

    // const singleEventCalc = (currency) => {
    //     const total = selectedEvent
    //         .filter((s) => s.singleCheckbox)
    //         .map((a) => a[currency])
    //         .reduce((a, b) => a + b, 0);
    //     setSingleRate(total);
    // };

    const calculate = (currency) => {
        let array = [];
        let firstChecked = false;
        let secondChecked = false;
        console.log(currency);

        const sorted = [...selectedEvent].sort(
            (a, b) => a[currency] - b[currency]
        );

        console.log(sorted);

        selectedEvent.forEach((event, index) => {
            console.log(index);

            let single = event.singleCheckbox ? event[currency] : 0;
            let extra =
                event.extraCheckbox && event.singleCheckbox
                    ? currency === 'GBP'
                        ? 1200
                        : 1500
                    : 0;
            let share = event.shareCheckbox ? event[`shared${currency}`] : 0;

            let total = single + share;
            console.log(total);

            // Percentage calc second item 30%
            if ((index === 0 && event.singleCheckbox) || event.shareCheckbox) {
                firstChecked = true;
            } else if (index === 0 && !event.singleCheckbox) {
                firstChecked = false;
            }
            if (index === 1 && firstChecked) {
                console.log('second');
                total = (total / 100) * (100 - dicountRatioX2);
                console.log(total);
            }

            // Percentage calc from third item 40%
            if ((index >= 1 && event.singleCheckbox) || event.shareCheckbox) {
                secondChecked = true;
            } else if (index >= 1 && !event.singleCheckbox) {
                secondChecked = false;
            }

            if (index >= 2 && secondChecked) {
                console.log('third +');
                total = (total / 100) * (100 - dicountRatioX3);
                console.log(total);
            }

            array.push(total + extra);
        });
        const total = array.reduce((a, b) => a + b, 0);
        setSingleRate(total);
    };

    return (
        <div className='calculator__sidebar sidebar sidebar--white'>
            <h4>Currency</h4>
            <Dropdown
                onChange={onCurrency}
                data={currencies}
                className='sidebar__dropdown'
            />
            <br></br>
            <h4>{currency + singleRate}</h4>
        </div>
    );
};

RatesCalculatorSideBar.propTypes = {
    settings: PropTypes.object.isRequired,
};

export default RatesCalculatorSideBar;
