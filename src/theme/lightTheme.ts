import { createTheme, outlinedInputClasses } from "@mui/material";

const lTheme = createTheme({
  palette: {
    mode: "light",
    dark: { main: "#606060" },
    bright: { main: "#fafafa" },
    primary: { main: "#ffab92" },
    secondary: { main: "#fef06b" },
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

const lightTheme = createTheme(lTheme, {
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
  palette: {
    text: {
      tertiary: "#e7e7e7",
      links: "#191919cc",
      price: "#ff0000",
      dealHeader: "#ff0000",
      contrast: "#191919cc",
    },
    background: {
      dark: "#666666cc",
      lightOpaque: "#d0d0d0",
      light: "#d0d0d044 ",
      lighter: "#d0d0d022",
      reddish: "#ffc7b899",
    },
    demakkPrimary: lTheme.palette.augmentColor({
      color: {
        main: "#ffab92",
      },
      name: "demakkPrimary",
    }),
    demakkSecondary: lTheme.palette.augmentColor({
      color: {
        main: "#ff0000",
      },
      name: "demakkSecondary",
    }),
    darken: lTheme.palette.augmentColor({
      color: {
        main: "#262626",
      },
      name: "darken",
    }),
    brighten: lTheme.palette.augmentColor({
      color: {
        main: "#e9e9e9",
      },
      name: "brighten",
    }),
    primaryButton: lTheme.palette.augmentColor({
      color: {
        main: "#262626",
      },
      name: "primaryButton",
    }),
    secondaryButton: lTheme.palette.augmentColor({
      color: {
        main: "#2626261c",
      },
      name: "secondaryButton",
    }),
    contrast: lTheme.palette.augmentColor({
      color: {
        main: "#262626",
      },
    }),
  },
});

export default lightTheme;
