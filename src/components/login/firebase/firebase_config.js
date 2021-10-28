// import { initializeApp } from 'firebase/app';
// import { firebase } from 'firebase';

// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyDuJvM44MCNE7saO_eKe0DCi-CSxZuHmFU',
//   authDomain: 'business-card-maker-4ca2c.firebaseapp.com',
//   projectId: 'business-card-maker-4ca2c',
//   storageBucket: 'business-card-maker-4ca2c.appspot.com',
//   messagingSenderId: '216500326',
//   appId: '1:216500326:web:cf32933b9eb52a5e3145a7',
//   measurementId: 'G-EXTJK4Z13R'
// };
// const app = initializeApp(firebaseConfig);
// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);
// export default firebase;

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDuJvM44MCNE7saO_eKe0DCi-CSxZuHmFU',
  authDomain: 'business-card-maker-4ca2c.firebaseapp.com',
  projectId: 'business-card-maker-4ca2c',
  storageBucket: 'business-card-maker-4ca2c.appspot.com',
  messagingSenderId: '216500326',
  appId: '1:216500326:web:cf32933b9eb52a5e3145a7',
  measurementId: 'G-EXTJK4Z13R'
};

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  login_hint: 'user@example.com'
});
const auth = getAuth();
signInWithPopup(auth, provider)
  .then(result => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  })
  .catch(error => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
export default firebase;
