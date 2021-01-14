import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCbx8jY-ivRWhNAPvLNnPT4Rvamsqum5Fc",
    authDomain: "discord-clone-726c0.firebaseapp.com",
    databaseURL: "https://discord-clone-726c0.firebaseio.com",
    projectId: "discord-clone-726c0",
    storageBucket: "discord-clone-726c0.appspot.com",
    messagingSenderId: "1094292867302",
    appId: "1:1094292867302:web:f6c70859b48879a8ea5327",
    measurementId: "G-JJZSCZ3K4Y"
  };

  const firebaseApp  =  firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };

  export default db ;