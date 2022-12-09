import styled from '@emotion/styled';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 32px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export default Label;