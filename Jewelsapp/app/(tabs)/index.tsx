import Login from "@/screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Button,
  Pressable,
} from "react-native";
import LandingApp from "./Landing";
import Homescreen from "@/screens/Home";
import CreateAccountApp from "./CreateAccount";

const Stack = createNativeStackNavigator();

const mainpageApp: React.FC = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Homescreen}
        />
        <Stack.Screen name="CreateAccount" component={CreateAccountApp} />
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

    
  );
};



export default mainpageApp;
