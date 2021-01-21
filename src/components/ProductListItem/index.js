import React, { memo, useCallback } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { applyTo, pipe, propOr } from 'ramda';
import { connect } from 'react-redux';

import { addToCart } from '../../actions/cart';

// abstract pure functions so they are easier to add to libs later
const isOdd = idx => idx % 2 === 1;

export default applyTo(({
  item,
  idx,
  addToCart,
}) => {
  const handlePress = useCallback(() => addToCart(item), [addToCart, item]);

  return (
    <View style={{
      ...styles.container,
      backgroundColor: isOdd(idx) ? '#CDCDCD' : '#fff', 
    }}>
      <Text>{ propOr('', 'title', item) }</Text>
      <Button title='Add To Cart' onPress={ handlePress } />
    </View>
  );
}, pipe(
  connect(null, { addToCart }),
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
