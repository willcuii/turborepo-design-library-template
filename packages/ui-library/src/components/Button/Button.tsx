import StyledButton from './Button.style';
import {ButtonProps} from './Button.type';

const Button = ({children, onClick, id}: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} id={id}>
      {children}
    </StyledButton>
  );
};

Button.displayName = 'Button';
export default Button;
