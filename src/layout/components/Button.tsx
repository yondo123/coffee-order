import { ButtonStyle } from '../styles/buttonStyle';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

export const Button = ({ children, onClick, disabled = false }: ButtonProps) => {
  return (
    <ButtonStyle onClick={onClick} disabled={disabled}>
      {children}
    </ButtonStyle>
  );
};
