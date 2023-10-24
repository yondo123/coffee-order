import type { FallbackProps } from 'react-error-boundary';
import { ErrorPageContainer } from '../styles/pageContainerStyle';

export const ErrorPage = ({ error }: FallbackProps) => {
  return (
    <ErrorPageContainer>
      <h1>{error}</h1>
    </ErrorPageContainer>
  );
};
