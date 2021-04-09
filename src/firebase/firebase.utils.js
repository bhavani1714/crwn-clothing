import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAJDrWf3bvDS8uwB1ih7W1Uz9OPPZrHB98",
    authDomain: "crwn-db-4fa2e.firebaseapp.com",
    projectId: "crwn-db-4fa2e",
    storageBucket: "crwn-db-4fa2e.appspot.com",
    messagingSenderId: "1032018426769",
    appId: "1:1032018426769:web:dadae4c2ef660d96d4f830",
    measurementId: "G-CW6Z50LVQM"
  };


  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;