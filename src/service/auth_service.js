import firebase from 'firebase';
import firebaseApp from './firebase';
class AuthService {
  login(providerName) {
    // github나 google등
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  logout() {
    return firebaseApp.auth().signOut();
  }
}

export default AuthService;
