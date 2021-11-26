import { createTheme } from '@mui/material/styles';
import { green, grey, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#121212',
    },
    secondary: {
      main: grey[600],
    },
  },
});

export default theme;