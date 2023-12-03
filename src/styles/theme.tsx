import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2'
    },
    secondary: {
      main: '#ba0001'
    },
    background: {
      default: '#f3f2f4'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 680,
      md: 900,
      lg: 1200,
      xl: 1920
    }
  }
})

export default theme