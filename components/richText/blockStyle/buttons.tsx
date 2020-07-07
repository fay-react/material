/**
 * Create by fay on 2018-10-17 17:32
 */
import React from 'react';
import Button from "../button";
import PopoverButton from "../popover-button";
import blockTypes from "./types";
import {RichUtils} from "draft-js";

export default ({editorState, onChange}: any) => {

  const handleChangeBlockStyle = (blockStyle: any) => {
    onChange(RichUtils.toggleBlockType(editorState, blockStyle));
  };

  let selection = editorState.getSelection();
  let blockStyle = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType();

  return (
    <>
      {
        blockTypes.map((blockType: any) => {
          const {title, style, type, label, children, icon} = blockType;
          const Icon = icon;
          if(children){
            return (
              <PopoverButton
                  title={title}
                  style={style}
                  active={blockStyle.indexOf(type)>-1}
                  key={type}
                  label={blockStyle.indexOf(type)>-1?label+' '+blockStyle.split(type)[1].split('-')[0]:label}
                >
                  {
                    children.map((child: any) => {
                      const {style, type, label} = child;
                      return (
                        <Button
                          onChange={() => handleChangeBlockStyle(type)}
                          style={style}
                          active={blockStyle === type}
                          key={type}
                        >
                            {label}
                        </Button>
                      )
                    })
                  }
                </PopoverButton>
            )
          }
          return (
            <Button
              onChange={() => handleChangeBlockStyle(type)}
              title={title}
              style={style}
              active={blockStyle === type}
              key={type}>
              <Icon/>
            </Button>
          )
        })
      }
    </>
  )
}
