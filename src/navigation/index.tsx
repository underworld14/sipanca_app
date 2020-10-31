import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// import PublicStack from './public';
import HomeScreen from '@screens/home';
// import MyBottomTab from './tab';
// import MateriScreen from '@screens/materi';

const Stack = createStackNavigator();

const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="Public" component={PublicStack} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
