import React,{useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
<<<<<<< Updated upstream
import LoginUpg from "./screens/LoginUpg";
import { Routes, Route } from 'react-router-dom';
import Login from "./app/(tabs)/Login";
import PayNow from "./app/(tabs)/PayNow";
=======

import LandingApp from "./app/(tabs)/Landing";
>>>>>>> Stashed changes




  function testbtnClick(){
    console.log('button press event done in mainapp.tsx ;')
    const Stack = createNativeStackNavigator();
 
  return (
<<<<<<< Updated upstream
      <NavigationContainer>
          <Stack.Navigator initialRouteName="JCS primary page">
              
              <Stack.Screen name ="Goto Login" component={Login} />
              <Stack.Screen name ="Goto Landing" component={Landing} />
              <Stack.Screen name =" payment page go" component={PayNow} />
              
          </Stack.Navigator>
      </NavigationContainer>
  )}
=======
      <NavigationContainer linking={linking} independent={true}>
      <Stack.Navigator initialRouteName="LoginApp" >
        <Stack.Screen name="Land"   component={LandingApp} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Logindo" component={LoginScreenm} options={{ headerShown: false }} />
        <Stack.Screen name="Forgot" component={ForgotScreen} options={{ headerShown: false }} />
        <Stack.Screen name="NewUser" component={NewUser}  options={{ headerShown: false }}/>
        <Stack.Screen name="otpver" component={otpver} options={{ headerShown: false }} />
        <Stack.Screen name="Cong" component={Cong}  options={{ headerShown: false }}/>
        <Stack.Screen name="passrec" component={passrec}  options={{ headerShown: false }}/>
        <Stack.Screen name="PlanSelect" component={PlanSelect}  options={{ headerShown: false }}/>
        <Stack.Screen name="Paypage" component={Paypage}  options={{ headerShown: false }}/>
        <Stack.Screen name="Profpage" component={Profpage}  options={{ headerShown: false }}/> */}




      </Stack.Navigator>
    </NavigationContainer>
  )
}
>>>>>>> Stashed changes
    
export default testbtnClick
  
