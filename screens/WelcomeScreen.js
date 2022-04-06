import {ImageBackground, StyleSheet, View, Text} from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function WelcomeScreen ({navigation}) {
  return (
     <ImageBackground
      style={styles.background}
      source={require('../assets/landingPage.png')}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>myEarth</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sign Up')} >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.inlineText}>Already have an account?</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sign In')}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
      
     </ImageBackground>
  )
}

const styles = StyleSheet.create({
  buttonContainer:{
    flex: 1,
    alignItems: 'center',
    marginTop:'80%'
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 200,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#47B6AD',
    padding: 5,
    margin: '2%',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#DCE21D',
    textAlign: 'center'
  },
  inlineText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#DCE21D',
    textAlign: 'center',
    marginTop: '2%',
    marginBottom:'2%'
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
  titleContainer: {
    flex:1,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    marginTop:"5%",

  },
});