import Login from '@/screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Button, Pressable } from 'react-native';
import LandingApp from './Landing';


const Stack = createNativeStackNavigator();

const mainpageApp: React.FC = () => {
    
 
    return (
      <View>
      <NavigationContainer   independent={true}>
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
  

  
  
 

    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
      <Image
              style={styles.logo}
              //className="w-full flex-1"
              source={require("C:/Users/Jeeva/VHR/First_Project/JewelsProj/Jewelsapp/assets/images/JCSLogo.png")}
            />
        {/* <Text style={styles.title}>JCS</Text>
        <Text style={styles.subtitle}>Jewel Creations</Text> */}
      </View>
      <View style={styles.buttonContainer}>
        

        <TouchableOpacity style={styles.signupButton}> 
          <Text style={styles.signupButtonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image source={{ uri: 'https://www.jcsjewellers.com/cdn/shop/collections/Gold-Rings_1920x.jpg?v=1657794189' }} style={styles.cardImage} />
          <View style={styles.cardContent}>
            <Text style={styles.cardSubtitle}>LATEST COLLECTION</Text>
            <Text style={styles.cardTitle}>Wedding Rings</Text>
            <Text style={styles.cardDescription}>at a unbelievable price</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Image source={{ uri: 'https://www.jcsjewellers.com/cdn/shop/collections/JCGJRN1008_2_1920x.jpg?v=1627546346' }} style={styles.cardImage} />
          <View style={styles.cardContent}>
            <Text style={styles.cardSubtitle}>LATEST COLLECTION</Text>
            <Text style={styles.cardTitle}>Necklace</Text>
            <Text style={styles.cardDescription}>at a unbelievable price</Text>
            <TouchableOpacity style={[styles.buyButton, styles.buyButtonYellow]}>
              <Text style={styles.buyButtonText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#fdf6d8',
    padding: 16,
  },
  screen:{
    flex: 1,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: { 
    resizeMode: "contain",
     height:100,
      width:100
    },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a3d7c',
  },
  subtitle: {
    fontSize: 16,
    color: '#1a3d7c',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  loginButton: {
    backgroundColor: '#1a3d7c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginRight: 8,
  },
  loginButtonText: {
    color: '#fff',
  },
  signupButton: {
    borderColor: '#1a3d7c',
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  signupButtonText: {
    color: '#1a3d7c',
  },
  skipText: {
    color: '#1a3d7c',
    marginBottom: 16,
  },
  cardContainer: {
    width: '100%',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 16,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 220,
    resizeMode:'contain'
  },
  cardContent: {
    padding: 16,
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#888',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardDescription: {
    color: '#666',
  },
  buyButton: {
    backgroundColor: '#1a3d7c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginTop: 8,
  },
  buyButtonYellow: {
    backgroundColor: '#fbbf24',
  },
  buyButtonText: {
    color: '#fff',
  },
});

export default mainpageApp;
