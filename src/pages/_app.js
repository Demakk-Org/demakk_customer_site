import "@/styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
const theme = createTheme({
  palette: {
    primary: {
      main: "#fe5000",
    },
    primaryLight: {
      main: "#ffa889",
    },
    secondary: {
      main: "#ffd901",
    },
    secondaryLight: {
      main: "#fff595",
    },
    dark: {
      main: "#191919",
    },
    white: {
      main: "#fff",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "var(--TextField-brandBorderColor)",
          letterSpacing: "0.2px",
        },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "var(--TextField-brandBorderHoverColor)",
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "var(--TextField-brandBorderFocusedColor)",
          },
        },
      },
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
