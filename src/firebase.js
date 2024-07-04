import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, orderBy } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const config = {
  apiKey: "AIzaSyDhWNP2GuQCTHQpsnMcIT5iw2rezANXlmY",
  authDomain: "linked-clone-vss.firebaseapp.com",
  projectId: "linked-clone-vss",
  storageBucket: "linked-clone-vss.appspot.com",
  messagingSenderId: "992147435221",
  appId: "1:992147435221:web:c70608a021028fdf0ffc5c",
  measurementId: "G-RWBJ9M7S1N"
};
const app = initializeApp(config);

const db = getFirestore();

export const postsRef = collection(db, "posts");

export const postsQuery = query(postsRef, orderBy("timestamp", "desc"));

export const auth = getAuth(app);

export const storage = getStorage(app);
