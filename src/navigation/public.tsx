import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import LoginScreen from '@screens/public/login';
import RegisterScreen from '@screens/public/register';

const Public = createStackNavigator();

const PublicStack = () => {
  return (
    <Public.Navigator headerMode="none" initialRouteName="Login">
      <Public.Screen name="Login" component={LoginScreen} />
      <Public.Screen name="Register" component={RegisterScreen} />
    </Public.Navigator>
  );
};

export default PublicStack;
