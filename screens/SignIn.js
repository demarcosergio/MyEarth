import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {signIn} from '../API/firebaseMethods';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePress = () => {
    if (!email) {
      Alert.alert('Email field is required.');
    }

    if (!password) {
      Alert.alert('Password field is required.');
    }

    signIn(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require('../assets/password.png')} />
      
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>Sign in to your account:</Text>

        <TextInput
          style={styles.formInput}
          placeholder="Enter your email"
          value={email}
          onChangeText={(email) => setEmail(email)}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.formInput}
          placeholder="Enter your password"
          value={password}
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer:{
    flex:1,
    justifyContent:'flex-start',
    alignContent: 'flex-end',
  },
  title: {
    flex:1,
    justifyContent: "flex-end",
    fontSize: 35,
    fontWeight: 'bold',
    color: '#DCE21D',
    textAlign: 'center',
    marginTop:'10%'
  },
  buttonContainer:{
    flex: 1,
    alignItems: 'center',
    marginTop:'0%'
  },
  image:{
    flex:1,
    width:'105%',
    height: '50%',
    justifyContent:'flex-start',
  },
  button: {
    width: 200,
    padding: 5,
    backgroundColor: '#47B6AD',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    alignSelf: 'center',
    margin: "2%",
  },
  buttonText: {
    fontSize:20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#47B6AD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formInput: {
    width: 300,
    fontSize:18,
    borderWidth: 1,
    borderRadius: 15,
    borderColor:'white',
    padding: 10,
    margin: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
    color: '#DCE21D',
  }
});