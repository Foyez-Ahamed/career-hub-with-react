// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK92TkSYFYGSY9aALz1veEnMKzuP_2ABg",
  authDomain: "career-hub-with-react.firebaseapp.com",
  projectId: "career-hub-with-react",
  storageBucket: "career-hub-with-react.appspot.com",
  messagingSenderId: "126076299843",
  appId: "1:126076299843:web:a4509be41bde819e1402f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;