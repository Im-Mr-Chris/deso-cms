// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

{
    "parserOptions"; {
        "sourceType";
        "module";
    };
}


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCEsBGXHDif6hwdEjjHPrIX3dT6H1GrGr4",
    authDomain: "daas-2c7c0.firebaseapp.com",
    databaseURL: "https://daas-2c7c0-default-rtdb.firebaseio.com",
    projectId: "daas-2c7c0",
    storageBucket: "daas-2c7c0.appspot.com",
    messagingSenderId: "113686609589",
    appId: "1:113686609589:web:2ed29eb0f5e92ea49748fc",
    measurementId: "G-50D3GNTX9F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);