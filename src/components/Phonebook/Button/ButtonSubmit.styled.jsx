import styled from '@emotion/styled';

const Button = styled.button`
  display: block;
  padding: 10px 15px;
  width: 30%;
  font-size: 16px;
  background-color: transparent;
  color: black;
  border: 1px solid black;
  border-radius: 5%;
  cursor: pointer;
  transition: color 250ms linear, background-color 250ms linear;
  &:hover {
    color: black;
    background-color: #4949f0;
  }
`;

export default Button;