import styled from '@emotion/styled';

export const MenuList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  align-items: center;
  justify-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const MenuCardWrapper = styled.li`
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
`;

export const MenuDetail = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    color: #7f8fa6;
    font-weight: bold;
  }
`;
