import styled from '@emotion/styled';

const BaseContainerStyle = styled.section`
  margin: 0 auto;
  padding: 16px;
  background: 'transparent';
`;

const MessageContainerStyle = styled(BaseContainerStyle)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const MessageContainer = styled(MessageContainerStyle)`
  color: #2d3436;
`;

export const ErrorMessageContainer = styled(MessageContainerStyle)`
  color: #fd6134;
`;

export const PageContainer = styled(BaseContainerStyle)`
  height: 100%;
  padding: 16px;
`;
