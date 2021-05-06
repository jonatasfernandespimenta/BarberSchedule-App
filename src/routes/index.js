import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthRoutes from '../screens/Login';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        title: 'Header',
        headerStyle: {
          backgroundColor: '#26180B',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 14
        },
      }} 
      >
        <Stack.Screen name="Auth" component={AuthRoutes} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home', headerLeft: ()=> null }} />
        <Stack.Screen name="Profile" component={Profile} options={{ title: 'Perfil' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
