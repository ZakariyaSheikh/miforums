import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../../components/UI/Checkbox';
import RatesContext from '../../../context/rates/ratesContext';
import { currencyFormat } from '../../../utils/currencyFormat';

const RatesCalculatorListItem = ({ event }) => {
    const ratesContext = useContext(RatesContext);
    const { checkEvent, currency } = ratesContext;

    const initialState = {
        eventName: null,
        singleCheckbox: false,
        singleCheckboxND: false,
        shareCheckboxND:false,
        shareCheckbox: false,
        extraCheckbox: false,
        earlyBird: false,
        vipConnect: false,
        privateEvent: false,
        note: false,
        USD: null,
        GBP: null,
        sharedUSD: null,
        sharedGBP: null,
        extraNote: null,
    };
    const [checkedList, setCheckedList] = useState(initialState);
    const [shareTable, setShareTable] = useState(false);
    const [shareTableND, setShareTableND] = useState(false);
    const [extraDelegate, setExtraDelegate] = useState(false);

    useEffect(() => {
        if (checkedList.eventName !== null) checkEvent(checkedList);
        // eslint-disable-next-line
    }, [checkedList]);

    const onChange = async (e) => {
        if ((e.target.id === 'shareCheckbox' && e.target.checked) || (e.target.id === 'shareCheckboxND' && e.target.checked)) {
            setShareTable(true);
            setShareTableND(true);
            setCheckedList({
                ...checkedList,
                extraCheckbox: false,
                singleCheckbox: false,
                singleCheckboxND: false,
                eventName: event.eventName,
                GBP: event.GBP,
                USD: event.USD,
                sharedUSD: event.sharedUSD,
                sharedGBP: event.sharedGBP,
                meetings: event.meetings,
                [e.target.id]: true,
                earlyBird: event.earlyBird,
                vipConnect: event.vipConnect,
                privateEvent: event.privateEvent,
            });
        } else if ((e.target.id === 'shareCheckbox') || (e.target.id === 'shareCheckboxND' && !e.target.checked)) {
            setShareTable(false);
            setShareTableND(false);
            setExtraDelegate(false);
            setCheckedList({
                ...checkedList,
                [e.target.id]: false,
            });

        } else if (e.target.checked) {
            setExtraDelegate(true);
            setCheckedList({
                ...checkedList,
                eventName: event.eventName,
                GBP: event.GBP,
                USD: event.USD,
                sharedUSD: event.sharedUSD,
                sharedGBP: event.sharedGBP,
                meetings: event.meetings,
                [e.target.id]: true,
                earlyBird: event.earlyBird,
                vipConnect: event.vipConnect,
                privateEvent: event.privateEvent,
                location: event.location,
            });
        } else {
            setCheckedList({
                ...checkedList,
                [e.target.id]: false,
            });
            e.target.id !== 'extraCheckbox' && setExtraDelegate(false);
        }
    };
    return (
        <>
            <div className='item__column item__column--left'>
                <h3 className="calculatorHeader">{event.eventName}</h3>
                <p>{event.location}</p>
                <p>{event.date}</p>

                <br />
                <div className='mobileOneOff'>
                <h3>

                    <br /> {currencyFormat(currency)}
                    {event[currency]}
                </h3>
            </div>
                <br/>
                <p className={'small'} style={{paddingRight:'20px'}}>{event.extraNote}</p>

                {/* <h3>
                    Shared cost {currencyFormat(currency)}
                    {event[`shared${currency}`]}
                </h3> */}
                <hr />
            </div>

            <div className='item__column item__column--right mobileHide'>
                <p>
                   
                    <br /> {currencyFormat(currency)}
                    {event[currency]}<span>{event.note}</span>
                </p>
            </div>
        </>
    );
};

RatesCalculatorListItem.propTypes = {
    event: PropTypes.object.isRequired,
};

export default RatesCalculatorListItem;
