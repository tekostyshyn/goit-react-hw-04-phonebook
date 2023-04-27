import { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';
import './App.scss';


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts)
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  addContact = (name, number) => {
    const { contacts } = this.state;

    const checkedContacts = contacts.find(contact => contact.name === name);
    if (checkedContacts) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  deleteContact = id => {
    this.setState(({ contacts }) => {
      const updatedContacts = contacts.filter(contact => contact.id !== id);
      return { contacts: updatedContacts };
    });
  };

  changeFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact}></Form>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter}></Filter>
        <ContactsList
          contactsList={visibleContacts}
          onDelete={this.deleteContact}
        ></ContactsList>
      </div>
    );
  }
}
