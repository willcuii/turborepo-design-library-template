import StyledButton from './Button.style';
import {ButtonProps} from './Button.type';

const Button = ({children, onClick}: ButtonProps) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

Button.displayName = 'Button';
export default Button;
