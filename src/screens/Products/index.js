import React, { memo, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { applyTo, pipe } from 'ramda';

import ProductList from '../../components/ProductList';
import Button from '../../components/Button';

export default applyTo(({
  navigation,
}) => {

  const handlePress = useCallback(() => {
    navigation.navigate('shopping-cart')
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ProductList />
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
