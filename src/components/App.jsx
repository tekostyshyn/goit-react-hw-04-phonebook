import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';
import './App.scss';

const getDataFromStorage = () => {
  const storedContacts = localStorage.getItem('contacts');
  const parsedContacts = JSON.parse(storedContacts);
  if (!parsedContacts) {
    return [];
  }
  return [...parsedContacts];
};

export const App = () => {
  const [contacts, setContacts] = useState(getDataFromStorage());
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
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

    setContacts([...contacts, contact]);
  };

  const deleteContact = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <Form onSubmit={addContact}></Form>
      <h2>Contacts</h2>
      <Filter
        value={filter}
        onChange={e => {
          setFilter(e.target.value);
        }}
      ></Filter>
      <ContactsList
        contactsList={visibleContacts}
        onDelete={deleteContact}
      ></ContactsList>
    </div>
  );
};
