import { createTheme } from "@mui/material/styles";
import "../fonts/fonts.css";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: "Nimbus Sans L",
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "Nimbus Sans L",
  },
});
