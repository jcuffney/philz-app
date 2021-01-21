import React, { memo, useCallback } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { applyTo, pipe } from 'ramda';

import ProductList from '../../components/ProductList';

export default applyTo(({
  navigation,
}) => {

  const handlePress = useCallback(() => {
    navigation.navigate('shopping-cart')
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ProductList />
      <Button title='View Cart' onPress={ handlePress } style={ styles.btn } />
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
  btn: {
    flex: 1,
    backgroundColor: '#000',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
