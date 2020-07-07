/**
 * Create by fay on 2018-10-18 09:41
 */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Buttons from './buttons';
import types from '../color/types';
import ColorsIcon from "./icons/colors";
import BgColorIcon from "./icons/bg-color";
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
    type = 'backgroundColor-'+type;
    if(activeType.length === 0 && currentInlineType.has(type)){
      activeType = type;
    }
  });

  const open = Boolean(anchorEl);

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        <Button
          title={anchorEl ? undefined : '背景颜色'}
          onMouseDown={(e: any)=>e.preventDefault()}
          onClick={handleClick}
          style={{position: "relative"}}
        >
          <BgColorIcon fontSize={"small"} style={activeType?{color: customStyleMap[activeType].backgroundColor}:{}}/><ColorsIcon fontSize={"small"}/>
          <Paper elevation={2} className={clsx(classes.paper, {[classes.hide]: !open})}>
            <Buttons hidePopover={handleClose} editorState={editorState} onChange={onChange}/>
          </Paper>
        </Button>
        {/* <Popover
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={handleClose}
        >
          <Buttons hidePopover={handleClose} editorState={editorState} onChange={onChange}/> */}
        {/* <Tooltip title='颜色' placement='bottom'>
          <button className={classnames('fay-draft-btn', className)}
                onMouseDown={e=>e.preventDefault()}><Icon type='rt-color1' style={activeType?{color: customStyleMap[activeType].color}:{}}/><Icon type='rt-color'/></button>
        </Tooltip> */}
        {/* </Popover> */}
      </div>
    </ClickAwayListener>
  )
}
