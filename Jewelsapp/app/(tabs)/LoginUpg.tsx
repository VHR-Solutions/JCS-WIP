
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const App: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://www.jcsjewellers.com/cdn/shop/files/WEB_1_2000x.jpg?v=1686119679' }}
              style={styles.image}
            />
                 {/* <Image source={{ uri: 'https://www.jcsjewellers.com/cdn/shop/t/2/assets/logo.png' }} style={styles.logo} /> */}

        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Login</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Username / Mobile No</Text>
            <View style={styles.inputWrapper}>
              <TextInput style={styles.input} />
              <FontAwesome name="user" style={styles.icon} />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputWrapper}>
              <TextInput style={styles.input} secureTextEntry />
              <FontAwesome name="eye-slash" style={styles.icon} />
            </View>
          </View>
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot password ?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Don't have an account? <Text style={styles.registerLink}>Register</Text></Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    width: 320,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  imageContainer: {
    position: 'relative',
    resizeMode:'contain'
  },
  image: {
    width: '100%',
    height: 180,
  },
  logo: {
    position: 'absolute',
    top: 16,
    left: 16,
    width: 100,
    height: 50,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    color: '#4a4a4a',
    marginBottom: 4,
  },
  inputWrapper: {
    position: 'relative',
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
  },
  icon: {
    position: 'absolute',
    right: 12,
    top: 12,
    color: '#9ca3af',
  },
  forgotPassword: {
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  forgotPasswordText: {
    color: '#3b82f6',
  },
  loginButton: {
    backgroundColor: '#1e3a8a',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  registerContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  registerText: {
    color: '#4a4a4a',
  },
  registerLink: {
    color: '#3b82f6',
  },
});

export default App;