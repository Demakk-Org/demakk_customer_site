import {
  Alert,
  Box,
  Button,
  Divider,
  Grow,
  IconButton,
  InputAdornment,
  Modal,
  OutlinedInput,
  Snackbar,
  Typography,
} from "@mui/material";
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

import { useState } from "react";
import useUserStore from "@/store/user";
import handleEmailChange from "./libs/handleEmailChange";
import handleClearEmailInput from "./libs/handleClearEmailInput";
import handleContinueButton from "./libs/handleContinueButton";
import handleGoogleSignUp from "./libs/handleGoogleSignUp";
import Loading from "@/component/Loading";
import useTokenStore from "@/store/token";
import handlePasswordChange from "./libs/handlePasswordChange";
import usePageStore from "@/store/page";
import { useTranslation } from "next-i18next";

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
  const { t } = useTranslation([
    "auth",
    "common",
    "locationNames",
    "actions",
    "policies",
    "response",
  ]);
  const { lang } = useUserStore();
  const { setToken } = useTokenStore();
  const { loading, setLoading, snackBar, setSnackBar } = usePageStore();

  const [continueButton, setContinueButton] = useState<boolean>(false);
  const [showPass, setShowPass] = useState<boolean>(false);
  const [continueStage, setContinueStage] = useState<boolean>(false);
  const [userExists, setUserExists] = useState<boolean>(false);

  return (
    <>
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
              {t("register", { ns: "auth" })}/{t("signIn")}
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
                  {t("location", { ns: "common" })}:{" "}
                </Typography>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  sx={{ cursor: "pointer" }}
                >
                  <Typography fontSize={"0.9rem"} fontWeight={"bold"}>
                    {t("ethiopia", { ns: "locationNames" })}
                  </Typography>
                  <Box sx={{ color: ({ palette }) => palette.text.primary }}>
                    <ExpandMore fontSize="medium" color="inherit" />
                  </Box>
                </Box>
              </Box>
              <OutlinedInput
                id="login--email"
                onChange={({ target }) =>
                  handleEmailChange({
                    requestFrom: "page",
                    setContinueStage,
                    value: target.value,
                    setContinueButton,
                    setUserExists,
                    continueButton,
                    continueStage,
                  })
                }
                size="small"
                fullWidth
                sx={{ m: "0.5rem 0" }}
                placeholder={t("email")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                      onClick={() =>
                        handleClearEmailInput({
                          requestFrom: "page",
                          setContinueStage,
                          setContinueButton,
                          continueButton,
                          continueStage,
                          setUserExists,
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
                  size="small"
                  fullWidth
                  type={showPass ? "text" : "password"}
                  placeholder={t("password")}
                  onChange={({ target }) =>
                    handlePasswordChange({
                      value: target.value,
                      setContinueButton,
                      requestForm: "page",
                      setContinueStage,
                    })
                  }
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
                      6-20 {t("characters")}
                    </Typography>
                  </Box>
                  <Box display={"flex"} gap={"0.5rem"} alignItems={"center"}>
                    <Circle sx={{ fontSize: "6px" }} />
                    <Typography fontSize={"0.7rem"}>
                      {t("containsNumberLetterOrSymbol")}
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
                onClick={() =>
                  handleContinueButton({
                    setSnackBar,
                    setLoading,
                    lang,
                    setToken,
                    requestFrom: "mixed",
                    continueStage,
                    setContinueButton,
                    setContinueStage,
                    setUserExists,
                    userExists,
                    handleClose,
                    t,
                  })
                }
              >
                {!continueStage
                  ? t("continue", { ns: "actions" })
                  : userExists
                  ? t("signIn")
                  : t("register")}
              </Button>
              <Box
                component={"a"}
                href="#"
                fontSize={"0.75rem"}
                sx={{ color: "gray" }}
              >
                {t("troubleSigningIn")}
              </Box>
              <Divider>
                <Typography p={"1rem 1rem"} fontSize={"0.85rem"}>
                  {t("orContinueWith")}
                </Typography>
              </Divider>
              <Button
                fullWidth
                disabled
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
                  {t("facebook", { ns: "common" })}
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
                  handleGoogleSignUp({
                    setSnackBar,
                    handleClose,
                    lang,
                    setLoading,
                    setToken,
                    requestFrom: "modal",
                  });
                }}
              >
                <Typography flex={1} textTransform={"lowercase"}>
                  {t("google", { ns: "common" })}
                </Typography>
              </Button>
              <Button
                color="success"
                fullWidth
                disabled
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
                  {t("tweeter", { ns: "common" })}
                </Typography>
              </Button>

              <Button
                color="success"
                fullWidth
                disabled
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
                  {t("apple", { ns: "common" })}
                </Typography>
              </Button>
              <Typography fontSize={"0.7rem"} mt={"0.5rem"}>
                {t("registerPolicy", { ns: "policies" })}
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
    </>
  );
}

export default LoginModal;
