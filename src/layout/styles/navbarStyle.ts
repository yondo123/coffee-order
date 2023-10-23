import styled from '@emotion/styled';

export const Navigator = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 48px;
  padding: 0 20px;
  background-color: #6fd251;
  font-size: 18px;
  color: #fff;
  a {
    cursor: pointer;
  }
  .active {
    color: #fc8020;
    font-weight: bold;
  }
`;
