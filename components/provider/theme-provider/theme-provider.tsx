/**
 * Create by fay on 4/22/20 10:27 下午
 */
import {blue, red} from '../../colors';
import {createMuiTheme} from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: blue[900],
      light: blue[100],
    },
    secondary: {
      main: red[700],
      light: red[100],
    },
    common: {
      black: '#131313'
    }
  },
  spacing: 8,
  overrides: {
    MuiPaper: {
      elevation1: {
        boxShadow: '0px 30px 81px #2121211C',
      },
      rounded: {
        borderRadius: '2px'
      }
    },
    MuiSnackbar: {
      anchorOriginTopRight: {
        '@media (min-width: 600px)': {
          top: '60px',
          left: '200px',
        }
      }
    },
    MuiOutlinedInput: {
      input: {
        padding: '15.7px 14px',
        fontSize: '0.875rem'
      }
    },
    MuiButton: {
      root: {
        textTransform: "inherit",
        padding: '8px 24px'
      },
      outlined: {
        padding: '8px 24px',
      },
      text: {
        padding: '8px 24px'
      },
    },
    MuiIconButton: {
      root: {
        borderRadius: '4px',
        padding: '4px'
      }
    }
  }
});

const myTheme = {
  charts: {
    color: '#008AFF3D',
    series: {
      color: '#008AFF'
    },
    colors: {
      orange: {
        main: '#FFA200',
        light: '#FFB33A3D'
      },
      skyBlue: {
        main: '#23B4FF',
        light: '#23B4FF3D'
      },
      purple: {
        main: '#B134FF',
        light: '#B134FF3D'
      },
      blue: {
        main: '#4278FF',
        light: '#4278FF3D'
      },
      cyan: {
        main: '#00CDF0',
        light: '#3BFFE33D'
      },
    }
  },
  colors: {
    blue: '#0062FF',
    skyBlue: "#23B4FF",
    green: '#0CC73B',
    red: '#D70D26',
    orange: '#FFA200',
    deepOrange: '#C67E00',
    grey: '#BDBDBD',
    deepGrey: '#757575',
    purple: '#B134FF',
    cyan: '#00CDF0',
  }
};

export default ({children, theme}: any) => {
  return (
    <ThemeProvider theme={{...muiTheme, ...myTheme, ...theme}}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
};