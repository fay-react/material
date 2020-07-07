import React from 'react';
import SvgIcon,{SvgIconProps} from '@material-ui/core/SvgIcon';

export default (props: SvgIconProps) => {
    return (
      <SvgIcon {...props} viewBox={'0 0 1024 1024'}>
        <path d="M492.8 99.2l9.6-24h436.8l-9.6 24c-48 0-81.6 9.6-100.8 33.6-14.4 14.4-33.6 33.6-76.8 105.6l-307.2 571.2c-24 43.2-24 67.2-24 81.6 9.6 33.6 43.2 48 115.2 57.6l-9.6 24h-446.4l9.6-24c48 0 81.6-9.6 105.6-33.6 14.4-14.4 43.2-43.2 67.2-105.6l316.8-580.8c14.4-48 24-57.6 24-76.8-4.8-28.8-48-52.8-110.4-52.8"/>
      </SvgIcon>
    )
}