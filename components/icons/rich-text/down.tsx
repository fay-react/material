import React from 'react';
import SvgIcon,{SvgIconProps} from '@material-ui/core/SvgIcon';

export default (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox={'0 0 1024 1024'}>
      <path d="M896 300q0 15.008-10.016 28L544.992 751.008q-12.992 16.992-34.016 16.992t-34.016-16.992L137.952 328.992q-11.008-14.016-8.992-32t16-28.992 32-8.992 28.992 16l304.992 379.008 307.008-380.992q11.008-14.016 28.992-16t32 8.992q16.992 12.992 16.992 34.016z"/>
    </SvgIcon>
  )
}