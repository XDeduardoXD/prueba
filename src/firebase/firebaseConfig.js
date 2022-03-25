import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtIeNi5i69qhBb3N4R1jKwHL6FZsk1cfw",
  authDomain: "practica1-4b490.firebaseapp.com",
  projectId: "practica1-4b490",
  storageBucket: "practica1-4b490.appspot.com",
  messagingSenderId: "959200215696",
  appId: "1:959200215696:web:e36b3c5b896aa4d616ce15",
  measurementId: "G-0R7HBJMVZ3"
};

firebase.initializeApp(firebaseConfig);
//realtime
const db = firebase.firestore()

export {
  //realtime quitar db
  db,
  firebase
}