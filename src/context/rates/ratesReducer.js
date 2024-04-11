import { ADD_EVENT, UPDATE_EVENT, REMOVE_EVENT, SET_CURRENCY } from '../types';

export default (state, action) => {
    switch (action.type) {
        case ADD_EVENT:
            return {
                ...state,
                selectedEvent: [...state.selectedEvent, action.payload],
            };
        case UPDATE_EVENT:
            return {
                ...state,
                selectedEvent: [
                    ...state.selectedEvent.filter(
                        (event) => event.eventName !== action.payload.eventName
                    ),
                    action.payload,
                ],
            };
        case REMOVE_EVENT:
            return {
                ...state,
                selectedEvent: [
                    ...state.selectedEvent.filter(
                        (event) => event.eventName !== action.payload.eventName
                    ),
                ],
            };
        case SET_CURRENCY:
            return {
                ...state,
                currency: action.payload,
            };
        default:
            return state;
    }
};
