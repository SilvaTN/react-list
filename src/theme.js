import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: pink,
    secondary: blue,
  },
});

export default darkTheme;

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: purple[500],
//     },
//     secondary: {
//       main: green[500],
//     },
//   },
// });

// export default theme;