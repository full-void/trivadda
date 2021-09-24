import { ThemeProvider } from '@mui/material/styles';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Box } from '@mui/material';
import Welcome from './components/Welcome/Welcome';
import Prompt from './components/Prompt/Prompt';
import bgImg from './assets/images/bg-img.jpg'
import NavBar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

let theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#009bff',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#8c00ff',
    },
    error: {
      main: '#ff0040',
    },
    warning: {
      main: '#ffea00',
      contrastText: '#ffffff',
    },
    info: {
      main: '#00d5ff',
      contrastText: '#ffffff',
    },
    success: {
      main: '#00e087',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f7ffff',
      paper: '#fcffff',
    },
    text: {
      primary: '#001d30',
      secondary: '#002136',
    },
  },
  spacing: 16,
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: '"Merriweather", "Roboto", "Helvetica", "Arial", sans-serif',
    body1: {
      fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    body2: {
      fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    },
  },
  overrides: {
    MuiSwitch: {
      root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: 8,
      },
      switchBase: {
        padding: 1,
        '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
          transform: 'translateX(16px)',
          color: '#fff',
          '& + $track': {
            opacity: 1,
            border: 'none',
          },
        },
      },
      thumb: {
        width: 24,
        height: 24,
      },
      track: {
        borderRadius: 13,
        border: '1px solid #bdbdbd',
        backgroundColor: '#fafafa',
        opacity: 1,
        transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      },
    },
  },
});

theme = responsiveFontSizes(theme)

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1, background: `url(${bgImg}) no-repeat`, backgroundPosition: 'center', backgroundSize: 'cover', minHeight: '100vh', paddingTop: '128px' }}>
          <NavBar />
          <Switch>
            <Route path='/category/:value'>
              <Prompt />
            </Route>
            <Route path='/'>
              <Welcome />
            </Route>
          </Switch>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
