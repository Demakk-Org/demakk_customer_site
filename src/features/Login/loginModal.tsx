import {
  Apple,
  Cancel,
  Circle,
  Close,
  ExpandMore,
  Facebook,
  Google,
  Twitter,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Grow,
  IconButton,
  InputAdornment,
  Modal,
  OutlinedInput,
  Typography,
} from "@mui/material";

import { useState } from "react";
import useUserStore from "@/store/user";
import { textValidator } from "@/utils/emailValidator";
import getLanguage from "@/utils/getLanguage";

const style = {
  minWidth: 375,
  maxWidth: 500,
  bgcolor: "background.paper",
  borderRadius: "1rem",
  p: "0 4rem 4rem 4rem",
  zIndex: 10000,
  color: "text.primary",
};

interface LoginModalProps {
  open: boolean;
  handleClose: () => void;
}

function LoginModal({ open, handleClose }: LoginModalProps) {
  const { setUser, lang } = useUserStore();

  const [continueButton, setContinueButton] = useState<boolean>(false);
  const [showPass, setShowPass] = useState<boolean>(false);
  const [continueStage, setContinueStage] = useState<boolean>(false);
  const [userExists, setUserExists] = useState<boolean>(false);

  const handleEmailChange = (value: string): void => {
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
    const email = emailComponent.value;

    if (!continueStage) {
      fetch("/api/user", { method: "post", body: JSON.stringify({ email }) })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.exists) {
            setUserExists(true);
          }

          setContinueStage(true);
        });
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Grow
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        in={open}
        timeout={500}
      >
        <Box sx={style}>
          <Typography
            textAlign={"center"}
            fontSize={"1.25rem"}
            fontWeight={"600"}
            pt={"1rem"}
            pb={"2rem"}
          >
            {getLanguage("register", lang)}/{getLanguage("signIn", lang)}
          </Typography>
          <Box
            overflow={"auto"}
            maxHeight="60vh"
            sx={{
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <Box
              position={"relative"}
              display={"flex"}
              alignItems={"baseline"}
              gap={"0.25rem"}
            >
              <Typography fontSize={"0.8rem"}>
                {getLanguage("location", lang)}:{" "}
              </Typography>
              <Box
                display={"flex"}
                alignItems={"center"}
                sx={{ cursor: "pointer" }}
              >
                <Typography fontSize={"0.9rem"} fontWeight={"bold"}>
                  {getLanguage("ethiopia", lang)}
                </Typography>
                <Box sx={{ color: ({ palette }) => palette.text.primary }}>
                  <ExpandMore fontSize="medium" color="inherit" />
                </Box>
              </Box>
            </Box>
            <OutlinedInput
              id="login--email"
              onChange={({ target }) => handleEmailChange(target.value)}
              size="small"
              fullWidth
              sx={{ m: "0.5rem 0" }}
              placeholder="Email"
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
                size="small"
                fullWidth
                type={showPass ? "text" : "password"}
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
                m: "0.5rem 0",
                color: "text.primary",
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
              fontSize={"0.75rem"}
              sx={{ color: "gray" }}
            >
              {getLanguage("troubleSigningIn", lang)}
            </Box>
            <Divider>
              <Typography p={"1rem 1rem"} fontSize={"0.85rem"}>
                {getLanguage("orContinueWith", lang)}
              </Typography>
            </Divider>
            <Button
              fullWidth
              color="success"
              startIcon={<Facebook />}
              endIcon={<Box width={20} />}
              size="large"
              variant={"outlined"}
              sx={{
                textTransform: "capitalize",
                borderRadius: "2rem",
                m: "0.5rem 0",
              }}
            >
              <Typography flex={1} textTransform={"lowercase"}>
                {getLanguage("facebook", lang)}
              </Typography>
            </Button>
            <Button
              color="success"
              fullWidth
              startIcon={<Google />}
              endIcon={<Box width={20} />}
              size="large"
              variant={"outlined"}
              sx={{
                textTransform: "capitalize",
                borderRadius: "2rem",
                m: "0.5rem 0",
              }}
              onClick={() => {
                setUser({
                  name: "Emily",
                  img: "/assets/images/emily.png",
                });
                handleClose();
              }}
            >
              <Typography flex={1} textTransform={"lowercase"}>
                {getLanguage("google", lang)}
              </Typography>
            </Button>
            <Button
              color="success"
              fullWidth
              startIcon={<Twitter />}
              endIcon={<Box width={20} />}
              size="large"
              variant={"outlined"}
              sx={{
                textTransform: "capitalize",
                borderRadius: "2rem",
                m: "0.5rem 0",
              }}
            >
              <Typography flex={1} textTransform={"lowercase"}>
                {getLanguage("tweeter", lang)}
              </Typography>
            </Button>
            <Button
              color="success"
              fullWidth
              startIcon={<Apple />}
              endIcon={<Box width={20} />}
              size="large"
              variant={"outlined"}
              sx={{
                textTransform: "capitalize",
                borderRadius: "2rem",
                m: "0.5rem 0",
              }}
            >
              <Typography flex={1} textTransform={"lowercase"}>
                {getLanguage("apple", lang)}
              </Typography>
            </Button>
            <Typography fontSize={"0.7rem"} mt={"0.5rem"}>
              {getLanguage("registerPolicy", lang)}
            </Typography>
          </Box>
          <IconButton
            onClick={() => handleClose()}
            size="small"
            sx={{ position: "absolute", top: "1rem", right: "1rem" }}
          >
            <Close />
          </IconButton>
        </Box>
      </Grow>
    </Modal>
  );
}

export default LoginModal;
