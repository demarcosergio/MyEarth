//import * as firebase from "firebase";
//import "firebase/firestore";
import { Alert } from "react-native";

const firebase = require("firebase");
require("firebase/firestore");
export async function registration(
  email,
  password,
  lastName,
  firstName,
  institute
) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    console.log("It's ok1");
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();
    console.log(currentUser.uid);
    db.collection("users").doc(currentUser.uid).set({
      email: currentUser.email,
      lastName: lastName,
      firstName: firstName,
      institute: institute,
    });
    console.log("It's ok3");
  } catch (err) {
    console.log("Fail");
    Alert.alert("registration error", err.message);
  }
}

export async function signIn(email, password) {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (err) {
    Alert.alert("signin error", err.message);
  }
}

export async function loggingOut() {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    Alert.alert("loggingOut error", err.message);
  }
}

// Create a function that creates a doc for the questionare
// and call it from the detail.js file

export async function pre_questionaire(
  answerOne,
  answerTwo,
  answerThree,
  answerFour,
  answerFive,
  answerSix,
  answerSeven,
  answerEight,
  answerNine,
  answerTen,
  answerEleven
) {
  try {
    const currentUser = await firebase.auth().currentUser;

    const db = firebase.firestore();
    const user = db.collection("users").doc(currentUser.uid);
    const doc = await user.get();
    let f_name = doc.data().firstName;
    let l_name = await doc.data().lastName;
    db.collection("pre_questionaire").doc(currentUser.uid).set({
      answerOne: answerOne,
      answerTwo: answerTwo,
      answerThree: answerThree,
      answerFour: answerFour,
      answerFive: answerFive,
      answerSix: answerSix,
      answerSeven: answerSeven,
      answerEight: answerEight,
      answerNine: answerNine,
      answerTen: answerTen,
      answerEleven: answerEleven,
      firstName: f_name,
      lastName: l_name,
    });
  } catch (err) {
    Alert.alert("registration error", err.message);
  }
}
export async function level_one_two_db(answerOne, answerTwo, answerThree) {
  try {
    const currentUser = await firebase.auth().currentUser;

    const db = firebase.firestore();
    const user = db.collection("users").doc(currentUser.uid);
    const doc = await user.get();
    let f_name = doc.data().firstName;
    let l_name = await doc.data().lastName;
    db.collection("level_one_two").doc(currentUser.uid).set({
      answerOne: answerOne,
      answerTwo: answerTwo,
      answerThree: answerThree,
      firstName: f_name,
      lastName: l_name,
    });
  } catch (err) {
    Alert.alert("submission error", err.message);
  }
}
export async function level_two_one_db(
  answerOne,
  answerTwo,
  answerThree,
  answerFour,
  answerFive
) {
  try {
    const currentUser = await firebase.auth().currentUser;
    const db = firebase.firestore();

    const user = db.collection("users").doc(currentUser.uid);
    const doc = await user.get();
    let f_name = doc.data().firstName;
    let l_name = await doc.data().lastName;
    db.collection("level_two_one").doc(currentUser.uid).set({
      answerOne: answerOne,
      answerTwo: answerTwo,
      answerThree: answerThree,
      answerFour: answerFour,
      answerFive: answerFive,
      firstName: f_name,
      lastName: l_name,
    });
  } catch (err) {
    Alert.alert("submission error", err.message);
  }
}

export async function level_two_two_db(answerOne) {
  try {
    const currentUser = await firebase.auth().currentUser;

    const db = firebase.firestore();
    const user = db.collection("users").doc(currentUser.uid);
    const doc = await user.get();
    let f_name = doc.data().firstName;
    let l_name = await doc.data().lastName;
    db.collection("level_two_two").doc(currentUser.uid).set({
      answerOne: answerOne,
      firstName: f_name,
      lastName: l_name,
    });
  } catch (err) {
    Alert.alert("submission error", err.message);
  }
}

export async function level_two_three_db(
  answerOne,
  answerTwo,
  answerThree,
  answerFour,
  answerFive,
  answerSix
) {
  try {
    const currentUser = await firebase.auth().currentUser;

    const db = firebase.firestore();
    const user = db.collection("users").doc(currentUser.uid);
    const doc = await user.get();
    let f_name = doc.data().firstName;
    let l_name = await doc.data().lastName;
    db.collection("level_two_three").doc(currentUser.uid).set({
      answerOne: answerOne,
      answerTwo: answerTwo,
      answerThree: answerThree,
      answerFour: answerFour,
      answerFive: answerFive,
      answerSix: answerSix,
      firstName: f_name,
      lastName: l_name,
    });
  } catch (err) {
    Alert.alert("submission error", err.message);
  }
}

