import { createTheme, outlinedInputClasses } from "@mui/material";

const dTheme = createTheme({
  palette: {
    mode: "dark",
    dark: { main: "#262626" },
    bright: { main: "#e9e9e9" },
    primary: { main: "#ee461c" },
    secondary: { main: "#fcbe19" },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "darkgray",
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

const darkTheme = createTheme(dTheme, {
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "darkgray",
          letterSpacing: "0.2px",
        },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "#fff",
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
  palette: {
    text: {
      tertiary: "#575757",
      links: "#ffffffcc",
      price: "#ff0000",
      dealHeader: "#ff0000",
    },
    background: {
      dark: "#111111cc",
      lightOpaque: "#414141",
      light: "#63636344",
      lighter: "#63636322",
      lightDark: "#636363bb",
      reddish: "#ff795b99",
    },
    demakkPrimary: dTheme.palette.augmentColor({
      color: {
        main: "#ee461c",
      },
      name: "demakkPrimary",
    }),
    demakkSecondary: dTheme.palette.augmentColor({
      color: {
        main: "#fcbe19",
      },
      name: "demakkSecondary",
    }),
    darken: dTheme.palette.augmentColor({
      color: {
        main: "#262626",
      },
      name: "darken",
    }),
    brighten: dTheme.palette.augmentColor({
      color: {
        main: "#e9e9e9",
      },
      name: "brighten",
    }),
    primaryButton: dTheme.palette.augmentColor({
      color: {
        main: "#e9e9e9",
      },
      name: "primaryButton",
    }),
    secondaryButton: dTheme.palette.augmentColor({
      color: {
        main: "#e9e9e90c",
      },
      name: "secondaryButton",
    }),
    contrast: dTheme.palette.augmentColor({
      color: {
        main: "#e9e9e9",
      },
    }),
  },
});

export default darkTheme;
