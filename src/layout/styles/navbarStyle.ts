import styled from '@emotion/styled';

export const Navigator = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 48px;
  padding: 0 20px;
  background-color: #fda7df;
  font-size: 18px;
  color: #fff;
  a {
    cursor: pointer;
  }
  .active {
    color: #1b1464;
    font-weight: bold;
  }
`;
