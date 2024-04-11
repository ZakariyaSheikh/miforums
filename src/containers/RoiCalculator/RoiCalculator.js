import React, { useState, useCallback } from 'react';
import RoiCalculatorItem from '../../components/RoiCalculator/RoiCalculatorItem';
import './RoiCalculator.scss';

const RoiCalculator = () => {
    const initialValue = {
        pax: null,
        noNights: null,
        dailyRate: null,
        incrementalSpend: null,
        perDelegate: '...',
        bookingWorth: null,
    };

    const [value, setValue] = useState(initialValue);

    const onChangeInput = useCallback(
        (e) => {
            console.log('looool');
            setValue({ ...value, [e.target.name]: e.target.value });
        },
        [value]
    );

    const onCurrency = (e) => {
        console.log(e.target.value);
    };

    console.log('poo');
    return (
        <div className='roi'>
            <h2 className='roi__heading'>
                See how far your investment will take you
            </h2>
            <p>
                You tell us how it is. Fill in the form below with your numbers
                and see how much you could make with m&i.
            </p>
            <RoiCalculatorItem
                name='currency'
                dropdown={true}
                dropdownData={['a', 'b']}
                onCurrency={onCurrency}
            >
                What is the average number of pax of your typical MICE booking?
            </RoiCalculatorItem>
            <RoiCalculatorItem
                onChangeInput={onChangeInput}
                name='pax'
                placeholder='Pax'
                value={value.pax}
            >
                What is the average number of pax of your typical MICE booking?
            </RoiCalculatorItem>
            <RoiCalculatorItem
                onChangeInput={onChangeInput}
                name='noNights'
                type='number'
            >
                What is the average number of nights of your typical MICE
                booking?
            </RoiCalculatorItem>
        </div>
    );
};

export default RoiCalculator;
