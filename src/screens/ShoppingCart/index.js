import React, { memo, useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';
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
    <View style={{
      ...styles.container,
      ...(items.length === 0 ? {
        alignItems: 'center',
        justifyContent: 'center',
      } : {}),
    }}>
      { items.length === 0
        ? <Text>No Items in the Cart</Text>
        : <ProductList data={ items } isCart={ true } />
      }
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
