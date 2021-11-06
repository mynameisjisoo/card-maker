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
    //reCAPTCHA 자동등록방지 객체
    window.recaptchaVerifier = new RecaptchaVerifier(
      'sign-in-button',
      {
        size: 'invisible',
        callback: response => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
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
    event.preventDefault();
    const phoneNumber = refNumber.current.value.replace(/ /g, '');
    signInWithPhoneNumber(auth, `+${phoneNumber}`, appVerifier) //
      .then(confirmationResult => {
        window.confirmationResult = confirmationResult;
        alert('인증요청');
      })
      .catch(error => alertErrorMessage(error));
  };

  const onSubmitCode = event => {
    event.preventDefault();
    const authCode = refCode.current.value.replace(/ /g, '');
    window.confirmationResult
      .confirm(authCode)
      .then(alert('인증완료'))
      .catch(error => alertErrorMessage(error));
  };

  const alertErrorMessage = error => {
    switch (error.code) {
      case 'auth/invalid-verification-code':
        alert('인증번호가 유효하지 않습니다.');
        break;
      case 'auth/invalid-phone-number':
        alert('전화번호가 유효하지 않습니다.');
        break;
      case 'auth/session-expired':
        alert('인증번호가 만료되었습니다.');
        break;
      case 'auth/too-many-requests':
        alert('잠시 후 다시 시도해 주세요.');
        break;

      default:
        console.log(error);
        break;
    }
  };
  return (
    <div className={styles.auth}>
      <h1 className={styles.notification}>Please verify your phone number</h1>

      <div className={styles.container}>
        <input
          className={styles.phoneNumber}
          ref={refNumber}
          type='text'
          name='phone number'
          placeholder='+82 10 0000 0000'
        />
        <button
          id={'sign-in-button'}
          className={styles.button}
          onClick={onSubmitPhoneNumber}
        >
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
