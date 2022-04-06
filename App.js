import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import * as firebase from 'firebase';
//import apiKeys from './config/keys';

import WelcomeScreen from "./screens/WelcomeScreen";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import LoadingScreen from "./screens/LoadingScreen";
import Dashboard from "./screens/Dashboard";

const firebase = require("firebase");
//require("firebase/firestore");
const Stack = createStackNavigator();

var firebaseConfig = {
  apiKey: "AIzaSyDAFLUM5N8pqMWImPwxRHpx-VmX9hOAebo",
  authDomain: "myearth-8cd48.firebaseapp.com",
  projectId: "myearth-8cd48",
  storageBucket: "myearth-8cd48.appspot.com",
  messagingSenderId: "627162441199",
  appId: "1:627162441199:web:5359d9f1ad926871fa021a",
  measurementId: "G-0G6BR94GYM",
};

export default function App() {
  if (!firebase.apps.length) {
    console.log("Connected with Firebase");
    firebase.initializeApp(firebaseConfig);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Loading"}
          component={LoadingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sign Up"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sign In"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"Dashboard"}
          component={Dashboard}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
