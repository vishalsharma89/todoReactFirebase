import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAiQF2TEJJcswsXFlhFB8306MuQyDQ-6xY",
    authDomain: "todo-reactp.firebaseapp.com",
    projectId: "todo-reactp",
    storageBucket: "todo-reactp.appspot.com",
    messagingSenderId: "427651371029",
    appId: "1:427651371029:web:87ffe0ca8ba638b3e4be1c",
    measurementId: "G-ZY549KL7MD"

});

// Use this to initialize the firebase App
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();

export default db;
