import React, { useContext } from 'react';
import RatesCalculatorList from '../../components/RatesCalculator/RatesCalculatorList';
import RatesCalculatorSideBar from '../../components/RatesCalculator/RatesCalculatorSideBar';
import RatesContext from '../../context/rates/ratesContext';

import './RatesCalculator.scss';

const RatesCalculator = () => {
    const ratesContext = useContext(RatesContext);

    const { rates, loading, setCurrencyType, currency } = ratesContext;
    if (loading) return <div className='wrapper center'>Loading...</div>;
    const { events, settings } = rates;

    return (
        <>
                <div className='rates'>
                    <div className='rates__calculator calculator'>
                        <RatesCalculatorList
                            events={events}
                            currency={currency}
                        />
                        {/* <RatesCalculatorSideBar
                            settings={settings}
                            setCurrency={setCurrencyType}
                        /> */}
                    </div>
                </div>
                <p className="rates-reference">
                    Calculator for reference only - to start the booking
                    process, please click the sign up button.
                </p>

        </>
    );
};

export default RatesCalculator;
