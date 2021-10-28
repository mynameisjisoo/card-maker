import firebase from 'firebase';
class AuthService {
  login(providerName) {
    // github나 google등
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebase.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;
