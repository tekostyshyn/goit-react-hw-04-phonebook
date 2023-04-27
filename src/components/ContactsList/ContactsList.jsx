import Contact from 'components/Contact';
import PropTypes from 'prop-types';

import './ContactsList.scss';

const ContactsList = ({ contactsList, onDelete }) => {
  return (
    <>
      <ul className="contacts-list">
        {contactsList.map(({ id, name, number }) => (
          <Contact key={id} id={id} name={name} number={number}>
            <button
              className="contacts-list__button"
              type="button"
              onClick={() => {
                onDelete(id);
              }}
            >
              Delete
            </button>
          </Contact>
        ))}
      </ul>
    </>
  );
};

ContactsList.propTypes = {
  contactsList: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  })),
  onDelete: PropTypes.func,
};

export default ContactsList;
