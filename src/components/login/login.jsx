import React, { useState } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
  const [isLogin, setIsLogin] = useState(false);

  const onLogin = event => {
    authService
      .login(event.currentTarget.textContent) //
      .then(setIsLogin(true))
      .then(routeChange);
  };

  const routeChange = () => {};

  let onLogout = false;
  if (isLogin === true) {
    onLogout = () => {
      authService
        .logout() //
        .then(setIsLogin(false))
        .then((onLogout = false));
    };
  }

  return (
    <section className={styles.login}>
      <Header onLogout={onLogout} />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Email
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
