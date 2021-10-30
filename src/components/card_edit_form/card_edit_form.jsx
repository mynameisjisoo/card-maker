import React from 'react';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ card, handleAdd }) => {
  const onAdd = () => {
    handleAdd();
  };
  return (
    <table>
      <tbody>
        <tr>
          <td>{card.name}</td>
          <td>{card.company}</td>
          <td>
            <select name='theme' id=''>
              <option value=''>theme</option>
              <option value='light'>light</option>
              <option value='colorful'>colorful</option>
              <option value='dark'>dark</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>{card.title}</td>
          <td>{card.email}</td>
        </tr>
        <tr>
          <td colSpan='3'>{card.message}</td>
        </tr>
        <tr>
          <td>
            <button>file추가하는 동작</button>
          </td>
          <td>
            <button onClick={onAdd}>Add</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CardEditForm;
