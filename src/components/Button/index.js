import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { applyTo, pipe } from 'ramda';

export default applyTo(({
  onPress,
  title,
}) => {

  return (
    <TouchableOpacity style={ styles.btn } onPress={ onPress }>
      <Text style={ styles.btnText }>{ title }</Text>
    </TouchableOpacity>
  );
}, pipe(
  memo,
));

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    backgroundColor: '#000',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 100,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
  }
});
