import { firebaseAuth, githubProvider, googleProvider } from './firebase';
import { getAuth, signInWithPopup } from 'firebase/auth';

class AuthService {
  login(providerName) {
    // github나 google등
    const authProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(firebaseAuth, authProvider);
  }

  logout() {
    return firebaseAuth.signOut().then(alert('logout'));
  }

  onAuthChange(onUserChanged) {
    firebaseAuth.onAuthStateChanged(user => {
      onUserChanged(user);
    });
  }

  getProvider(providerName) {
    switch (providerName) {
      case 'Google':
        return googleProvider;
      case 'Github':
        return githubProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }
}
export default AuthService;
