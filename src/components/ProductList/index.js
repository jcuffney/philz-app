import React, { memo } from 'react';
import { FlatList } from 'react-native';
import { applyTo, pipe } from 'ramda';

import ProductListItem from '../ProductListItem';

export default applyTo(({
  data,
}) => {

  const renderItem = ({ item, index }) => <ProductListItem item={item} idx={ index } />;

  return (
    <FlatList
        data={data}
        renderItem={ renderItem }
        keyExtractor={item => item.id} />
  );
}, pipe(
  memo,
));
