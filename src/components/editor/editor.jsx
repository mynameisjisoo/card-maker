import React from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ FileInput, cards, addCard, updateCard, deleteCard }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {Object.keys(cards).map(
        //cards가 배열형태가 아니기때문에 Object.keys()이용해서 cards의 키를 받아옴
        key => (
          <CardEditForm
            key={key}
            FileInput={FileInput}
            card={cards[key]}
            updateCard={updateCard}
            deleteCard={deleteCard}
          />
        )
      )}

      <CardAddForm FileInput={FileInput} onAdd={addCard} />
    </section>
  );
};

export default Editor;
