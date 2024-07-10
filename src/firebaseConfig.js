import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAUshQwGz_USz9TA1JVfv83OjzvAymO5TA",
  authDomain: "restaurant-756f9.firebaseapp.com",
  databaseURL: "https://restaurant-756f9-default-rtdb.firebaseio.com",
  projectId: "restaurant-756f9",
  storageBucket: "restaurant-756f9.appspot.com",
  messagingSenderId: "722390473971",
  appId: "1:722390473971:web:fbcef52964eb3c70f22b86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export{app}