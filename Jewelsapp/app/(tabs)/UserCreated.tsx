
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigate } from 'react-router-dom';

const App: React.FC = () => {
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesome name="arrow-left" size={24} color="#3B3B3B" />
        </TouchableOpacity>
      </View>
      <Image
              style={styles.logo}
              //className="w-full flex-1"
              source={require("C:/JewelsProj/Jewelsapp/assets/images/JCSLogo.png")}
            />
      <View style={styles.iconContainer}>
        <View style={styles.iconBackground}>
          <FontAwesome name="check" size={48} color="white" />
        </View>
      </View>
      <Text style={styles.title}>Congrats!!</Text>
      <Text style={styles.message}>
        You have successfully changed password. Please use new password while login.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBEB',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    position: 'absolute',
    top: 40,
    left: 16,
  },
  logo: { 
    resizeMode: "contain",
     height:100,
      width:100,
      marginBottom: 24,
    },
  
  iconContainer: {
    marginBottom: 24,
  },
  iconBackground: {
    backgroundColor: '#1E3A8A',
    padding: 16,
    borderRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  message: {
    fontSize: 16,
    color: '#4B5563',
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#1E3A8A',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
