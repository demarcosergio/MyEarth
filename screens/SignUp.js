import React, { useState } from 'react';
import { View, Text, TextInput, Alert, ScrollView, Keyboard ,StyleSheet, SafeAreaView, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { registration } from '../API/firebaseMethods';

export default function SignUp({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [institute, setInstitute] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const emptyState = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setInstitute('');
    setConfirmPassword('');
  };

  const handlePress = () => {
    if (!firstName) {
      Alert.alert('First name is required');
    } else if (!email) {
      Alert.alert('Email field is required.');
    } else if (!institute) {
      Alert.alert('institute field is required.');
    }
    else if (!password) {
      Alert.alert('Password field is required.');
    } else if (!confirmPassword) {
      setPassword('');
      Alert.alert('Confirm password field is required.');
    } else if (password !== confirmPassword) {
      Alert.alert('Password does not match!');
    } else {
      registration(
        email,
        password,
        lastName,
        firstName,
        institute
      );
      navigation.navigate('Loading');
      emptyState();
    }
  };

  return (
    <SafeAreaView>
     <View style={styles.container}>
       <Image style={styles.image} source={require('../assets/password.png')} />
       <Text style={styles.text}>Create an account </Text>

       <ScrollView onBlur={Keyboard.dismiss}>
          <TextInput
          style={styles.textInput}
          placeholder="First name*"
          value={firstName}
          onChangeText={(name) => setFirstName(name)}
          />
         <TextInput
          style={styles.textInput}
          placeholder="Last name"
          value={lastName}
          onChangeText={(name) => setLastName(name)}
         />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your Institute"
          value={institute}
          onChangeText={(institute) => setInstitute(institute)}
         />
         <TextInput
          style={styles.textInput}
          placeholder="Enter your email*"
          value={email}
          onChangeText={(email) => setEmail(email)}
          keyboardType="email-address"
          autoCapitalize="none"
         />

          <TextInput
          style={styles.textInput}
          placeholder="Enter your password*"
          value={password}
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={true}
         />
         <TextInput
          style={styles.textInput}
          placeholder="Retype your password to confirm*"
          value={confirmPassword}
          onChangeText={(password2) => setConfirmPassword(password2)}
          secureTextEntry={true}
          />
          <TouchableOpacity style={styles.button} onPress={handlePress}>
           <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.inlineText}>Already have an account?</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sign In')}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
       </ScrollView>
     </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image:{
    flex:1,
    width:'110%',
    height:'100%',
    justifyContent:'flex-start',
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#47B6AD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 200,
    padding: 5,
    backgroundColor: '#47B6AD',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    alignSelf: 'center',
    margin: '5%',
  },
  buttonText: {
    fontSize:20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inlineText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#DCE21D',
    textAlign: 'center',
    marginTop: '5%',
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
    margin: '5%',
    marginTop:'10%',
    fontWeight: 'bold',
    color: '#DCE21D',
  },
  textInput: {
    width: 300,
    fontSize:18,
    borderRadius: 15,
    borderWidth: 1,
    borderColor:'#a4eddf',
    padding: 10,
    margin: 5,
  },
});