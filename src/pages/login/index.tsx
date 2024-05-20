import {
  Alert,
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { GoShieldCheck } from "react-icons/go";
import { CiLock } from "react-icons/ci";
import { MdOutlineHandshake } from "react-icons/md";
import { IoShieldCheckmark } from "react-icons/io5";
import getLanguage from "@/utils/getLanguage";
import useUserStore from "@/store/user";
import { Cancel, Circle, Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { textValidator } from "@/utils/emailValidator";
import axios from "axios";
import { local } from "@/hooks/getProducts";
import { useRouter } from "next/router";

function SignIn() {
  const { token, setToken, lang } = useUserStore();
  const router = useRouter();

  const [showPass, setShowPass] = useState(false);
  const [continueStage, setContinueStage] = useState(false);
  const [userExists, setUserExists] = useState<boolean>(false);
  const [continueButton, setContinueButton] = useState<boolean>(false);
  const [snackBar, setSnackBar] = useState<{
    type: "success" | "error";
    open: boolean;
    message: string;
  }>({ type: "success", message: "Hello World!", open: false });

  const handleEmailChange = (value: string): void => {
    const buttonState = textValidator(value, "email");

    if (buttonState !== continueButton) setContinueButton((prev) => !prev);
    if (!buttonState && continueStage) {
      setContinueStage(false);
      setUserExists(false);
    }
  };

  const handlePasswordChange = (value: string): void => {
    if (userExists) {
      setContinueButton(true);
      if (!value) setContinueButton(false);
      return;
    }

    const buttonState = textValidator(value, "email");

    if (buttonState !== continueButton) setContinueButton((prev) => !prev);
    if (!buttonState && continueStage) {
      setContinueStage(false);
      setUserExists(false);
    }
  };

  const handleClearEmailInput = (): void => {
    const component = document.getElementById(
      "login--email"
    ) as HTMLInputElement;

    component.value = "";
    handleEmailChange("");
  };

  const handleContinueButton = (): void => {
    const emailComponent = document.getElementById(
      "login--email"
    ) as HTMLInputElement;
    const phoneOrEmail = emailComponent.value;

    if (!continueStage) {
      axios.post(`${local}/user/exists`, { phoneOrEmail }).then((response) => {
        console.log(response.data);
        if (response.data.data.exists) {
          setUserExists(true);
          setContinueStage(true);
          setContinueButton(false);
        } else {
          setUserExists(false);
          setContinueStage(true);
          setSnackBar({
            type: "error",
            message: "User does not exist, Register first!",
            open: true,
          });
        }
      });
    } else {
      if (userExists) {
        const passwordComponent = document.getElementById(
          "login--password"
        ) as HTMLInputElement;

        console.log(passwordComponent);

        console.log("try logging in here...");
        axios
          .post(`${local}/auth/login`, {
            account: phoneOrEmail,
            password: passwordComponent.value,
          })
          .then((response) => {
            console.log(response.data);
            if (!response.data.error) {
              setSnackBar({
                type: "success",
                message: "Logged in successfully!",
                open: true,
              });
              setToken(response.data.token);
              router.push("/account");
            } else {
              setSnackBar({
                type: "error",
                message: response.data.message,
                open: true,
              });
            }
          });
      }
    }
  };
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
        >
          <Stack
            bgcolor={"darken.main"}
            p={"1rem 12rem"}
            alignItems={"center"}
            direction={"row"}
            color={"brighten.main"}
            justifyContent={"space-between"}
          >
            <Typography
              fontSize={"2.5rem"}
              fontWeight={"bold"}
              letterSpacing={1}
            >
              Demakk
            </Typography>
            <Stack direction={"row"} alignItems={"center"} gap={2}>
              <Stack direction={"row"} gap={1} alignItems={"center"}>
                <GoShieldCheck fontSize={"2rem"} />
                <Typography sx={{ userSelect: "none" }}>
                  Safe payment
                </Typography>
              </Stack>

              <Stack direction={"row"} gap={1} alignItems={"center"}>
                <CiLock fontSize={"2rem"} />
                <Typography sx={{ userSelect: "none" }}>
                  Security & privacy
                </Typography>
              </Stack>

              <Stack direction={"row"} gap={1} alignItems={"center"}>
                <MdOutlineHandshake fontSize={"2rem"} />
                <Typography sx={{ userSelect: "none" }}>
                  Safe payment
                </Typography>
              </Stack>
            </Stack>
          </Stack>

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
              Register/Sing in
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
                Your information is protected
              </Typography>
            </Stack>
            <Stack px={"3rem"} py={"2rem"} gap={3}>
              <OutlinedInput
                id="login--email"
                onChange={({ target }) => handleEmailChange(target.value)}
                size="medium"
                fullWidth
                sx={{ m: "0.5rem 0" }}
                placeholder="Email or Phone Number"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                      onClick={() => handleClearEmailInput()}
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
                  onChange={({ target }) => handlePasswordChange(target.value)}
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
                onClick={() => handleContinueButton()}
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
                fontSize={"0.9rem"}
                sx={{ color: "text.links" }}
              >
                {getLanguage("troubleSigningIn", lang)}
              </Box>
              <Divider>
                <Typography p={"0 1rem"} fontSize={"1rem"} fontWeight={300}>
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
                <Box display={"flex"} width={"fit-content"} borderRadius="50%">
                  <IconButton color="primary">
                    <Avatar
                      sx={{ width: "50px", height: "50px" }}
                      src="/social/google.png"
                    />
                  </IconButton>
                </Box>
                <Box display={"flex"} width={"fit-content"} borderRadius="50%">
                  <IconButton color="primary">
                    <Avatar
                      sx={{ width: "50px", height: "50px" }}
                      src="/social/facebook.png"
                    />
                  </IconButton>
                </Box>

                <Box display={"flex"} width={"fit-content"} borderRadius="50%">
                  <IconButton color="primary">
                    <Avatar
                      sx={{ width: "50px", height: "50px" }}
                      src="/social/twitter.png"
                    />
                  </IconButton>
                </Box>
                <Box display={"flex"} width={"fit-content"} borderRadius="50%">
                  <IconButton color="primary">
                    <Avatar
                      sx={{ width: "50px", height: "50px", bgcolor: "white" }}
                      src="/social/apple.png"
                    />
                  </IconButton>
                </Box>
              </Box>
              <Typography fontSize={"0.8rem"}>
                {getLanguage("registerPolicy", lang)}
              </Typography>
            </Stack>
          </Stack>
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
