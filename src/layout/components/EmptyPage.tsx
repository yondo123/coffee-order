import { EmptyLayoutContainer } from '../styles/layoutStyle';

interface EmptyPageProps {
  message: string;
}

export const EmptyPage = ({ message }: EmptyPageProps) => {
  return (
    <EmptyLayoutContainer>
      <h2>{message}</h2>
    </EmptyLayoutContainer>
  );
};
