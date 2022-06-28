// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBo24h9DXzWxlny8dZXgslohSqSRdxubGg",
    authDomain: "task-d2555.firebaseapp.com",
    projectId: "task-d2555",
    storageBucket: "task-d2555.appspot.com",
    messagingSenderId: "902282672551",
    appId: "1:902282672551:web:c6139195f93d574cf19e82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app)

export default database
