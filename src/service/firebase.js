const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: REACT_APP_FIREBASE_DB_URL,
  databaseURL: REACT_APP_FIREBASE_PROJECT_ID
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);
