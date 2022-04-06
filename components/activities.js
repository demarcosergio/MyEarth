import React, { Component, useEffect, useState,  } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {data} from '../API/data'

export default function getActivities({navigation}){
  //const { navigation } = props
  let currentUserUID = firebase.auth().currentUser.uid;
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    async function getUserInfo(){
      try {
        let doc = await firebase
          .firestore()
          .collection('users')
          .doc(currentUserUID)
          .get();

        if (!doc.exists){
          Alert.alert('No user data found!')
        } else {
          let dataObj = doc.data();
          setFirstName(dataObj.firstName)
        }
      } catch (err){
      Alert.alert('There is an error.', err.message)
      }
    }
    getUserInfo();
  })
  return (
    
    <View style={styles.container}>
      <ScrollView style={{ flex: 1, width:'100%' }}>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail',{data, type:'pre-questionnaire'} )}>
          <Text style={styles.buttonText}>Pre-Questionnaire</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 25, paddingLeft:10, fontFamily: 'HelveticaNeue-LightItalic' }}>Background</Text>

        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail', {data, type:'1.1'})}>
          <Text style={styles.buttonText}>Understanding plastic</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail',{data,type:'1.2'} )}>
          <Text style={styles.buttonText}>Your plastic footprint</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 25, paddingLeft:10, fontFamily: 'HelveticaNeue-LightItalic' }}>Bronze Badge</Text>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail',{data, type:'2.1'})}>
          <Text style={styles.buttonText}>Alternatives to plastic</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail',{data, type:'2.2'})}>
          <Text style={styles.buttonText}>Movie screening</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail',{data, type:'2.3'})}>
          <Text style={styles.buttonText}>Identifying alternatives </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail',{data, type:'3'})}>
          <Text style={styles.buttonText}>Recycling Art (Trash to Treasure) </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail',{data, type:'4'})}>
          <Text style={styles.buttonText}>Making a difference at home</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 25, paddingLeft:10, fontFamily: 'HelveticaNeue-LightItalic' }}>Silver Badge</Text>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail',{data, type:'S1'})}>
          <Text style={styles.buttonText}>Observation</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail',{data, type: 'S2'})}>
          <Text style={styles.buttonText}>Sharing</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 25, paddingLeft:10,fontFamily: 'HelveticaNeue-LightItalic'  }}>Gold Badge</Text>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail',{data, type:'G1'})}>
          <Text style={styles.buttonText}> Rethinking plastic</Text>
        </TouchableOpacity>

       <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail',{data, type:'G2'})}>
          <Text style={styles.buttonText}>Building change agents</Text>
        </TouchableOpacity>
       

        <Text style={{ fontSize: 25, paddingLeft:10, fontFamily: 'HelveticaNeue-LightItalic', }}>Platinum badge</Text>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail',{data, type:'P1'})}>
          <Text style={styles.buttonText}>Sustaining Change </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail',{data, type:'post-questionnaire'})}>
          <Text style={styles.buttonText}>Post-Questionnaire </Text>
        </TouchableOpacity>

        

      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  button: {
    width: 150,
    padding: 5,
    backgroundColor: '#47B6AD',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 20,
    alignSelf: 'center',
  },
  buttonContainer: {
    width: 100,
    padding: 2,
    backgroundColor: '#47B6AD',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    alignSelf: 'center',
    margin: "2%",
  },
  buttonText: {
    fontSize:18,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Helvetica'
  },
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    width:'100%', 
    paddingTop:50, 
    backgroundColor:'#80E8D7E3'
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'italic',
    marginTop: '2%',
    marginBottom: '10%',
    fontWeight: 'bold',
    color: 'black',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2E6194',
  },
  itemContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'#fff',
    paddingTop:15,
    paddingBottom:15,
    width:'100%',
    borderColor: "black",
    borderWidth:1,
    borderRadius:10,
    marginTop:10,
  },
});