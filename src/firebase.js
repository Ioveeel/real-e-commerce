// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoSfmvgff7zTcK28da-5B_MSBZh5RHljU",
  authDomain: "e-state-221c1.firebaseapp.com",
  projectId: "e-state-221c1",
  storageBucket: "e-state-221c1.appspot.com",
  messagingSenderId: "51064474397",
  appId: "1:51064474397:web:30bbcf5a6b3e743e2a6ff4"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()