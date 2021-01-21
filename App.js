import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Products from './src/screens/Products';
import ShoppingCart from './src/screens/ShoppingCart';

const Stack = createStackNavigator();

export default () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="products" component={Products} options={{ title: 'Products' }} />
          <Stack.Screen name="shopping-cart" component={ShoppingCart} options={{ title: 'Shopping Cart' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
