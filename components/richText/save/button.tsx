/**
 * Create by fay on 2018-10-18 14:53
 */
import React from 'react';
import Button from '../button';
import {convertToRaw} from 'draft-js';
import SaveIcon from '@material-ui/icons/Save';

export default ({onSave, editorState}: any) => {

  const handleSave = () => {
    const raw = convertToRaw(editorState.getCurrentContent());
    onSave(JSON.stringify(raw));
  };

  return (
    <Button
      onChange={handleSave}
      title='保存'
      style={{fontFamily: 'cursive', paddingLeft: '15px', paddingRight: '15px'}}>
        <SaveIcon fontSize={"small"}/>
    </Button>
  )
}