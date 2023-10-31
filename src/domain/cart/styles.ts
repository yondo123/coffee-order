import styled from '@emotion/styled';

export const ItemWrapper = styled.div`
  display: flex;
  padding: 16px;
  background-color: #fff;
  margin-bottom: 16px;
  border: 1px solid #dcdde1;
  border-radius: 4px;
`;

export const ItemDetail = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: 16px;
  color: #2f3542;
`;

export const TotalPriceWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: right;
  align-items: center;
`;

export const OrderButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;
