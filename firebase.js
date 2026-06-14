// Firebase App
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";

// Firebase Authentication
import {
    getAuth,
    GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

// Firebase Realtime Database
import {
    getDatabase,
    ref,
    set,
    push,
    onValue
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

// Firebase Analytics
import {
    getAnalytics
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";


// Firebase Configuration

const firebaseConfig = {

    apiKey: "AIzaSyAKAFyDSK1V24kXsuzSpk2imrUbrrcY2_U",

    authDomain: "chetnex-44f8e.firebaseapp.com",

    databaseURL: "https://chetnex-44f8e-default-rtdb.firebaseio.com",

    projectId: "chetnex-44f8e",

    storageBucket: "chetnex-44f8e.firebasestorage.app",

    messagingSenderId: "654611148850",

    appId: "1:654611148850:web:6604dbcfa24b506da6cc2b",

    measurementId: "G-RCD186FVVM"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


// Analytics

const analytics = getAnalytics(app);


// Authentication

const auth = getAuth(app);

const provider = new GoogleAuthProvider();


// Realtime Database

const database = getDatabase(app);


// Export Everything

export {

    app,

    analytics,

    auth,

    provider,

    database,

    ref,

    set,

    push,

    onValue

};