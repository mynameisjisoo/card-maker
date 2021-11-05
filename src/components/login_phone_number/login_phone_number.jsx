import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from '@firebase/auth';
import React, { useEffect, useRef } from 'react';
import { firebaseApp } from '../../service/firebase';

const LoginPhoneNumber = () => {
  const auth = getAuth();
  auth.useDeviceLanguage();
  useEffect(() => {
    console.log('useeffect');
    window.recaptchaVerifier = new RecaptchaVerifier(
      'recaptcha-container',
      {
        size: 'invisible',
        callback: response => {
          console.log(response);
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          //   onSignInSubmit();
        }
      },
      auth
    );
  });

  const appVerifier = window.recaptchaVerifier;
  console.log(appVerifier);
  const refNumber = useRef();
  auth.languageCode = 'ko';

  const onSubmitPhoneNumber = event => {
    event.preventDefault();
    const phoneNumber = refNumber.current.value.replace(/ /g, '');
    signInWithPhoneNumber(auth, `+${phoneNumber}`, appVerifier) //
      .then(confirmationResult => {
        console.log(confirmationResult);

        alert('인증요청');
        window.confirmationResult = confirmationResult;
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      <form>
        <input
          ref={refNumber}
          type='text'
          name='phone number'
          placeholder='phone number'
        />
        <button onClick={onSubmitPhoneNumber}>인증번호 요청</button>
      </form>
      <form>
        <input type='text' name='phone number' placeholder='verify number' />
        <button>인증 확인</button>
      </form>
      <div id='recaptcha-container'>??</div>
    </>
  );
};

export default LoginPhoneNumber;
