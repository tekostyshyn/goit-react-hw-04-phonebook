import { useState } from 'react';
import { nanoid } from 'nanoid';
import './Form.scss';

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    setName('');
    setNumber('');
  };

  const nameInpudId = nanoid();
  const numberInpudId = nanoid();

  return (
    <form action="" onSubmit={handleSubmit} className="form">
      <label htmlFor={nameInpudId} className="form__label">
        Name
      </label>
      <input
        className="form__input"
        type="text"
        name="name"
        id={nameInpudId}
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={e => setName(e.target.value)}
      />
      <label htmlFor={numberInpudId} className="form__label">
        Number
      </label>
      <input
        className="form__input"
        type="tel"
        name="number"
        id={numberInpudId}
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={e => setNumber(e.target.value)}
      />
      <button className="form__button" type="submit">
        Add contact
      </button>
    </form>
  );
};

export default Form;
