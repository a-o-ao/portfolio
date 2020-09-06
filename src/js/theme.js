import {createMuiTheme} from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
        
export const theme = createMuiTheme({  // #1
  palette: {
    primary: {
      light: blue[100],
      main: blue[500],
      dark: blue[800],
      contrastText: '#ffffff',
    },
    secondary: {
      light: pink[100],
      main: pink[500],
      dark: pink[800],
      contrastText: '#ffffff',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none!important"
      },
    },
  },
})