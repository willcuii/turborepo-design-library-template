import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';
import {ButtonProps} from './Button.type';
import {backgroundColors} from '../../tokens/colors/colorsOnWhite';
import {gradientColors} from '../../tokens/colors/colorPalette';

const StyledButton: React.ComponentType<ButtonProps> = styled(
  Button,
)<ButtonProps>(({theme, btnVariant, btnSize, disabled}) => ({
  // Common Style
  borderRadius: '50px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  fontWeight: 600,
  lineHeight: 1,
  fontFamily: 'sofia-pro, sans-serif',
  '&:hover, &:active, &:focus': {
    boxShadow: 'none',
  },
  // Primay Style
  ...(btnVariant === 'primary' && {
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.grey[300],
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      borderColor: theme.palette.primary.light,
    },
    '&:active': {
      backgroundColor: theme.palette.primary.dark,
      borderColor: theme.palette.primary.dark,
    },
    '&:disabled': {
      backgroundColor: backgroundColors.bgButtonDisabled,
      borderColor: backgroundColors.bgButtonDisabled,
      color: theme.palette.text.disabled,
      cursor: 'not-allowed',
      pointerEvents: 'auto',
    },
  }),
  // Outlined Style
  ...(btnVariant === 'outlined' && {
    border: '1px solid',
    backgroundColor: theme.palette.common.white,
    borderColor: theme.palette.grey[300],
    color: theme.palette.text.primary,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
      borderColor: theme.palette.secondary.light,
      color: theme.palette.primary.dark,
    },
    '&:active': {
      // TODO overlay?
      backgroundColor: theme.palette.secondary.light,
      borderColor: theme.palette.secondary.light,
      color: theme.palette.primary.dark,
    },
    '&:disabled': {
      backgroundColor: theme.palette.common.white,
      borderColor: theme.palette.grey[100],
      color: theme.palette.text.disabled,
      cursor: 'not-allowed',
      pointerEvents: 'auto',
    },
  }),
  // Text Style
  ...(btnVariant === 'text' && {
    backgroundColor: theme.palette.common.white,
    borderColor: theme.palette.common.white,
    color: theme.palette.text.primary,
    '&:hover': {
      backgroundColor: theme.palette.grey[50],
      borderColor: theme.palette.grey[50],
    },
    '&:active': {
      backgroundColor: theme.palette.action.active,
      borderColor: theme.palette.action.active,
    },
    '&:disabled': {
      backgroundColor: theme.palette.common.white,
      borderColor: theme.palette.common.white,
      color: theme.palette.text.disabled,
      cursor: 'not-allowed',
      pointerEvents: 'auto',
    },
  }),
  // Gradient Style
  ...(btnVariant === 'gradient' && {
    position: 'relative',
    border: 'none',
    color: theme.palette.text.primary,
    background: theme.palette.common.white,
    ...(!disabled && {
      '&::before': {
        content: "''",
        position: 'absolute',
        inset: '0',
        borderRadius: '50px',
        padding: '2px' /* control the border thickness */,
        background: gradientColors.Summer2,
        '-webkit-mask':
          'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        '-webkit-mask-composite': 'xor',
        'mask-composite': 'exclude',
        'pointer-events': 'none',
      },
      '&:hover': {
        background: theme.palette.common.white,
        '.gradient-bg::before': {
          content: "''",
          zIndex: -1,
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          borderRadius: '50px',
          background: gradientColors.Summer2,
          transform: 'translate3d(0px, 0px, 0) scale(0.97)',
          filter: 'blur(10px)',
          opacity: 0.7,
          transition: 'opacity 0.3s',
        },
        '.gradient-bg::after': {
          content: "''",
          zIndex: -1,
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background: 'inherit',
          borderRadius: 'inherit',
        },
      },
      '&:active': {
        color: theme.palette.common.white,
        background: gradientColors.Summer2,
      },
    }),
    '&:disabled': {
      backgroundColor: backgroundColors.bgButtonDisabled,
      borderColor: backgroundColors.bgButtonDisabled,
      color: theme.palette.text.disabled,
      cursor: 'not-allowed',
      pointerEvents: 'auto',
    },
  }),
  // Size Style
  ...(btnSize === 'xsmall' && {
    height: 32,
    padding: '6px 12px',
    fontSize: 14,
  }),
  ...(btnSize === 'small' && {
    height: 40,
    padding: '6px 16px',
    fontSize: 14,
  }),
  ...(btnSize === 'medium' && {
    height: 48,
    padding: '8px 24px',
    fontSize: 16,
  }),
  ...(btnSize === 'large' && {
    height: 56,
    padding: '12px 36px',
    fontSize: 16,
  }),
}));

export default StyledButton;
