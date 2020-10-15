import React from 'react';
import Button, {ButtonProps as MuiButtonProps} from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core/styles";
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  primaryContainedDisabled: {
    backgroundColor: `${theme.palette.primary.light} !important`
  },
  secondaryContainedDisabled: {
    backgroundColor: `${theme.palette.secondary.light} !important`
  },
  primaryOutlinedDisabled: {
    borderColor: `${theme.palette.primary.light} !important`,
    color: `${theme.palette.primary.light} !important`
  },
  secondaryOutlinedDisabled: {
    borderColor: `${theme.palette.secondary.light} !important`,
    color: `${theme.palette.secondary.light} !important`
  },
  primaryTextDisabled: {
    color: `${theme.palette.primary.light} !important`
  },
  secondaryTextDisabled: {
    color: `${theme.palette.secondary.light} !important`
  }
}));

const FayButton = ({children, disableElevation=true, variant='contained', color='primary', className, ...props}: MuiButtonProps) => {
  const classes = useStyles();
  return (
    <Button
      disableElevation={disableElevation}
      variant={variant}
      color={color}
      className={
        clsx(
          {[classes.primaryContainedDisabled]: props.disabled && variant==='contained' && color==='primary'},
          {[classes.secondaryContainedDisabled]: props.disabled && variant==='contained' && color==='secondary'},
          {[classes.primaryOutlinedDisabled]: props.disabled && variant==='outlined' && color==='primary'},
          {[classes.secondaryOutlinedDisabled]: props.disabled && variant==='outlined' && color==='secondary'},
          {[classes.primaryTextDisabled]: props.disabled && variant==='text' && color==='primary'},
          {[classes.secondaryTextDisabled]: props.disabled && variant==='text' && color==='secondary'},
          className
        )
      }
      {...props}
    >
      {children}
    </Button>
  );
}

export default FayButton;

export type ButtonProps=MuiButtonProps;