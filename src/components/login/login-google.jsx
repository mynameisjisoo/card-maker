import 'firebase/firestore';
import 'firebase/auth';
import { signInWithGoogle } from './firebase/firebase_config';
import { auth } from './firebase/firebase_config';

function GoogleSignin(props) {
  auth.onAuthStatechanged(user => {
    if (user !== null) {
      console.log('로그인');
    }
  });

  return (
    <div>
      <button onClick={signInWithGoogle}>google</button>
    </div>
  );
}

export default GoogleSignin;
