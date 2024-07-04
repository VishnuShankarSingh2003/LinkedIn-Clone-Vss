// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhWNP2GuQCTHQpsnMcIT5iw2rezANXlmY",
  authDomain: "linked-clone-vss.firebaseapp.com",
  projectId: "linked-clone-vss",
  storageBucket: "linked-clone-vss.appspot.com",
  messagingSenderId: "992147435221",
  appId: "1:992147435221:web:c70608a021028fdf0ffc5c",
  measurementId: "G-RWBJ9M7S1N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);