import {ButtonProps as MuiButtonProps} from '@mui/material/Button';

export type ButtonSize = 'xsmall' | 'small' | 'medium' | 'large' | string;

export type ButtonVariant =
  | 'primary'
  | 'outlined'
  | 'text'
  | 'gradient'
  | string;

export interface ButtonProps extends MuiButtonProps {
  btnSize?: ButtonSize;
  btnVariant?: ButtonVariant;
}
