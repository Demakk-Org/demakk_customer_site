import {
  Alert,
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { GoShieldCheck } from "react-icons/go";
import { CiLock } from "react-icons/ci";
import { MdOutlineHandshake } from "react-icons/md";
import { IoShieldCheckmark } from "react-icons/io5";
import getLanguage from "@/utils/getLanguage";
import useUserStore, { LANG } from "@/store/user";
import { Cancel, Circle, Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import IconFromReactIcons from "@/component/IconFromReactIcons";
import LoginIconComponents from "@/features/Login/components/LoginIconComponents";
import handleClearEmailInput from "@/features/Login/libs/handleClearEmailInput";
import handleEmailChange from "@/features/Login/libs/handleEmailChange";
import handlePasswordChange from "@/features/Login/libs/handlePasswordChange";
import { useRouter } from "next/router";
import Loading from "@/component/Loading";
import handleContinueButton from "@/features/Login/libs/handleContinueButton";

function SignIn() {
  const { lang, setLang } = useUserStore();
  const router = useRouter();

  const [showPass, setShowPass] = useState(false);
  const [continueStage, setContinueStage] = useState(false);
  const [userExists, setUserExists] = useState<boolean>(false);
  const [continueButton, setContinueButton] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [snackBar, setSnackBar] = useState<{
    type: "success" | "error";
    open: boolean;
    message: string;
  }>({ type: "success", message: "Hello World!", open: false });

  return (
    <>
      <Head>
        <title>Demakk E-commerce site</title>
        <meta
          name="description"
          content="The best e-commerce to shop with custom design"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <Box
          width={"100%"}
          minHeight={"100vh"}
          bgcolor={"background.paper"}
          position={"relative"}
          pb={2}
        >
          <Stack
            bgcolor={"darken.main"}
            p={{ xs: "1rem", sm: "1rem 4rem", md: "1rem 12rem" }}
            alignItems={"center"}
            direction={"row"}
            color={"brighten.main"}
            justifyContent={"space-between"}
            flexDirection={{ xs: "column", sm: "row" }}
            gap={2}
          >
            <Typography
              fontSize={{ xs: "1.75rem", sm: "2.5rem" }}
              fontWeight={"bold"}
              letterSpacing={1}
            >
              {getLanguage("demakk", lang)}
            </Typography>
            <Stack
              direction={"row"}
              alignItems={"center"}
              gap={{ xs: 4, sm: 2 }}
            >
              <Stack
                direction={{ xs: "column", sm: "row" }}
                gap={{ xs: 0, sm: 1 }}
                alignItems={"center"}
              >
                <IconFromReactIcons
                  width={20}
                  strokeWidth="0.5px"
                  color="inherit"
                  icon={<GoShieldCheck />}
                />

                <Typography
                  sx={{ userSelect: "none" }}
                  fontSize={{ xs: "0.7rem", sm: "1rem" }}
                >
                  {getLanguage("safePayments", lang)}
                </Typography>
              </Stack>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                gap={{ xs: 0, sm: 1 }}
                alignItems={"center"}
              >
                <IconFromReactIcons
                  width={20}
                  strokeWidth="0.5px"
                  icon={<CiLock />}
                  color="inherit"
                />
                <Typography
                  sx={{ userSelect: "none" }}
                  fontSize={{ xs: "0.7rem", sm: "1rem" }}
                >
                  {getLanguage("securityAndPrivacy", lang)}
                </Typography>
              </Stack>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                gap={{ xs: 0, sm: 1 }}
                alignItems={"center"}
              >
                <IconFromReactIcons
                  width={20}
                  strokeWidth="0.5px"
                  icon={<MdOutlineHandshake />}
                  color="inherit"
                />
                <Typography
                  sx={{ userSelect: "none" }}
                  fontSize={{ xs: "0.7rem", sm: "1rem" }}
                >
                  {getLanguage("buyerProtection", lang)}
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          {/* login and register section */}
          <Stack
            color={"text.primary"}
            maxWidth={"500px"}
            m={"auto"}
            py={"2rem"}
            gap={1}
          >
            <Typography
              sx={{ userSelect: "none" }}
              textAlign={"center"}
              fontSize={"1.25rem"}
              fontWeight={"bold"}
            >
              {userExists && continueStage
                ? getLanguage("logIn", lang)
                : !userExists && continueStage
                ? getLanguage("register", lang)
                : `${getLanguage("register", lang)} / ${getLanguage(
                    "logIn",
                    lang
                  )}`}
            </Typography>

            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              bgcolor={"background.reddish"}
              p={"0.25rem"}
              gap={1}
            >
              <Box color="success.main" display={"flex"}>
                <IoShieldCheckmark color="inherit" />
              </Box>
              <Typography fontSize={"0.8rem"}>
                {getLanguage("yourInformationIsProtected", lang)}
              </Typography>
            </Stack>

            <Stack
              px={{ xs: "1.5rem", sm: "3rem" }}
              py={{ xs: "1.5rem", sm: "2rem" }}
              gap={{ xs: 2, sm: 3 }}
            >
              <OutlinedInput
                id="login--email"
                onChange={({ target }) =>
                  handleEmailChange({
                    value: target.value,
                    requestFrom: "page",
                    continueButton,
                    setUserExists,
                    continueStage,
                    setContinueButton,
                    setContinueStage,
                  })
                }
                size="medium"
                fullWidth
                sx={{ m: "0.5rem 0" }}
                placeholder={getLanguage("emailOrPhoneNumber", lang)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                      onClick={() =>
                        handleClearEmailInput({
                          requestFrom: "page",
                          continueStage,
                          setUserExists,
                          setContinueButton,
                          continueButton,
                          setContinueStage,
                        })
                      }
                    >
                      <Cancel fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                }
              />
              {continueStage && (
                <OutlinedInput
                  id="login--password"
                  size="medium"
                  fullWidth
                  type={showPass ? "text" : "password"}
                  onChange={({ target }) =>
                    handlePasswordChange({
                      value: target.value,
                      requestForm: "page",
                      setContinueStage,
                      setContinueButton,
                    })
                  }
                  placeholder="Password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                        onClick={() => setShowPass((p) => !p)}
                      >
                        {showPass ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              )}
              {continueStage && !userExists && (
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  p={"0.5rem 1rem"}
                  color={"text.secondary"}
                >
                  <Box display={"flex"} gap={"0.5rem"} alignItems={"center"}>
                    <Circle sx={{ fontSize: "6px" }} />
                    <Typography fontSize={"0.7rem"}>
                      6-20 {getLanguage("characters", lang)}
                    </Typography>
                  </Box>
                  <Box display={"flex"} gap={"0.5rem"} alignItems={"center"}>
                    <Circle sx={{ fontSize: "6px" }} />
                    <Typography fontSize={"0.7rem"}>
                      {getLanguage("containsNumberLetterOrSymbol", lang)}
                    </Typography>
                  </Box>
                </Box>
              )}
              <Button
                fullWidth
                size="large"
                color="demakkPrimary"
                variant={"contained"}
                disabled={!continueButton}
                sx={{
                  textTransform: "capitalize",
                  borderRadius: "2rem",
                  color: "text.primary",
                  fontSize: "1.25rem",
                }}
                onClick={() =>
                  handleContinueButton({
                    requestFrom: "page",
                    setLoading,
                    setSnackBar,

                    userExists,
                    continueStage,
                    setUserExists,
                    setContinueButton,
                    setContinueStage,
                    router,
                  })
                }
              >
                {!continueStage
                  ? getLanguage("continue", lang)
                  : userExists
                  ? getLanguage("signIn", lang)
                  : getLanguage("register", lang)}
              </Button>
              <Box
                component={"a"}
                href="#"
                fontSize={{ xs: "0.75rem", sm: "0.9rem" }}
                sx={{ color: "text.links" }}
              >
                {getLanguage("troubleSigningIn", lang)}
              </Box>
              <Divider>
                <Typography
                  p={"0 1rem"}
                  fontSize={{ xs: "0.85rem", sm: "1rem" }}
                  fontWeight={300}
                >
                  {getLanguage("orContinueWith", lang)}
                </Typography>
              </Divider>
              <Box
                display={"flex"}
                width={1}
                alignItems={"center"}
                gap="1rem"
                justifyContent={"center"}
              >
                <LoginIconComponents
                  imageUrl="/social/google.png"
                  loginFn={() => {}}
                />
                <LoginIconComponents
                  imageUrl="/social/facebook.png"
                  loginFn={() => {}}
                />
                <LoginIconComponents
                  imageUrl="/social/twitter.png"
                  loginFn={() => {}}
                />
                <LoginIconComponents
                  imageUrl="/social/apple.png"
                  loginFn={() => {}}
                  bgcolor
                />
              </Box>
              <Typography fontSize={"0.8rem"} textAlign={"center"}>
                {getLanguage("registerPolicy", lang)}
              </Typography>
            </Stack>
          </Stack>

          {/* select language component */}
          <Stack alignItems={"center"}>
            <Box
              className="language--container"
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              width={0.4}
              gap={1}
            >
              <Typography
                color={"text.primary"}
                fontSize={{ xs: "0.85rem", sm: "1rem" }}
                fontWeight={600}
              >
                {getLanguage("language", lang)}
              </Typography>
              <FormControl sx={{}}>
                <Select
                  name="language"
                  size="small"
                  color={"primary"}
                  value={lang}
                  onChange={({ target }) => {
                    console.log("target", target.value);
                    setLang(target.value as LANG);
                  }}
                  sx={{
                    borderRadius: "0.5rem",
                    minWidth: 120,
                    bgcolor: "background.lighter",
                  }}
                >
                  <MenuItem value={LANG.en} sx={{ minHeight: "unset" }}>
                    <Typography fontSize={"0.8rem"}>
                      {getLanguage("english", lang)}
                    </Typography>
                  </MenuItem>
                  <MenuItem value={LANG.or} sx={{ minHeight: "unset" }}>
                    <Typography fontSize={"0.8rem"}>
                      {getLanguage("afanOromo", lang)}
                    </Typography>
                  </MenuItem>
                  <MenuItem value={LANG.am} sx={{ minHeight: "unset" }}>
                    <Typography fontSize={"0.8rem"}>
                      {getLanguage("amharic", lang)}
                    </Typography>
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Stack>

          {loading && (
            <Box position={"absolute"} top={0} left={0} width={1} height={1}>
              <Loading />
            </Box>
          )}
        </Box>

        <Snackbar
          autoHideDuration={2500}
          open={snackBar?.open}
          onClose={() =>
            setSnackBar((p) => ({
              ...p,
              open: false,
            }))
          }
          anchorOrigin={{ horizontal: "center", vertical: "top" }}
        >
          <Alert
            onClose={() => setSnackBar((p) => ({ ...p, open: false }))}
            severity={snackBar?.type}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {snackBar?.message}
          </Alert>
        </Snackbar>
      </main>
    </>
  );
}

export default SignIn;
