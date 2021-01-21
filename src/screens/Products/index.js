import React, { memo, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { applyTo, pipe, filter, find, propEq, pathOr } from 'ramda';
import { connect } from 'react-redux';

import ProductList from '../../components/ProductList';
import Button from '../../components/Button';

const PRODUCTS = [
  {
    id: '1',
    title: 'Product 1',
  },
  {
    id: '2',
    title: 'Product 2',
  },
  {
    id: '3',
    title: 'Product 3',
  },
  {
    id: '4',
    title: 'Product 4',
  },
  {
    id: '5',
    title: 'Product 5',
  },
  {
    id: '6',
    title: 'Product 6',
  },
];

export default applyTo(({
  navigation,
  items: cartItems,
}) => {

  const handlePress = useCallback(() => {
    navigation.navigate('shopping-cart');
  }, [navigation]);

  // not sure this would be the correct behavior...
  // but it will provide a visual indication that a item was added to the cart.
  // which is all I'm going for here :)
  const productsNotInCart = filter(({ id }) => {
    return !find(propEq('id', id), cartItems) && true;
  }, PRODUCTS);
  console.log(productsNotInCart)

  return (
    <View style={styles.container}>
      <ProductList data={ productsNotInCart } />
      <Button onPress={ handlePress } title='View Cart' />
    </View>
  );
}, pipe(
  connect(state => ({ items: pathOr([], ['cart'], state)})),
  memo,
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
