import styled from '@emotion/styled';

const ButtonDeleteStyle = styled.button`
  margin-left: 10px;
  background-color: transparent;
  color: black;
  border-radius: 5%;
  border: 1px solid black;
  cursor: pointer;
  transition: color 250ms linear, background-color 250ms linear;
  &:hover {
    background-color: #4949f0;
    color: black;
  }
`;

export default ButtonDeleteStyle ;