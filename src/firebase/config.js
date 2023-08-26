// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0oIPht1eT3HW5Defkw3lkS7WqjSpok6U",
    authDomain: "birdie-golfshop.firebaseapp.com",
    projectId: "birdie-golfshop",
    storageBucket: "birdie-golfshop.appspot.com",
    messagingSenderId: "1029806194801",
    appId: "1:1029806194801:web:87bccaf9806b98064f9bd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)