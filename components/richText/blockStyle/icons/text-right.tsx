import React from 'react';
import SvgIcon,{SvgIconProps} from '@material-ui/core/SvgIcon';

export default (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox={'0 0 1024 1024'}>
      <path d="M64 320h896v128H64zM576 576h384v128H576zM64 832h896v128H64zM576 64h384v128H576z"/>
    </SvgIcon>
  )
}