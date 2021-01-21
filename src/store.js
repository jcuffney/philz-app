import { createStore } from 'redux';

import { combineReducers } from 'redux';
import cartReducer from './reducers/cart';

export default createStore(combineReducers({
    cart: cartReducer,
}));