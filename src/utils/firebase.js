// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtDN3B4UZSCfFJhH_3cY_azxjip2WMG9Q",
  authDomain: "netflixgpt-c0400.firebaseapp.com",
  projectId: "netflixgpt-c0400",
  storageBucket: "netflixgpt-c0400.appspot.com",
  messagingSenderId: "170282977676",
  appId: "1:170282977676:web:790ac5dab594c53f66aea9",
  measurementId: "G-J0YVVKPL1L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();