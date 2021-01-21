import React, { memo, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { applyTo, pipe, pathOr } from 'ramda';
import { connect } from 'react-redux';

import ProductList from '../../components/ProductList';
import Button from '../../components/Button';
import { clearCart } from '../../actions/cart';

export default applyTo(({
  navigation,
  items,
  clearCart,
}) => {

  const handlePress = useCallback(() => {
    clearCart();
    navigation.navigate('products');
  }, [navigation, clearCart]);

  return (
    <View style={styles.container}>
      <ProductList data={ items } />
      <Button title='Checkout' onPress={ handlePress } />
    </View>
  );
}, pipe(
  connect(state => ({ items: pathOr([], ['cart'], state)}), { clearCart }),
  memo,
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
