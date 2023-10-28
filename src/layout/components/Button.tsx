import { ButtonStyle } from '../styles/buttonStyle';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, onClick, disabled = false, type = 'button', ...restProps }: ButtonProps) => {
  return (
    <ButtonStyle type={type} onClick={onClick} disabled={disabled} {...restProps}>
      {children}
    </ButtonStyle>
  );
};
