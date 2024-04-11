import React, { useReducer } from 'react';
import RatesContext from './ratesContext';
import RatesReducer from './ratesReducer';
import useFetch from '../../hooks/useFetch';

import { ADD_EVENT, UPDATE_EVENT, REMOVE_EVENT, SET_CURRENCY } from '../types';

const apiPath = 'data/rates.json';

const RatesState = (props) => {
    const initialState = {
        rates: null,
        loading: false,
        selectedEvent: [],
        currency: 'GBP',
    };

    const [state, dispatch] = useReducer(RatesReducer, initialState);

    const { loading, data } = useFetch(apiPath);

    // Check Event
    const checkEvent = async (query) => {
        const checkExisting = await removeEvent(query);
        if (await !checkExisting) await addEvent(query);
    };

    // Add Event
    const addEvent = async (query) => {
        try {
            if (!state.selectedEvent.length) {
                dispatch({
                    type: ADD_EVENT,
                    payload: query,
                });
            } else {
                dispatch({
                    type: UPDATE_EVENT,
                    payload: query,
                });
            }
        } catch (err) {
            console.log(err);
        }
    };
    // Remove Event
    const removeEvent = async (query) => {
        try {
            if (
                !query.singleCheckbox &&
                !query.shareCheckbox &&
                !query.shareCheckboxND &&
                !query.singleCheckboxND &&
                !query.extraCheckbox
            ) {
                dispatch({
                    type: REMOVE_EVENT,
                    payload: query,
                });
                return true;
            }
            return false;
        } catch (err) {
            console.log(err);
        }
    };
    // Remove Event
    const setCurrencyType = async (query) => {
        try {
            dispatch({
                type: SET_CURRENCY,
                payload: query,
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <RatesContext.Provider
            value={{
                rates: data,
                selectedEvent: state.selectedEvent,
                loading,
                checkEvent,
                currency: state.currency,
                setCurrencyType,
            }}
        >
            {props.children}
        </RatesContext.Provider>
    );
};

export default RatesState;
