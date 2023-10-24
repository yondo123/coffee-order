import styled from '@emotion/styled';

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
