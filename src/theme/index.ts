import "./darkTheme";
import "./lightTheme";

declare module "@mui/material/styles" {
  interface Palette {
    dark: Palette["primary"];
    darken: Palette["secondary"];
    bright: Palette["primary"];
    brighten: Palette["secondary"];
    demakkPrimary: Palette["primary"];
    demakkSecondary: Palette["primary"];
    primaryButton: Palette["primary"];
    secondaryButton: Palette["primary"];
  }

  interface PaletteOptions {
    dark?: PaletteOptions["primary"];
    darken?: PaletteOptions["primary"];
    bright?: PaletteOptions["primary"];
    brighten?: PaletteOptions["primary"];
    demakkPrimary?: PaletteOptions["primary"];
    demakkSecondary?: PaletteOptions["primary"];
    primaryButton?: PaletteOptions["primary"];
    secondaryButton?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    dark: true;
    darken: true;
    bright: true;
    brighten: true;
    demakkPrimary: true;
    demakkSecondary: true;
    primaryButton: true;
    secondaryButton: true;
    contrast: true;
  }
}

declare module "@mui/material/AppBar" {
  interface AppBarPropsColorOverrides {
    dark: true;
    darken: true;
    bright: true;
    brighten: true;
    demakkPrimary: true;
    demakkSecondary: true;
    primaryButton: true;
    secondaryButton: true;
    contrast: true;
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    dark: true;
    darken: true;
    bright: true;
    brighten: true;
    demakkPrimary: true;
    demakkSecondary: true;
    primaryButton: true;
    secondaryButton: true;
    contrast: true;
  }
}

declare module "@mui/material/SvgIcon" {
  interface SvgIconPropsColorOverrides {
    dark: true;
    darken: true;
    bright: true;
    brighten: true;
    demakkPrimary: true;
    demakkSecondary: true;
    primaryButton: true;
    secondaryButton: true;
    contrast: true;
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsColorOverrides {
    dark: true;
    darken: true;
    bright: true;
    brighten: true;
    demakkPrimary: true;
    demakkSecondary: true;
    primaryButton: true;
    secondaryButton: true;
    contrast: true;
  }
}
