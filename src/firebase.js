import * as firebase from 'firebase';

const config = {
   apiKey: "AIzaSyDxi_NRTkLywMGaWG1oYnP_K9yBme_jr-E",
   authDomain: "afoi-f0bc0.firebaseapp.com",
   databaseURL: "https://afoi-f0bc0.firebaseio.com",
   projectId: "afoi-f0bc0",
   storageBucket: "afoi-f0bc0.appspot.com",
   messagingSenderId: "886861725888"
 };

export const firebaseApp = firebase.initializeApp (config);
