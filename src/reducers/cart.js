import { append, filter, equals, not, pipe, assoc } from 'ramda';

export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return append(assoc('quantity', 1, action.payload), state);
        case 'REMOVE_FROM_CART':
            return filter(pipe(equals(action.payload), not), state)
        case 'CLEAR_CART':
            return [];
        default:
            return state;
    }
};