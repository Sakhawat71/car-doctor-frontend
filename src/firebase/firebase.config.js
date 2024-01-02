
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBv6b153QY-vgIclXbFe9glGQNO2OXCmyY",
  authDomain: "car-doctor-71.firebaseapp.com",
  projectId: "car-doctor-71",
  storageBucket: "car-doctor-71.appspot.com",
  messagingSenderId: "449743403768",
  appId: "1:449743403768:web:bd8d8317f483556bb7d90d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;