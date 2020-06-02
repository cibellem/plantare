import * as firebase from "firebase/app";
import "firebase/auth";
require("dotenv").config();

const app = firebase.initializeApp({
  apiKey: "AIzaSyAZBrHCyEUIViTCFDdD0PIoZX8-_KquTQU",
  authDomain: "plantare-ed50a.firebaseapp.com",
  databaseURL: "https://plantare-ed50a.firebaseio.com",
  projectId: "plantare-ed50a",
  storageBucket: "plantare-ed50a.appspot.com",
  messagingSenderId: "581288698149",
  appId: "1:581288698149:web:95f5b8f28978bf743a7acc",
  measurementId: "G-VEBSK8HF2Q",
});

export default app;
