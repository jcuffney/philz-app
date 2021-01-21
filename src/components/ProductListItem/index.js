import React, { memo } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { applyTo, pipe, propOr, identity } from 'ramda';

// abstract pure functions so they are easier to add to libs later
const isOdd = idx => idx % 2 === 1;


export default applyTo(({
  item,
  idx,
}) => {
  // only apply g
  const container = {
    ...styles.container,
    backgroundColor: isOdd(idx) ? '#CDCDCD' : '#fff', 
  }
  return (
    <View style={ container }>
      <Text>{ propOr('', 'title', item) }</Text>
      <Button title='Add To Cart' />
    </View>
  );
}, pipe(
  memo,
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
});
