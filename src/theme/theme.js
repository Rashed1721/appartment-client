import { createTheme } from "@mui/material/styles";
// customized theme

const theme = createTheme({
  palette: {
    primary: {
      main: "#424242",
    },
    secondary: {
      main: "#8bc34a",
    },
  },
  background: {
    default: "#f5f5f5",
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightRegular: 500,
  },
});
export default theme;
