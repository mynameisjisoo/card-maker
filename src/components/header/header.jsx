import React, { memo } from 'react';
import styles from './header.module.css';

//onLogout을 useCallback으로 작성해야 memo의 효과가 있음
const Header = memo(({ onLogout, userName }) => {
  return (
    <header className={styles.header}>
      {onLogout && (
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      )}
      <img src='/images/logo.png' alt='logo' className={styles.logo} />
      <h1 className={styles.title}>Business Card Maker</h1>
      {userName && <p className={styles.userName}>Welcome {userName}😀</p>}
    </header>
  );
});

export default Header;
