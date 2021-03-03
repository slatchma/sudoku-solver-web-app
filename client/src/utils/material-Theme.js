import { createMuiTheme } from '@material-ui/core/styles';

const myTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#000000',
    },
    background: {
      paper: '#ffffff'
    }
  },
  typography: {
    h1: {
      fontFamily: "Poppins",
      fontSize: '10vh',
      fontWeight: 600
    },
    body1: {
      fontFamily: "Poppins",
      fontSize: '1em'
    },
    subtitle1: {
      fontFamily: "Poppins",
      fontSize: '10px',
    },
  },
});

export default myTheme;