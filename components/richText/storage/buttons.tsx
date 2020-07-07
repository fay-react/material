import React from 'react';
import Button from "../button";
import {EditorState} from "draft-js";
import ChexiaoIcon from './icons/chexiao';
import ChongzuoIcon from './icons/chongzuo';

export default ({editorState, onChange}: any) => {

  const handleRevoke = () => {
    const nextEditorState = EditorState.undo(editorState);
    onChange(nextEditorState);
  };

  const handleRedo = () => {
    const nextEditorState = EditorState.redo(editorState);
    onChange(nextEditorState);
  };

  return (
    <>
      <Button
        onChange={handleRevoke}
        title='撤销'
        disabled={editorState.getUndoStack().size===0}
      >
        <ChexiaoIcon fontSize={"small"}/>
      </Button>
      <Button
        onChange={handleRedo}
        title='重做'
        disabled={editorState.getRedoStack().size===0}
      >
        <ChongzuoIcon fontSize={"small"}/>
      </Button>
    </>
  )
}