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
  width: 100%;
  height: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
`;

export const MenuDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    color: #7f8fa6;
    font-weight: bold;
  }
`;

export const ProductDetailContainer = styled.section`
  display: flex;
  background-color: #fff;
  padding: 16px;
  > div:first-of-type {
    flex-grow: 1;
    height: 100%;
  }
`;

export const ProductOptionContainer = styled.div`
  flex-grow: 1;
  width: 50%;
  padding: 16px;
  border: 1px solid #dcdde1;
  border-radius: 4px;
  margin-right: 16px;
`;

export const ProductOrderWrapper = styled.div`
  display: flex;
  margin-top: 36px;
  padding: 16px;
  border: 1px solid #dcdde1;
  input[type='number'] {
    width: 144px;
    height: 24px;
  }

  input[type='number']:disabled {
    background-color: #dcdde1;
    color: #9e9e9e;
    border: none;
    cursor: not-allowed;
  }

  button {
    margin: 0 auto;
  }
`;

export const ProductQuantityForm = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
`;

export const TotalPrice = styled.div`
  margin-bottom: 12px;
  font-size: 24px;
  text-align: right;
  color: #fc8020;
`;
