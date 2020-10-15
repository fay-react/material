import React from 'react';
import IconButton, {IconButtonProps as MuiIconButton} from '@material-ui/core/IconButton';

const FayIconButton = ({children, color='primary', ...props}: MuiIconButton) => {
  return (
    <IconButton
      color={color}
      {...props}
    >
      {children}
    </IconButton>
  );
}

export default FayIconButton;
export type IconButton = MuiIconButton;