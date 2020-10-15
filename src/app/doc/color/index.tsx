import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import * as colors from '@/../components/colors';
import Box from '@/../components/Box';
import Typography from '@/../components/Typography';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
  colorBox: {
    width: 80,
    height: 100,
    position: 'relative'
  },
  colorText: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center'
  },
  colorKeyText: {
    top: 8,
  },
  colorValueText: {
    bottom: 8,
  }
}));

const colorTypes: ('blue'|'green'|'grey'|'red'|'yellow')[] = ['blue', 'green', 'grey', 'red', 'yellow'];
const colorKeys: (900|800|700|600|500|400|300|200|100|50)[] = [900, 800, 700, 600, 500, 400, 300, 200, 100, 50];

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <h1>Welcome to use fay material color.</h1>
      </Box>
      {
        colorTypes.map((type) => {
          return (
            <React.Fragment key={type}>
              <Box mt={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <code>import {type} from '@fay-material/colors/{type}'</code>
              </Box>
              <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                mt={2}
              >
                {
                  colorKeys.map((key) => {
                    return (
                      <Box key={key} className={classes.colorBox} bgcolor={colors[type][key]} color={key>300?'#FFFFFF': '#000000'}>
                        <Typography variant={"inherit"} className={clsx(classes.colorText, classes.colorKeyText)}>{key}</Typography>
                        <Typography variant={"inherit"} className={clsx(classes.colorText, classes.colorValueText)}>{colors[type][key]}</Typography>
                      </Box>
                    )
                  })
                }
              </Box>
            </React.Fragment>
          )
        })
      }
    </div>
  )
}