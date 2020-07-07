import React from 'react';
import Button from "../button";
import inlineTypes from './types';
import {RichUtils} from "draft-js";
// import Icon from "../../../../icon";

export default ({editorState, onChange}: any) => {

  const handleChangeInlineStyle = (inlineStyle: any) => {
    onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  const currentInlineType = editorState.getCurrentInlineStyle();

  return (
    <>
      {
        inlineTypes.map((inlineType) => {
          const {title, style, type, icon} = inlineType;
          const Icon = icon;
          return (
            <Button onChange={() => handleChangeInlineStyle(type)}
                    title={title}
                    style={style}
                    active={currentInlineType.has(type)}
                    key={type}>
              {
                <Icon fontSize={"small"}/>
              }
            </Button>
          );
        })
      }
    </>
  )
}