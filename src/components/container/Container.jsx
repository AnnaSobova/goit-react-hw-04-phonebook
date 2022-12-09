import React from 'react';
import PropTypes from 'prop-types';
import MainContainer from './Container.styled'


const Container =({title, children})=>(
    <MainContainer>
        <h1>{title}</h1>
        {children}
    </MainContainer>
)
export default Container;

Container.propTypes={
    title:PropTypes.string.isRequired,
};

