import React from 'react';
import styles from './card.module.css';

const DEFAULT_IMAGE = '/images/logo.png';
const Card = ({ card }) => {
  const { name, company, title, email, message, theme, fileName, fileURL } =
    card;
  const url = fileURL || DEFAULT_IMAGE;
  return (
    <li key={card.id} className={styles.card}>
      <img className={styles.avatar} src={url} alt='profile photo' />
      <div className={styles.profile}>
        <h1 className={styles.name}>name</h1>
        <p>company</p>
        <div className={styles.divider}></div>
        <div className={styles.content}>
          <p>title</p>
          <p>email</p>
          <p>message</p>
        </div>
      </div>
    </li>
  );
};

export default Card;
