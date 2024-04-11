import React from 'react';
import PropTypes from 'prop-types';
import RatesCalculatorListItem from '../RatesCalculatorListItem';

const RatesCalculatorList = ({ events }) => {
    return (
        <>
            <div className='calculator__list'>
                <ul className='list list--blue'>
                    {events.map((event, i) => (
                        <li key={i} className='list__item item'>
                            <RatesCalculatorListItem key={i} event={event} />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

RatesCalculatorList.propTypes = {
    events: PropTypes.array.isRequired,
};

export default RatesCalculatorList;
