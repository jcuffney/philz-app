import React, { memo } from 'react';
import { FlatList } from 'react-native';
import { applyTo, pipe } from 'ramda';

import ProductListItem from '../ProductListItem';
import CartListItem from '../CartListItem';

export default applyTo(({
  data,
  isCart = false,
}) => {

  const renderItem = ({ item, index }) =>
    isCart
      ? <CartListItem item={item} idx={ index } />
      : <ProductListItem item={item} idx={ index } />;

  return (
    <FlatList
        data={data}
        renderItem={ renderItem }
        keyExtractor={item => item.id} />
  );
}, pipe(
  memo,
));
