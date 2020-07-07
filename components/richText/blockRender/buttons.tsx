/**
 * Create by fay on 2018-10-17 17:32
 */
import React from 'react';
import Button from "../button";
import PopoverButton from "../popover-button";
import blockTypes from "./types";
import {AtomicBlockUtils, EditorState} from "draft-js";

export default ({editorState, onChange}: any) => {

  const handleChangeBlockStyle = (urlType: string, url?: string, style?: object) => {
    // e.preventDefault();
    // const {editorState, urlValue, urlType} = this.state;
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(urlType, 'IMMUTABLE', {src: url, style});
    // sessionStorage.setItem("FAY_RTX_IMGS", JSON.stringify(["https://www.keypool.com/pc/static/home/why/1.png"]));
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    console.log(entityKey);
    const newEditorState = EditorState.set(
      editorState,
      {currentContent: contentStateWithEntity}
    );
    onChange(AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' ')); //此处第三个参数是空格字符串不是空字符串
  };

  // let selection = editorState.getSelection();
  // let blockStyle = editorState
  //     .getCurrentContent()
  //     .getBlockForKey(selection.getStartKey())
  //     .getType();

  return (
    <>
      {
        blockTypes.map((blockType: any) => {
          const {title, style, type, children, component} = blockType;
          const Component = component;
          if(children){
            return (
              <PopoverButton
                  title={title}
                  style={style}
                  // active={blockStyle.indexOf(type)>-1}
                  key={type}
                  // label={blockStyle.indexOf(type)>-1?label+' '+blockStyle.split(type)[1].split('-')[0]:label}
                >
                  {
                    children.map((child: any) => {
                      const {style, type, label} = child;
                      return (
                        <Button
                          onChange={() => handleChangeBlockStyle(type)}
                          style={style}
                          // active={blockStyle === type}
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
            <Component
              key={type}
              onChange={
                (url: string, style?: object) => handleChangeBlockStyle('image', url, style)
              }/>
          )
        })
      }
    </>
  )
}
