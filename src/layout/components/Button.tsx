import { ButtonStyle } from '../styles/buttonStyle';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({ children, onClick, disabled = false }: ButtonProps) => {
  return (
    <ButtonStyle type="button" onClick={onClick ? onClick : undefined} disabled={disabled}>
      {children}
    </ButtonStyle>
  );
};
