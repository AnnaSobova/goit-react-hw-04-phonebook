import React from 'react';
import Form from './Form.styled';
import PropTypes from 'prop-types';

const FormPhonebook = ({onSubmit,children})=>(
    <Form onSubmit={onSubmit}>{children}</Form>
);
export default FormPhonebook;

FormPhonebook.propTypes={
    onSubmit:PropTypes.func.isRequired,
};