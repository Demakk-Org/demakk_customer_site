import useThemeProvider from "@/store/theme";
import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { useEffect } from "react";
import { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import useUserStore from "@/store/user";
import Loading from "@/component/Loading";
import usePageStore from "@/store/page";

import darkTheme from "@/theme/darkTheme";
import lightTheme from "@/theme/lightTheme";
import "@/theme";
import CommonModal from "@/component/CommonModal";
import { Alert, Snackbar } from "@mui/material";
import { appWithTranslation } from "next-i18next";
export const demakkFont = Montserrat({ subsets: ["cyrillic"] });

function App({ Component, pageProps }: AppProps) {
  const { loading, snackBar, setSnackBar } = usePageStore();
  const { darkMode, setTheme } = useThemeProvider();
  const { user, setLang } = useUserStore();

  useEffect(() => {
    if (user) setLang(user.getUser().lang);

    if (window) {
      let deviceDarkMode = window.matchMedia("(prefers-color-scheme:dark)");
      if (deviceDarkMode.matches) {
        setTheme(true);
      } else {
        setTheme(false);
      }
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e) => {
          setTheme(e.matches);
        });
    }
  }, [user]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Component {...pageProps} />
      {loading && <Loading />}
      <CommonModal />
      <Snackbar
        autoHideDuration={2500}
        open={snackBar?.open}
        onClose={() => setSnackBar(null)}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      >
        <Alert
          onClose={() => setSnackBar(null)}
          severity={snackBar?.type}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackBar?.message}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}

export default appWithTranslation(App);
