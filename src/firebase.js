import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBG0hKPscMa85uuQKdUNSCuFH6OLKWDC8",

  authDomain: "store-shop-c6f33.firebaseapp.com",

  projectId: "store-shop-c6f33",

  storageBucket: "store-shop-c6f33.appspot.com",

  messagingSenderId: "542856708864",

  appId: "1:542856708864:web:f2211468946c4d8a30a9e5",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, app };
