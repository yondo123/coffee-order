import { MessageContainer } from '@layout/styles/ContainerStyle';
import { Heading } from '@layout/components/Heading';

interface MessageViewProps {
  message: string;
  children?: React.ReactNode;
}

export const MessageView = ({ message, children }: MessageViewProps) => {
  return (
    <MessageContainer>
      <Heading size="xl">{message}</Heading>
      {children ?? null}
    </MessageContainer>
  );
};
