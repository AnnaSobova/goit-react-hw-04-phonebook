import React from 'react';
import ContactsItem from './Contacts.styled';
import InputFilter from '../Input/InputFilter';
import LabelFilter from '../Label/LabelFilter/LabelFilter';
import ButtonDelete from '../Button/ButtonDelete/ButtonDelete';
import PropTypes from 'prop-types';

const Contacts = ({ name, contactsList, onChange, value, onClickDelete }) => (
  <ContactsItem>
    <p>{name}</p>
    <LabelFilter title="Find contacts by name">
      <InputFilter onChange={onChange} value={value} />
    </LabelFilter>
    <ul>
      {contactsList.map(contact => (
        <li key={contact.id}>
          <span>
            {contact.name} {contact.number}
          </span>
          <ButtonDelete
            name="Delete"
            onClickDelete={() => onClickDelete(contact.id)}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
  </ContactsItem>
);

export default Contacts;

Contacts.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  contactsList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};