// ================= FIREBASE APP =================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";


// ================= AUTH =================
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";


// ================= DATABASE =================
import {
    getDatabase,
    ref,
    set,
    push,
    onValue,
    update
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";


// ================= ANALYTICS =================
import {
    getAnalytics
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";


// ================= CONFIG =================
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


// ================= INIT =================
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// ================= SERVICES =================
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app);


// ================= EXPORT =================
export {

    app,
    analytics,

    auth,
    provider,
    signInWithPopup,
    signOut,

    database,

    ref,
    set,
    push,
    onValue,
    update
};
