import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input.styled'

const InputNumber = ({onChange,value})=>(
    <Input
    type="tel"
    name="number"
    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    required
    placeholder='227-91-26'
    onChange={onChange}
    value={value}
  />
);
export default InputNumber;

InputNumber.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  };