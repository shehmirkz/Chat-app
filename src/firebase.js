
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDlqOOhtaKpPWPvSi9f3mMBcOI1aZAwhmc",
  authDomain: "chat-app-d6dc0.firebaseapp.com",
  projectId: "chat-app-d6dc0",
  storageBucket: "chat-app-d6dc0.appspot.com",
  messagingSenderId: "338363558060",
  appId: "1:338363558060:web:bc703f703c4974940dd709"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();