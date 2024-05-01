import useThemeProvider from '@/store/theme';
import '@/styles/globals.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { useEffect } from 'react';
import { AppProps } from 'next/app';

declare module '@mui/material/styles' {
  interface Palette {
    dark: Palette['primary'];
    darken: Palette['secondary'];
    bright: Palette['primary'];
    brighten: Palette['secondary'];
    demakkPrimary: Palette['primary'];
    demakkSecondary: Palette['primary'];
    primaryButton: Palette['primary'];
    secondaryButton: Palette['primary'];
  }

  interface PaletteOptions {
    dark?: PaletteOptions['primary'];
    darken?: PaletteOptions['primary'];
    bright?: PaletteOptions['primary'];
    brighten?: PaletteOptions['primary'];
    demakkPrimary?: PaletteOptions['primary'];
    demakkSecondary?: PaletteOptions['primary'];
    primaryButton?: PaletteOptions['primary'];
    secondaryButton?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    dark: true;
    darken: true;
    bright: true;
    brighten: true;
    demakkPrimary: true;
    demakkSecondary: true;
    primaryButton: true;
    secondaryButton: true;
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    dark: true;
    darken: true;
    bright: true;
    brighten: true;
    demakkPrimary: true;
    demakkSecondary: true;
    primaryButton: true;
    secondaryButton: true;
  }
}

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides {
    dark: true;
    darken: true;
    bright: true;
    brighten: true;
    demakkPrimary: true;
    demakkSecondary: true;
    primaryButton: true;
    secondaryButton: true;
  }
}

const dTheme = createTheme({
  palette: {
    mode: 'dark',
    dark: { main: '#262626' },
    bright: { main: '#e9e9e9' },
    primary: { main: '#ee461c' },
    secondary: { main: '#fcbe19' },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: 'darkgray',
          letterSpacing: '0.2px',
        },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: '#2c43a2',
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: '#ffa889',
          },
        },
      },
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'Poppins',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
    ].join(','),
    button: {
      textTransform: 'capitalize',
    },
  },
});

const lTheme = createTheme({
  palette: {
    mode: 'light',
    dark: { main: '#606060' },
    bright: { main: '#fafafa' },
    primary: { main: '#ffab92' },
    secondary: { main: '#fef06b' },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: 'darkgray',
          letterSpacing: '0.2px',
        },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: '#2c43a2',
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: '#ffa889',
          },
        },
      },
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'Poppins',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
    ].join(','),
    button: {
      textTransform: 'capitalize',
    },
  },
});

const darkTheme = createTheme(dTheme, {
  palette: {
    text: {
      teritiary: '#575757',
      links: '#ffffffcc',
      price: '#ff0000',
    },
    background: {
      lightOpaque: '#414141',
      lighter: '#63636399',
      reddish: '#ff795b99',
    },
    demakkPrimary: dTheme.palette.augmentColor({
      color: {
        main: '#ee461c',
      },
      name: 'demakkPrimary',
    }),
    demakkSecondary: dTheme.palette.augmentColor({
      color: {
        main: '#fcbe19',
      },
      name: 'demakkSecondary',
    }),
    darken: dTheme.palette.augmentColor({
      color: {
        main: '#262626',
      },
      name: 'darken',
    }),
    brighten: dTheme.palette.augmentColor({
      color: {
        main: '#e9e9e9',
      },
      name: 'brighten',
    }),
    primaryButton: dTheme.palette.augmentColor({
      color: {
        main: '#e9e9e9',
      },
      name: 'primaryButton',
    }),
    secondaryButton: dTheme.palette.augmentColor({
      color: {
        main: '#e9e9e90c',
      },
      name: 'secondaryButton',
    }),
  },
});

const lightTheme = createTheme(lTheme, {
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: 'darkgray',
          letterSpacing: '0.2px',
        },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: '#2c43a2',
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: '#ffa889',
          },
        },
      },
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'Poppins',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
    ].join(','),
    button: {
      textTransform: 'capitalize',
    },
  },
  palette: {
    text: {
      teritiary: '#e7e7e7',
      links: '#191919cc',
      price: '#ff0000',
    },
    background: {
      lightOpaque: '#d0d0d0',
      lighter: '#d0d0d099',
      reddish: '#ffc7b899',
      gray: 'rgba(210, 204, 204, 0.6)',
      productbg: 'rgba(0, 0, 0, 0.04)',
    },
    demakkPrimary: lTheme.palette.augmentColor({
      color: {
        main: '#ffab92',
      },
      name: 'demakkPrimary',
    }),
    demakkSecondary: lTheme.palette.augmentColor({
      color: {
        main: '#fef06b',
      },
      name: 'demakkSecondary',
    }),
    darken: lTheme.palette.augmentColor({
      color: {
        main: '#262626',
      },
      name: 'darken',
    }),
    brighten: lTheme.palette.augmentColor({
      color: {
        main: '#e9e9e9',
      },
      name: 'brighten',
    }),
    primaryButton: lTheme.palette.augmentColor({
      color: {
        main: '#262626',
      },
      name: 'primaryButton',
    }),
    secondaryButton: lTheme.palette.augmentColor({
      color: {
        main: '#2626261c',
      },
      name: 'secondaryButton',
    }),
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const { darkMode, setTheme } = useThemeProvider();

  useEffect(() => {
    if (window) {
      let deviceDarkMode = window.matchMedia('(prefers-color-scheme:dark)');
      if (deviceDarkMode.matches) {
        setTheme(true);
      } else {
        setTheme(false);
      }
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', (e) => {
          console.log(e.matches);
          console.log('theme', e.matches ? dTheme : lTheme);
          setTheme(e.matches);
        });
    }
  }, []);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
