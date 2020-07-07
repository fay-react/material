import React from 'react';
import SvgIcon,{SvgIconProps} from '@material-ui/core/SvgIcon';

export default (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox={'0 0 1024 1024'}>
      <path d="M64 320h896v128H64zM64 576h384v128H64zM64 832h896v128H64zM64 64h384v128H64z"/>
    </SvgIcon>
  )
}