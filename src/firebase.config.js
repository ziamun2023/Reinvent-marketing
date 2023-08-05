// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtOBtjzwHTsifrnnVxVFU-dAP38T8_pEQ",
  authDomain: "reinvent-b6e50.firebaseapp.com",
  projectId: "reinvent-b6e50",
  storageBucket: "reinvent-b6e50.appspot.com",
  messagingSenderId: "1008685203104",
  appId: "1:1008685203104:web:9065d0d6460b393a37d3c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app