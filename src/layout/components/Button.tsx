import { ButtonStyle } from '../styles/buttonStyle';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return <ButtonStyle onClick={onClick}>{children}</ButtonStyle>;
};
