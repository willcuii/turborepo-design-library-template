import { ButtonProps } from "./Button.type";

const Button = ({ children, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
}

Button.displayName = 'Button';
export default Button;