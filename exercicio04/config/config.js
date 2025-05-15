// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCwB_t1SQK_jzmKut-5rMdaViTIyuadBo",
  authDomain: "aula-disp-mobile.firebaseapp.com",
  projectId: "aula-disp-mobile",
  storageBucket: "aula-disp-mobile.firebasestorage.app",
  messagingSenderId: "315956446378",
  appId: "1:315956446378:web:0d1409ff25d8c925c2fcd3",
  measurementId: "G-TSBXFKQMTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app, analytics};