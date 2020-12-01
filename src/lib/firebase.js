import * as FirebaseModule from 'firebase';
require("firebase/functions")
import firebaseConfig from '../constants/firebase';

const {
  apiKey, authDomain, databaseURL, projectId
} = firebaseConfig;

let firebaseInitialized = false;

if (apiKey && authDomain && databaseURL && projectId) {
  FirebaseModule.initializeApp({
    apiKey, authDomain, databaseURL, projectId
  });

  firebaseInitialized = true;
}

export const FirebaseRef = firebaseInitialized ? FirebaseModule.database().ref() : null;
export const Firebase = firebaseInitialized ? FirebaseModule : null;
