import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/firebase-auth';
import 'firebase/auth';
import 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL
};

//Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDatabase = firebaseApp.database();
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
