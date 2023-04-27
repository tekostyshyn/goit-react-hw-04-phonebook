import { Component } from 'react';
import { nanoid } from 'nanoid';
import './Form.scss';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();
    this.props.onSubmit(name, number);
    this.resetState();
  };

  resetState = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    const nameInpudId = nanoid();
    const numberInpudId = nanoid();

    return (
      <form action="" onSubmit={this.handleSubmit} className="form">
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
          onChange={this.handleInputChange}
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
          onChange={this.handleInputChange}
        />
        <button className='form__button' type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;
