/**
 * Create by fay on 2018-10-18 09:41
 */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Buttons from './buttons';
import types from './types';
import ColorsIcon from "./icons/colors";
import ColorIcon from "./icons/color";
import customStyleMap from './customStyleMap';
import Button from '../../button';
import clsx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      zIndex: 2,
      height: 200,
      width: 200,
      overflow: 'auto',
      marginTop: '115px',
      padding: theme.spacing(2, 0),
      overflowX: 'hidden'
    },
    hide: {
      display: 'none'
    },
  }),
);

export default ({editorState, onChange}: any) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const currentInlineType = editorState.getCurrentInlineStyle();
  let activeType = '';
  types.map((item) => {
      let {type} = item;
      type = 'color-'+type;
      if(currentInlineType.has(type)){
          activeType = type;
      }
  });

  const open = Boolean(anchorEl);

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        <Button
          title={anchorEl ? undefined : '颜色'}
          onMouseDown={(e: any)=>e.preventDefault()}
          onClick={handleClick}
          style={{position: "relative"}}
        >
          <ColorIcon fontSize={"small"} style={activeType?{color: customStyleMap[activeType].color}:{}}/><ColorsIcon fontSize={"small"}/>
          <Paper elevation={2} className={clsx(classes.paper, {[classes.hide]: !open})}>
            <Buttons hidePopover={handleClose} editorState={editorState} onChange={onChange}/>
          </Paper>
        </Button>
      </div>
    </ClickAwayListener>
  )
}
