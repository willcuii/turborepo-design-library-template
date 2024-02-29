import {ReactNode} from 'react';
import {ButtonProps as MuiButtonProps} from '@mui/material/Button';

export type ButtonSize = 'xsmall' | 'small' | 'medium' | 'large';

export type ButtonVariant = 'primary' | 'outlined' | 'text' | 'gradient';

export type LoadingButtonPostion = 'start' | 'center' | 'end';

export interface ButtonProps extends MuiButtonProps {
  /** The content of the component. */
  children: ReactNode;

  /**
   * A button can show that it cannot be interacted with.
   *
   * @default false
   * */
  disabled?: boolean;

  /** A button can have an icon as the 'children' element */
  icon?: ReactNode;

  /**
   * A button can be sized to fit different layout.
   *
   * @default 'medium'
   * */
  btnSize?: ButtonSize;

  /**
   * The `btnVariant` prop defines the visual styling of a button, allowing it to stand out or blend in according to its intended role within the user interface.
   * Each variant modifies the button's appearance to suit different contexts and actions.
   *
   * @default 'primary'
   */
  btnVariant?: 'primary' | 'outlined' | 'text' | 'gradient';

  /** Override or extend the styles applied to the component. */
  classes?: MuiButtonProps['classes'];

  /** Icon element placed before the children. */
  startIcon?: ReactNode;

  /** Icon element placed after the children. */
  endIcon?: ReactNode;

  /** Function to be trigger when user click button */
  onClick?: MuiButtonProps['onClick'];
}

export interface LoadingButtonProps extends ButtonProps {
  /**
   * The loading indicator to use.
   *
   * @default '<CircularProgress size={24} />'
   */
  loadingIndicator?: ReactNode;

  /**
   * If true, the loading indicator is shown and the button becomes disabled.
   *
   * @default true
   * */
  loading?: boolean;

  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   *
   * @default 'center'
   */
  loadingPosition?: LoadingButtonPostion;
}
