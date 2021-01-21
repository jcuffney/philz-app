import React, { memo, useCallback } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { applyTo, pipe, propOr } from 'ramda';
import { connect } from 'react-redux';

import { removeFromCart, updateQuantity } from '../../actions/cart';

// abstract pure functions so they are easier to add to libs later
const isOdd = idx => idx % 2 === 1;

export default applyTo(({
  item,
  idx,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
}) => {
  const handlePress = useCallback(() => removeFromCart(item), [removeFromCart, item]);

  const handleIncrement = useCallback(() => incrementQuantity(item), [incrementQuantity, item]);
  const handleDecrement = useCallback(() => decrementQuantity(item), [decrementQuantity, item]);

  return (
    <View style={{
      ...styles.container,
      backgroundColor: isOdd(idx) ? '#CDCDCD' : '#fff', 
    }}>
      <Text>{ propOr('', 'title', item) } ({ propOr('', 'quantity', item)})</Text>
      <Button title='-1' onPress={ handleDecrement } />
      <Button title='+1' onPress={ handleIncrement } />
      <Button title='Remove' onPress={ handlePress } />
    </View>
  );
}, pipe(
  connect(null, {
    removeFromCart,
    incrementQuantity: updateQuantity('++'),
    decrementQuantity: updateQuantity('--'),
  }),
  memo,
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
});
