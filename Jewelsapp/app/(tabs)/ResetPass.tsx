
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const RecoveryPasswordScreen: React.FC = () => {
  const [code, setCode] = useState<string[]>(['', '', '', '', '', '']);
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleCodeChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <FontAwesome name="arrow-left" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.logo}>
      <Image
              style={styles.logo}
              //className="w-full flex-1"
              source={require("C:/JewelsProj/Jewelsapp/assets/images/JCSLogo.png")}
            />

      </View>
      <Text style={styles.title}>Recovery Password</Text>
      <Text style={styles.subtitle}>Reset code was sent to your email. Please enter the code to reset password.</Text>
      <View style={styles.codeInputs}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            maxLength={1}
            keyboardType="numeric"
            value={digit}
            onChangeText={(text) => handleCodeChange(text, index)}
          />
        ))}
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="New Password"
          secureTextEntry={!showPassword}
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <FontAwesome
          name={showPassword ? 'eye-slash' : 'eye'}
          size={24}
          color="black"
          style={styles.eyeIcon}
          onPress={() => setShowPassword(!showPassword)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Confirm New Password"
          secureTextEntry={!showPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <FontAwesome
          name={showPassword ? 'eye-slash' : 'eye'}
          size={24}
          color="black"
          style={styles.eyeIcon}
          onPress={() => setShowPassword(!showPassword)}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
      <View style={styles.resendCode}>
        <Text>Didn't receive a code? <Text style={styles.resendLink}>Resend code</Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9E5',
    padding: 20,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  logo: { 
    resizeMode: "contain",
     height:100,
      width:100,
      marginBottom: 20,
    },

  logoImage: {
    width: 150,
    height: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    marginVertical: 10,
  },
  codeInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  codeInput: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 24,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 20,
    position: 'relative',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 10,
    fontSize: 16,
  },
  eyeIcon: {
    position: 'absolute',
    right: 20,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
  button: {
    backgroundColor: '#001F3F',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  resendCode: {
    marginTop: 20,
    alignItems: 'center',
  },
  resendLink: {
    color: '#001F3F',
    fontWeight: 'bold',
  },
});

export default RecoveryPasswordScreen;
