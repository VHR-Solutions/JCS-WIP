import React,{useState} from "react";
import { Text } from "react-native";
import Home from"@/screens/index";
//import Navigator from './routes/stack';
import Landing from "@/screens/Landing";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginUpg from "./screens/LoginUpg";
import { Routes, Route } from 'react-router-dom';
import Login from "./app/(tabs)/Login";
import PayNow from "./app/(tabs)/PayNow";




  function testbtnClick(){
    console.log('button press event done in mainapp.tsx ;')
    const Stack = createNativeStackNavigator();
 
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="JCS primary page">
              
              <Stack.Screen name ="Goto Login" component={Login} />
              <Stack.Screen name ="Goto Landing" component={Landing} />
              <Stack.Screen name =" payment page go" component={PayNow} />
              
          </Stack.Navigator>
      </NavigationContainer>
  )}
    
export default testbtnClick
  
