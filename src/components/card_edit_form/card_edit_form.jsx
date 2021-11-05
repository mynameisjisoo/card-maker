import React, { memo } from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';

const CardEditForm = memo(
  ({ FileInput, card, updateCard, deleteCard, selectImage }) => {
    const { name, company, title, email, message, theme, fileName } = card;

    const onChange = event => {
      if (event.currentTarget == null) {
        return;
      }
      event.preventDefault();
      updateCard({
        ...card,
        [event.currentTarget.name]: event.currentTarget.value
      });
    };

    const onSubmit = event => {
      // event.preventDefault();
      deleteCard(card);
    };

    const onFileChange = file => {
      updateCard({
        ...card,
        fileName: file.name,
        fileURL: file.url
      });
    };
    return (
      <form className={styles.form}>
        <input
          className={styles.input}
          type='text'
          name='name'
          value={name}
          onChange={onChange}
        />
        <input
          className={styles.input}
          type='text'
          name='company'
          value={company}
          onChange={onChange}
        />
        <select
          className={styles.select}
          name='theme'
          value={theme}
          onChange={onChange}
        >
          <option value='light'>Light</option>
          <option value='colorful'>Colorful</option>
          <option value='dark'>Dark</option>
        </select>
        <input
          className={styles.input}
          type='text'
          name='title'
          value={title}
          onChange={onChange}
        />
        <input
          className={styles.input}
          type='text'
          name='email'
          value={email}
          onChange={onChange}
        />
        <textarea
          className={styles.textarea}
          name='message'
          value={message}
          onChange={onChange}
        ></textarea>
        <div className={styles.fileInput}>
          <FileInput name={fileName} onFileChange={onFileChange} />
        </div>
        <Button name='Delete' onClick={onSubmit} />
      </form>
    );
  }
);

export default CardEditForm;
