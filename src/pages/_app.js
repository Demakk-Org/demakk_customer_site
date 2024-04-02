import useThemeProvider from '@/store/theme';
import '@/styles/globals.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
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

const dTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme(dTheme, {
  palette: {
    text: {
      teritiary: '#575757',
      links: '#ffffffcc',
    },
    background: {
      lighter: '#63636399',
    },
    demakkPrimary: theme.palette.augmentColor({
      color: {
        main: '#ee461c',
      },
      name: 'demakkPrimary',
    }),
    demakkSecondary: theme.palette.augmentColor({
      color: {
        main: '#fcbe19',
      },
      name: 'demakkSecondary',
    }),
    dark: '#262626',
    bright: '#e9e9e9',
  },
});

const lightTheme = createTheme(lTheme, {
  palette: {
    text: {
      teritiary: '#e7e7e7',
      links: '#191919cc',
    },
    background: {
      lighter: '#d0d0d099',
    },
    demakkPrimary: theme.palette.augmentColor({
      color: {
        main: '#ffab92',
      },
      name: 'demakkPrimary',
    }),
    demakkSecondary: theme.palette.augmentColor({
      color: {
        main: '#fef06b',
      },
      name: 'demakkSecondary',
    }),
    dark: '#606060',
    bright: '#fafafa',
  },
});

export default function App({ Component, pageProps }) {
  const { darkMode, setTheme } = useThemeProvider();

  useEffect(() => {
    if (window) {
      let deviceDarkMode = window.matchMedia('(prefers-color-scheme:dark)');
      if (deviceDarkMode.matches) {
        // setTheme(true);
      } else {
        setTheme(false);
      }
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', (e) => {
          console.log(e.matches);
          console.log('theme', e.matches ? darkTheme : lightTheme);
          setTheme(e.matches);
        });
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeProvider>
  );
}
