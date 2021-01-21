import React, { memo, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { applyTo, pipe } from 'ramda';

import ProductList from '../../components/ProductList';
import Button from '../../components/Button';
import { ScrollView } from 'react-native-gesture-handler';

export default applyTo(({
  navigation,
}) => {

  const handlePress = useCallback(() => {
    navigation.navigate('products')
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <ProductList />
      </ScrollView>
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
  },
});
