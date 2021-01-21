import React, { memo, useCallback } from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { applyTo, pipe } from 'ramda';

import ProductList from '../../components/ProductList';

export default applyTo(({
  navigation,
}) => {

  const handlePress = useCallback(() => {
    navigation.navigate('products')
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ProductList />
      <Button title='Checkout' onPress={ handlePress } />
    </View>
  );
}, pipe(
  memo,
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
