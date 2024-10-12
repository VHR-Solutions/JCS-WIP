// src/navigation/RootNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import loginApp from './Login';

const Stack = createNativeStackNavigator();

const RootNavigator: React.FC = () => {
    console.log("inside navigator")
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        name="Login" 
        component={loginApp} 
        options={{ title: 'Login' }} 
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
