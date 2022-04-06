import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, FlatList, List} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import {loggingOut} from '../API/firebaseMethods';
import {getAll, userData, user_institute} from './userData'
import {Dashboard} from '../screens/Dashboard'

export default function getLeaderBoards({navigation}) {
  let currentUserUID = firebase.auth().currentUser.uid;
  const [firstName, setFirstName] = useState('');

  const handlePress = () => {
    loggingOut();
    navigation.replace('Home');
  };

  getAll();
  //console.log(userData);
  

  const listItems = userData.map((d) => <Text style={styles.itemContainer} key={d.firstName}>{d.firstName}</Text>);
  return (
    <View style={styles.container}>
        <ScrollView style={{marginTop:85, width:"100%"}}>
          <Text style={styles.titleText}>{user_institute} Leader Boards</Text>
          {listItems}
        </ScrollView>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
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
  buttonText: {
    fontSize:20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
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
    alignItems: 'flex-start',
    justifyContent:'flex-start',
    paddingTop:15,
    paddingBottom:15,
    paddingLeft:10,
    fontSize:22,
    color: 'black',
    fontFamily: 'Helvetica',
    borderWidth:1,
    borderRadius:10,
    marginTop:10,
  },
  titleText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2E6194',
  },
});