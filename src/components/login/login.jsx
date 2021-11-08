import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import LoginPhoneNumber from './login_phone_number/login_phone_number';
import styles from './login.module.css';

const Login = ({ authService }) => {
  const history = useHistory();

  const [loginPhoneNumber, setLoginPhoneNumber] = useState(false);
  const onLogin = event => {
    const loginMethod = event.currentTarget.textContent;
    if (loginMethod === 'Phone number') {
      setLoginPhoneNumber(true);
    } else {
      authService.login(loginMethod).then(data => goToMaker(data.user.uid));
    }
  };

  const goToMaker = userId => {
    history.push({
      pathname: '/maker',
      state: { id: userId }
    });
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      user && goToMaker(user.uid); //user가 있다면(로그인을 하면) uid를 갖고 maker로 감 (로그인정보 기억)
    });
  });

  return (
    <section className={styles.login}>
      <Header />
      {loginPhoneNumber && <LoginPhoneNumber />}
      {!loginPhoneNumber && (
        <section>
          <h1>Login</h1>
          <ul className={styles.list}>
            <li className={styles.item}>
              <button className={styles.button} onClick={onLogin}>
                Google<i className={`fab fa-google ${styles.icon}`}></i>
              </button>
            </li>
            <li className={styles.item}>
              <button className={styles.button} onClick={onLogin}>
                Github<i className={`fab fa-github ${styles.icon}`}></i>
              </button>
            </li>
            <li className={styles.item}>
              <button className={styles.button} onClick={onLogin}>
                Phone number
                <i className={`fas fa-phone-alt ${styles.icon}`}></i>
              </button>
            </li>
          </ul>
        </section>
      )}
      <Footer />
    </section>
  );
};

export default Login;
