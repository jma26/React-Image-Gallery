import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDz9OXw25Yee0ftKapC2V2TK-VnOli8KAM",
  authDomain: "reactagram-26507.firebaseapp.com",
  projectId: "reactagram-26507",
  storageBucket: "reactagram-26507.appspot.com",
  messagingSenderId: "111071041277",
  appId: "1:111071041277:web:489e633b5ae64de1815094"
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const db = app.firestore();