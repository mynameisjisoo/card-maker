import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from 'firebase/auth';
import LoginPhoneNumber from '../components/login_phone_number/login_phone_number';
import { firebaseApp } from './firebase';

class AuthService {
  constructor() {
    this.firebaseAuth = getAuth();
    this.firebaseAuth.useDeviceLanguage();
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
    // this.recaptchaVerifier = new RecaptchaVerifier(
    //   'sign-in-button',
    //   {
    //     size: 'invisibe',
    //     callback: response => {
    //       //  reCAPTCHA solved, allow signInWithPhoneNumber.
    //       console.log(response);
    //     }
    //   },
    //   this.firebaseAuth
    // );
  }

  login(providerName) {
    // github나 google등
    const authProvider = this.getProvider(providerName);
    // const phoneNumber = document.querySelector('sign-in-button');
    // const appVerifier = this.recaptchaVerifier;

    if ('Phone number') {
      // signInWithPhoneNumber(this.firebaseAuth, phoneNumber, appVerifier).catch(
      // error => console.log(error)
      // );
      // .then(confirmationResult =>
      //   console.log(`${confirmationResult}susccess`)
      // )
      // .catch(error => console.log(error));
    } else {
    }
    return signInWithPopup(this.firebaseAuth, authProvider);
  }

  logout() {
    this.firebaseAuth.signOut();
  }

  onAuthChange(onUserChanged) {
    this.firebaseAuth.onAuthStateChanged(user => {
      onUserChanged(user);
    });
  }

  getProvider(providerName) {
    switch (providerName) {
      case 'Google':
        return this.googleProvider;
      case 'Github':
        return this.githubProvider;
      case 'Phone number':
        return 'Phone number';
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }
}
export default AuthService;
