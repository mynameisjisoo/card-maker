import React from 'react';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ cards }) => {
  const handleAdd = () => {
    console.log('요요요    ');
  };

  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards.map(card => (
        <CardEditForm card={card} />
        // <li key={card.id}>
        // </li>
      ))}
    </section>
  );
};

export default Editor;