export async function level_three_db(answerOne) {
  try {
    const currentUser = await firebase.auth().currentUser;
    const db = firebase.firestore();
    const user = db.collection("users").doc(currentUser.uid);
    const doc = await user.get();
    let f_name = doc.data().firstName;
    let l_name = await doc.data().lastName;
    db.collection("level_three").doc(currentUser.uid).set({
      answerOne: answerOne,
      firstName: f_name,
      lastName: l_name,
    });
  } catch (err) {
    Alert.alert("submission error", err.message);
  }
}
export async function level_four_db(answerOne, answerTwo) {
  try {
    const currentUser = await firebase.auth().currentUser;

    const db = firebase.firestore();
    const user = db.collection("users").doc(currentUser.uid);
    const doc = await user.get();
    let f_name = doc.data().firstName;
    let l_name = await doc.data().lastName;
    db.collection("level_four").doc(currentUser.uid).set({
      answerOne: answerOne,
      answerTwo: answerTwo,
      firstName: f_name,
      lastName: l_name,
    });
  } catch (err) {
    Alert.alert("submission error", err.message);
  }
}

export async function level_S_one_db(answerOne, answerTwo) {
  try {
    const currentUser = await firebase.auth().currentUser;

    const db = firebase.firestore();
    const user = db.collection("users").doc(currentUser.uid);
    const doc = await user.get();
    let f_name = doc.data().firstName;
    let l_name = await doc.data().lastName;
    db.collection("level_S_one").doc(currentUser.uid).set({
      answerOne: answerOne,
      answerTwo: answerTwo,
      firstName: f_name,
      lastName: l_name,
    });
  } catch (err) {
    Alert.alert("submission error", err.message);
  }
}

export async function level_S_two_db(answerOne) {
  try {
    const currentUser = await firebase.auth().currentUser;

    const db = firebase.firestore();
    const user = db.collection("users").doc(currentUser.uid);
    const doc = await user.get();
    let f_name = doc.data().firstName;
    let l_name = await doc.data().lastName;
    db.collection("level_S_two").doc(currentUser.uid).set({
      answerOne: answerOne,
      firstName: f_name,
      lastName: l_name,
    });
  } catch (err) {
    Alert.alert("submission error", err.message);
  }
}
export async function level_G_one_db(
  answerOne,
  answerTwo,
  answerThree,
  answerFour,
  answerFive
) {
  try {
    const currentUser = await firebase.auth().currentUser;

    const db = firebase.firestore();
    const user = db.collection("users").doc(currentUser.uid);
    const doc = await user.get();
    let f_name = doc.data().firstName;
    let l_name = await doc.data().lastName;
    db.collection("level_G_one").doc(currentUser.uid).set({
      answerOne: answerOne,
      answerTwo: answerTwo,
      answerThree: answerThree,
      answerFour: answerFour,
      answerFive: answerFive,
      firstName: f_name,
      lastName: l_name,
    });
  } catch (err) {
    Alert.alert("submission error", err.message);
  }
}

export async function level_G_two_db(
  answerOne,
  answerTwo,
  answerThree,
  answerFour,
  answerFive
) {
  try {
    const currentUser = await firebase.auth().currentUser;
    const db = firebase.firestore();
    const user = db.collection("users").doc(currentUser.uid);
    const doc = await user.get();
    let f_name = doc.data().firstName;
    let l_name = await doc.data().lastName;
    db.collection("level_G_two").doc(currentUser.uid).set({
      answerOne: answerOne,
      answerTwo: answerTwo,
      answerThree: answerThree,
      answerFour: answerFour,
      answerFive: answerFive,
      firstName: f_name,
      lastName: l_name,
    });
  } catch (err) {
    Alert.alert("submission error", err.message);
  }
}

export async function level_P_one_db(
  answerOne,
  answerTwo,
  answerThree,
  answerFour,
  answerFive
) {
  try {
    const currentUser = await firebase.auth().currentUser;

    const db = firebase.firestore();
    const user = db.collection("users").doc(currentUser.uid);
    const doc = await user.get();
    let f_name = doc.data().firstName;
    let l_name = await doc.data().lastName;
    db.collection("level_P_two").doc(currentUser.uid).set({
      answerOne: answerOne,
      answerTwo: answerTwo,
      answerThree: answerThree,
      answerFour: answerFour,
      answerFive: answerFive,
      firstName: f_name,
      lastName: l_name,
    });
  } catch (err) {
    Alert.alert("submission error", err.message);
  }
}
export async function post_questionaire(
  answerOne,
  answerTwo,
  answerThree,
  answerFour,
  answerFive,
  answerSix,
  answerSeven,
  answerEight,
  answerNine,
  answerTen,
  answerEleven
) {
  try {
    const currentUser = await firebase.auth().currentUser;

    const db = firebase.firestore();
    const user = db.collection("users").doc(currentUser.uid);
    const doc = await user.get();
    let f_name = doc.data().firstName;
    let l_name = await doc.data().lastName;
    db.collection("post_questionaire").doc(currentUser.uid).set({
      answerOne: answerOne,
      answerTwo: answerTwo,
      answerThree: answerThree,
      answerFour: answerFour,
      answerFive: answerFive,
      answerSix: answerSix,
      answerSeven: answerSeven,
      answerEight: answerEight,
      answerNine: answerNine,
      answerTen: answerTen,
      answerEleven: answerEleven,
      firstName: f_name,
      lastName: l_name,
    });
  } catch (err) {
    Alert.alert("registration error", err.message);
  }
}
export { firebase };
