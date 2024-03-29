import useThemeProvider from "@/store/theme";
import "@/styles/globals.css";
// import { ThemeProvider, createTheme } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { useEffect } from "react";

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "#191919",
          letterSpacing: "0.2px",
        },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "#2c43a2",
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "#ffa889",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: [
      "Montserrat",
      "Poppins",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
    ].join(","),
    button: {
      textTransform: "capitalize",
    },
  },
});

const darkTheme = createTheme(theme, {
  palette: {
    primary: theme.palette.augmentColor({
      color: {
        main: "#fc4d21",
      },
      name: "primary",
    }),
    primaryLight: theme.palette.augmentColor({
      color: {
        main: "#fce8e6",
      },
      name: "primaryLight",
    }),
    secondary: theme.palette.augmentColor({
      color: {
        main: "#fff595",
      },
      name: "secondary",
    }),
    secondaryLight: theme.palette.augmentColor({
      color: {
        main: "#fffde5",
      },
      name: "secondaryLight",
    }),
    tertiary: theme.palette.augmentColor({
      color: {
        main: "#A0153E",
      },
      name: "tertiary",
    }),
    dark: theme.palette.augmentColor({
      color: {
        main: "#191919",
      },
      name: "dark",
    }),
    bright: theme.palette.augmentColor({
      color: {
        main: "#fff",
      },
      name: "bright",
    }),
    primaryBg: theme.palette.augmentColor({
      color: {
        main: "#00224D",
      },
      name: "primaryBg",
    }),
    secondaryBg: theme.palette.augmentColor({
      color: {
        main: "#bcc6d8",
      },
      name: "secondaryBg",
    }),
    contrastBg: theme.palette.augmentColor({
      color: {
        main: "#e5e8ef",
      },
      name: "contrastBg",
    }),
    contrastText: theme.palette.augmentColor({
      color: {
        main: "#fff",
      },
      name: "contrastText",
    }),
    text: theme.palette.augmentColor({
      color: {
        main: "#191919",
      },
      name: "text",
    }),
  },
});

const lightTheme = createTheme(theme, {
  palette: {
    primary: theme.palette.augmentColor({
      color: {
        main: "#bc2c0b",
      },
      name: "primary",
    }),
    primaryLight: theme.palette.augmentColor({
      color: {
        main: "#fc4d21",
      },
      name: "primaryLight",
    }),
    secondary: theme.palette.augmentColor({
      color: {
        main: "#ffd901",
      },
      name: "secondary",
    }),
    secondaryLight: theme.palette.augmentColor({
      color: {
        main: "#fff595",
      },
      name: "secondaryLight",
    }),
    tertiary: theme.palette.augmentColor({
      color: {
        main: "#063164",
      },
      name: "tertiary",
    }),
    dark: theme.palette.augmentColor({
      color: {
        main: "#191919",
      },
      name: "dark",
    }),
    bright: theme.palette.augmentColor({
      color: {
        main: "#fff",
      },
      name: "bright",
    }),
    primaryBg: theme.palette.augmentColor({
      color: {
        main: "#5c5c5c",
      },
      name: "primaryBg",
    }),
    secondaryBg: theme.palette.augmentColor({
      color: {
        main: "#b8b8b8",
      },
      name: "secondaryBg",
    }),
    contrastBg: theme.palette.augmentColor({
      color: {
        main: "#bcc6d9",
      },
      name: "contrastBg",
    }),
    contrastText: theme.palette.augmentColor({
      color: {
        main: "#191919",
      },
      name: "contrastText",
    }),
    text: theme.palette.augmentColor({
      color: {
        main: "#fff",
      },
      name: "text",
    }),
    demakk: theme.palette.augmentColor({
      color: {
        main: "#FFC94A",
      },
      name: "demakk",
    }),
    demakkLight: theme.palette.augmentColor({
      color: {
        main: "#C08B5C",
      },
      name: "demakkLight",
    }),
    demakkDark: theme.palette.augmentColor({
      color: {
        main: "#795458",
      },
      name: "demakkDark",
    }),
    demakkContrast: theme.palette.augmentColor({
      color: {
        main: "#453F78",
      },
      name: "demakkContrast",
    }),
  },
});

export default function App({ Component, pageProps }) {
  const { darkMode, setTheme } = useThemeProvider();

  useEffect(() => {
    if (window) {
      let deviceDarkMode = window.matchMedia("(prefers-color-scheme:dark)");
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e) => {
          setTheme(e.matches);
        });
      setTheme(deviceDarkMode);
    }
    console.log(darkTheme);
  }, []);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
