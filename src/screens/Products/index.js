import React, { memo, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { applyTo, pipe } from 'ramda';

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
];

export default applyTo(({
  navigation,
}) => {

  const handlePress = useCallback(() => {
    navigation.navigate('shopping-cart')
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ProductList data={ PRODUCTS } />
      <Button onPress={ handlePress } title='View Cart' />
    </View>
  );
}, pipe(
  memo,
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
