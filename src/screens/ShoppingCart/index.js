import React, { memo, useCallback } from 'react';
import { StyleSheet, Button, View } from 'react-native';

import ProductList from '../../components/ProductList';

export default ({
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
