import {initializeApp, getApp, getApps} from 'firebase/app';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyA9w4xp8I8JwpRCg4N9lSsrOb1_GeNA5K8",
  authDomain: "food-delivery-c7235.firebaseapp.com",
  projectId: "food-delivery-c7235",
  storageBucket: "food-delivery-c7235.appspot.com",
  messagingSenderId: "167031842930",
  appId: "1:167031842930:web:b6be9fa5426b6cb6947aeb"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)

export {app, db, storage}