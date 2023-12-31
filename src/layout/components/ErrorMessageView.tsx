import { ErrorMessageContainer } from '@layout/styles/ContainerStyle';
import { Heading } from './Heading';
import type { FallbackProps } from 'react-error-boundary';

interface ErrorMessageViewProps extends FallbackProps {
  children?: React.ReactNode;
}

export const ErrorMessageView = ({ error, children }: ErrorMessageViewProps) => {
  return (
    <ErrorMessageContainer>
      <Heading size="xl">{error ?? '알 수 없는 오류가 발생하였습니다.'}</Heading>
      {children ?? null}
    </ErrorMessageContainer>
  );
};
