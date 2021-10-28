import React from 'react';

import styles from './login.module.css';

const Login = props => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src='/images/logo.png' alt='logo' className={styles.logo} />
        <h2 className={styles.title}>Business Card Maker</h2>
      </header>
      <section className={styles.login}>
        <h2>Login</h2>
        <button className={styles.loginBtn}>Email Link</button>
        <button className={styles.loginBtn}>Google</button>
        <button className={styles.loginBtn}>Github</button>
      </section>
      <footer className={styles.footer}>Code your dream</footer>
    </div>
  );
};

export default Login;
