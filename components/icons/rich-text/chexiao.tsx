import React from 'react';
import SvgIcon,{SvgIconProps} from '@material-ui/core/SvgIcon';

export default (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox={'0 0 1024 1024'}>
      <path d="M532.992 323.52h-6.528V140.928c0-68.288-31.552-96.768-70.4-57.92L94.72 443.968a99.968 99.968 0 0 0 0.064 140.992l358.592 357.248c38.848 38.656 73.088-0.64 73.088-58.048v-192.64h54.336c156.8 0 276.352 84.096 349.76 246.464 14.336 29.44 29.44 22.976 29.44 0-3.2-289.28-200.448-614.464-427.008-614.464z"/>
    </SvgIcon>
  )
}