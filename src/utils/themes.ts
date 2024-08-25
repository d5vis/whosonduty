import { createTheme } from "@mui/material/styles";
import "../fonts/fonts.css";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#AB0C2F",
      paper: "#AB0C2F",
    },
  },
  typography: {
    fontFamily: "Metric, sans-serif",
    allVariants: {
      color: "white",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderColor: "white",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "white",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& fieldset": {
            borderColor: "white", // Change this to your desired color
          },
          "&:hover fieldset": {
            borderColor: "white", // Change this to your desired hover color
          },
          "&.Mui-focused fieldset": {
            borderColor: "white", // Change this to your desired focused color
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "&.MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white", // Change this to your desired color
            },
            "&:hover fieldset": {
              borderColor: "white", // Change this to your desired hover color
            },
            "&.Mui-focused fieldset": {
              borderColor: "white", // Change this to your desired focused color
            },
          },
        },
        icon: {
          color: "white",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "white",
          "&Mui-focused": {
            color: "inherit",
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          "& .MuiInputLabel-root": {
            color: "white",
            "&.Mui-focused": {
              color: "inherit",
            },
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "Metric, sans-serif",
  },
});
