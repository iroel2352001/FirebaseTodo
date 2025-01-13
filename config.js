import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCDzhM8H54Ays6GIjwXiSCUZr5SFPwEe38",
    authDomain: "todolist-98aa6.firebaseapp.com",
    databaseURL: "https://todolist-98aa6-default-rtdb.firebaseio.com",
    projectId: "todolist-98aa6",
    storageBucket: "todolist-98aa6.firebasestorage.app",
    messagingSenderId: "725754295777",
    appId: "1:725754295777:web:0f2352ceb494ef55f94ea0" 
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export { firebase };