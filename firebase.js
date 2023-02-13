import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBlvzqh7KuNd73yB4pk6BQfywaM6XnoRMg",
  authDomain: "disney-auth-dc194.firebaseapp.com",
  projectId: "disney-auth-dc194",
  storageBucket: "disney-auth-dc194.appspot.com",
  messagingSenderId: "1083523228529",
  appId: "1:1083523228529:web:6d3cd2612ed87a3e948cd0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();

export {app, db, storage}