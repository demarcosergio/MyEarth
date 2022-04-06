import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import * as firebase from 'firebase';
import {loggingOut} from '../API/firebaseMethods';
import getActivities from '../components/activities';
import BaseActivities from '../components/BaseActivities';
import getLeaderBoards from '../components/leaderBoards'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getAll} from '../components/userData'

export default function Dashboard({ navigation }) {
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

  const Tab = createBottomTabNavigator();
  //console.log("in dashboard")
  //<Tab.Screen name="Home" component={(getMap)} />
/*
  <Tab.Navigator>
      <Tab.Screen name="Activities" component={BaseActivities} />
      <Tab.Screen name="Other" component={getLeaderBoards} />
    </Tab.Navigator>
    */
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Activities') {
              iconName = focused
                ? 'globe'
                : 'globe-outline';
            } else if (route.name === 'Leader Boards') {
              getAll();
              iconName = focused ? 'list' : 'list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#47B6AD',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Activities" component={BaseActivities} />
        <Tab.Screen name="Leader Boards" component={getLeaderBoards} />
      </Tab.Navigator>
  )
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
  buttonText: {
    fontSize:20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#3FC5AB',
    alignItems: 'center',
    justifyContent: 'center',
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
});