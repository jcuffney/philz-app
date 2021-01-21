import {
    applyTo,
    append,
    filter,
    equals,
    not,
    pipe,
    assoc,
    findIndex,
    prop,
    inc,
    update,
    dec,
    remove
} from 'ramda';

export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return append(assoc('quantity', 1, action.payload), state);
        case 'REMOVE_FROM_CART':
            return filter(pipe(equals(action.payload), not), state)
        case 'CLEAR_CART':
            return [];
        case 'UPDATE_QUANTITY':
            const { item, type } = action.payload;
            // get cart item by index (so we can update/remove it easily once the quantity is updated)
            const itemIdx = findIndex(equals(item))(state);

            // if the item isn't found; return the current state;  would likely log here as that would indicate another issue.
            if (itemIdx === -1) return state;

            // current cart item
            const cartItem = prop(itemIdx, state);

            // increment case
            if (type == '++') { 
                const newQuantity = applyTo(cartItem, pipe(
                    prop('quantity'),
                    inc,
                ));
                const updatedCartItem = assoc('quantity', newQuantity, cartItem);
                return update(itemIdx, updatedCartItem, state);
            // decrement case
            } else if (type == '--') { 
                const newQuantity = applyTo(cartItem, pipe(prop('quantity'), dec));
                console.log('new q', newQuantity)
                // if `quantity` is decremented to 0; remove it from the cart.
                if (newQuantity === 0) return remove(itemIdx, inc(itemIdx), state);

                // otherwise just decrement the quantity
                const updatedCartItem = assoc('quantity', newQuantity, cartItem);
                return update(itemIdx, updatedCartItem, state);
            }

            // this should never actually get hit...but is a catch all.
            // if this were real i'd likely log something here to note the issue.
            return state;
        default:
            return state;
    }
};