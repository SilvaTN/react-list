import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles';
import darkTheme from "./theme";

ReactDOM.render(
  //strict mode causes warning with material ui snackbar
  // <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>,
    
  // </React.StrictMode>,
  document.getElementById('root')
);