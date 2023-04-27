import './Contact.scss';
import PropTypes from 'prop-types';

const Contact = ({ name, number, children }) => {
  return (
    <li className="contacts-list__item">
      {name}: {number}
      {children}
    </li>
  );
};

export default Contact;

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
