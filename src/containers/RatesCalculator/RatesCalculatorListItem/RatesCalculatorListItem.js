import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../../components/UI/Checkbox';
import RatesContext from '../../../context/rates/ratesContext';

const RatesCalculatorListItem = ({ event }) => {
    const ratesContext = useContext(RatesContext);

    const { checkEvent } = ratesContext;

    const initialState = {
        eventName: null,
        singleCheckbox: false,
        shareCheckbox: false,
        extraCheckbox: false,
        USD: null,
        GBP: null,
        sharedUSD: null,
        sharedGBP: null,
    };
    const [checkedList, setCheckedList] = useState(initialState);
    const [shareTable, setShareTable] = useState(false);

    useEffect(() => {
        if (checkedList.eventName !== null) checkEvent(checkedList);
        // eslint-disable-next-line
    }, [checkedList]);

    const onChange = async (e) => {
        if (e.target.id === 'shareCheckbox' && e.target.checked) {
            setShareTable(true);
            setCheckedList({
                ...checkedList,
                extraCheckbox: false,
                singleCheckbox: false,
                eventName: event.eventName,
                GBP: event.GBP,
                USD: event.USD,
                sharedUSD: event.sharedUSD,
                sharedGBP: event.sharedGBP,
                [e.target.id]: true,
            });
        } else if (e.target.id === 'shareCheckbox' && !e.target.checked) {
            setShareTable(false);
            setCheckedList({
                ...checkedList,
                [e.target.id]: false,
            });
        } else if (e.target.checked) {
            setCheckedList({
                ...checkedList,
                eventName: event.eventName,
                GBP: event.GBP,
                USD: event.USD,
                sharedUSD: event.sharedUSD,
                sharedGBP: event.sharedGBP,
                [e.target.id]: true,
            });
        } else {
            setCheckedList({
                ...checkedList,
                [e.target.id]: false,
            });
        }
    };
    return (
        <>
            <div className='item__column item__column--left'>
                <h3>{event.eventName}</h3>
                <ul className='content-list'>
                    <li>{event.location}</li>
                    <li>{event.startDate}</li>
                    <li>{event.meetings} meetings</li>
                </ul>
                <h3>One of cost £{event.GBP}</h3>
            </div>
            <div className='item__column item__column--right'>
                {event.singleTable && !shareTable && (
                    <Checkbox
                        onChange={onChange}
                        name={'Single table'}
                        id={'singleCheckbox'}
                        className={'checkbox'}
                    />
                )}
                {event.shareTable && (
                    <Checkbox
                        onChange={onChange}
                        name={'Share table'}
                        id={'shareCheckbox'}
                        className={'checkbox'}
                    />
                )}
                {event.extraDelegate && !shareTable && (
                    <Checkbox
                        onChange={onChange}
                        name={'Extra Delegate'}
                        id={'extraCheckbox'}
                        className={'checkbox'}
                    />
                )}
            </div>
        </>
    );
};

RatesCalculatorListItem.propTypes = {
    event: PropTypes.object.isRequired,
};

export default RatesCalculatorListItem;
