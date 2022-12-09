import React from 'react';
import ButtonDeleteStyle from './ButtonDelete.styled';
import PropTypes from 'prop-types';

const ButtonDelete =({name,onClickDelete,id})=>(
    <ButtonDeleteStyle type="button" onClick={onClickDelete} id={id}>
        {name}
    </ButtonDeleteStyle>
);

ButtonDelete.propTypes = {
    name: PropTypes.string.isRequired,
    onClickDelete: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
  };
  export default ButtonDelete