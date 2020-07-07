import React from 'react';
import SvgIcon,{SvgIconProps} from '@material-ui/core/SvgIcon';

export default (props: SvgIconProps) => {
    return (
      <SvgIcon {...props} viewBox={'0 0 1024 1024'}>
        <path d="M567.936 82.944c-38.848-38.784-70.4-10.368-70.4 57.92v182.592h-6.528c-226.624 0-423.872 325.248-426.944 614.4 0 23.04 15.104 29.504 29.44 0 73.344-162.24 192.96-246.4 349.76-246.4h54.336v192.64c0 57.472 34.24 96.768 73.088 58.048l358.592-357.312a99.84 99.84 0 0 0 0.064-140.928l-361.408-360.96z"/>
      </SvgIcon>
    )
}