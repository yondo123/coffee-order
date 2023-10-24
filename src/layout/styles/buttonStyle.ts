import styled from '@emotion/styled';

export const ButtonStyle = styled.button`
  width: 288px;
  height: 40px;
  border: none;
  border-radius: 32px;
  background-color: #fd6134;
  color: #ffffff;
  cursor: pointer;
  :disabled {
    background-color: #e0e0e0;
    color: #9e9e9e;
    cursor: not-allowed;
  }
`;
