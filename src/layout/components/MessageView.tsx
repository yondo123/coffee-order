import { ErrorMessageContainer } from '@layout/styles/ContainerStyle';

interface MessageViewProps {
  message: string;
  children?: React.ReactNode;
}

export const MessageView = ({ message, children }: MessageViewProps) => {
  return (
    <ErrorMessageContainer>
      <h2>{message}</h2>
      {children ?? null}
    </ErrorMessageContainer>
  );
};
