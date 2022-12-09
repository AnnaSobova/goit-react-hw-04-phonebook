import React from 'react';
import Label from './Label.styled';
import PropTypes from 'prop-types';

const LabelPhoneBook = ({ title, children }) => (
  <Label>
    <span>{title}</span>
    {children}
  </Label>
);

export default LabelPhoneBook;

LabelPhoneBook.propTypes = {
  title: PropTypes.string.isRequired,
};