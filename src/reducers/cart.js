import { append } from 'ramda';

export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return append(action.payload, state);
        case 'CLEAR_CART':
            return [];
        default:
            return state;
    }
};