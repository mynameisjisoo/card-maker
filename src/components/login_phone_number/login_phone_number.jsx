import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from '@firebase/auth';
import React, { useEffect, useRef } from 'react';
import styles from './login_phone_number.module.css';

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

  const refNumber = useRef();
  const refCode = useRef();
  auth.languageCode = 'ko';

  const onSubmitPhoneNumber = event => {
    const appVerifier = window.recaptchaVerifier;
    console.log(appVerifier);
    event.preventDefault();
    const phoneNumber = refNumber.current.value.replace(/ /g, '');
    signInWithPhoneNumber(auth, `+${phoneNumber}`, appVerifier) //
      .then(confirmationResult => {
        console.log(confirmationResult);

        // alert('인증요청');
        window.confirmationResult = confirmationResult;
      })
      .catch(error => console.log(error));
  };

  const onSubmitCode = event => {
    event.preventDefault();
    console.log(refCode);
    const authCode = refCode.current.value.replace(/ /g, '');
    window.confirmationResult
      .confirm(authCode)
      .then(result => {
        console.log(result);
        alert('인증완료');
      })
      .catch(error => console.log(error));
  };

  return (
    <div className={styles.auth}>
      <div id='recaptcha-container'>
        <h1 className={styles.notification}>Please verify your phone number</h1>
      </div>

      <div className={styles.container}>
        <input
          className={styles.phoneNumber}
          ref={refNumber}
          type='text'
          name='phone number'
          placeholder='+82 10 0000 0000'
        />
        <button className={styles.button} onClick={onSubmitPhoneNumber}>
          인증번호 요청
        </button>
      </div>
      <div className={styles.container}>
        <input
          className={styles.verifyNumber}
          ref={refCode}
          type='text'
          name='verify number'
          placeholder='verify number'
        />
        <button className={styles.button} onClick={onSubmitCode}>
          인증번호 확인
        </button>
      </div>
    </div>
  );
};

export default LoginPhoneNumber;
