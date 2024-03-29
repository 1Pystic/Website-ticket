// Import the functions you need from the SDKs you need
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { isSupported, initializeAnalytics } from '@firebase/analytics';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Mock the window object
global.window = global;

// Check if the function is not already defined
if (typeof initializeAnalytics !== 'function') {
  // Mocking Firebase Analytics
  window.initializeAnalytics = () => {
    console.log('Firebase Analytics initialized (mock)');
    return {
      logEvent: () => {},
      // Add other methods if needed
    };
  };
}

if (isSupported()) {
  const analytics = initializeAnalytics();
  // Your analytics-related code here
} else {
  console.log('Analytics is not supported in this environment.');
}

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMIuZUWFV9BdZPv03bNx17kiuIjXfS36E",
  authDomain: "openhx.firebaseapp.com",
  databaseURL: "https://openhx-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "openhx",
  storageBucket: "openhx.appspot.com",
  messagingSenderId: "140868351246",
  appId: "1:140868351246:web:a495c0da3dda143d0bd35f",
  measurementId: "G-RE7RERFZQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

async function getStudent(db) {
  const Student = collection(db, 'Student');
  const studentSnapshot = await getDocs(Student);
  const studentList = studentSnapshot.docs.map(doc => doc.data());
  return studentList;
}

const Student = await getStudent(db)
console.log(Student);
