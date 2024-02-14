import StyledButton from './Button.style';
import {ButtonProps} from './Button.type';

const Button = ({
  children,
  classes,
  color = 'primary',
  disabled = false,
  endIcon,
  fullWidth,
  href,
  btnSize = 'medium',
  startIcon,
  btnVariant = 'primary',
  onClick,
  id,
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      id={id}
      classes={classes}
      color={color}
      disabled={disabled}
      endIcon={endIcon}
      fullWidth={fullWidth}
      href={href}
      startIcon={startIcon}
      btnSize={btnSize}
      btnVariant={btnVariant}
    >
      <div className="gradient-bg"></div>
      {children}
    </StyledButton>
  );
};

Button.displayName = 'Button';
export default Button;
