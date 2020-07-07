import React from 'react';
import SvgIcon,{SvgIconProps} from '@material-ui/core/SvgIcon';

export default (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox={'0 0 1024 1024'}>
      <path d="M320 64h381.312v128H320zM64 317.312h896V448H64zM320 576h384v128H320zM64 829.312h896V960H64z"/>
    </SvgIcon>
  )
}