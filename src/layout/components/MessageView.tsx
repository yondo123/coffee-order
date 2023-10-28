import { ErrorMessageContainer } from '@layout/styles/ContainerStyle';
import { Heading } from '@layout/components/Heading';

interface MessageViewProps {
  message: string;
  children?: React.ReactNode;
}

export const MessageView = ({ message, children }: MessageViewProps) => {
  return (
    <ErrorMessageContainer>
      <Heading size="xl">{message}</Heading>
      {children ?? null}
    </ErrorMessageContainer>
  );
};
