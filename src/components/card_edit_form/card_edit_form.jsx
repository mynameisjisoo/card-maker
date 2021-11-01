import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ card, updateCard, deleteCard }) => {
  const { name, company, title, email, message, theme, fileName, fileURL } =
    card;

  const handleChange = event => {
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
    deleteCard(card);
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type='text'
        name='name'
        value={name}
        onChange={handleChange}
      />
      <input
        className={styles.input}
        type='text'
        name='company'
        value={company}
        onChange={handleChange}
      />
      <select
        className={styles.select}
        name='theme'
        value={theme}
        onChange={handleChange}
      >
        <option value=''>theme</option>
        <option value='light'>Light</option>
        <option value='colorful'>Colorful</option>
        <option value='dark'>Dark</option>
      </select>
      <input
        className={styles.input}
        type='text'
        name='title'
        value={title}
        onChange={handleChange}
      />
      <input
        className={styles.input}
        type='text'
        name='email'
        value={email}
        onChange={handleChange}
      />
      <textarea
        className={styles.textarea}
        name='message'
        value={message}
        onChange={handleChange}
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name='Delete' onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
