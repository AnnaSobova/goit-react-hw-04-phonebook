import React from 'react';
import LabelFilterStyle from './LabelFilter.styled';
import PropTypes from 'prop-types';

const LabelFilter = ({ title, children }) => (
  <LabelFilterStyle>
    <p>{title}</p>
    {children}
  </LabelFilterStyle>
);

export default LabelFilter;

LabelFilter.propTypes = {
  title: PropTypes.string.isRequired,
};