import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { applyTo, pipe } from 'ramda';

export default applyTo(() => {
  return (
    <View style={styles.container}>
      <Text>Product List</Text>
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
