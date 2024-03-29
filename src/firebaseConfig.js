// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-nb5oCAvfTML7STQJFYbPiMjSCfhxY14",
    authDomain: "todo-777.firebaseapp.com",
    databaseURL: "https://todo-777.firebaseio.com",
    projectId: "todo-777",
    storageBucket: "todo-777.appspot.com",
    messagingSenderId: "387240149684",
    appId: "1:387240149684:web:024acbd0f2c8a95fc04de1",
    measurementId: "G-3CFTX1FY1D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const db = getFirestore(app);


//REGISTER
export const registerUser = async (email, password, additionalInfo) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    //additional info for users
    await setDoc(doc(db, "users", user.uid), {
        ...additionalInfo,
        uid: user.uid
    });
    //returning user
    return user;
};


//LOGIN
export const loginUser = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
};