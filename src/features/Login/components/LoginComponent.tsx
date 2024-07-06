import { useState } from "react";
import { Cancel, Visibility, VisibilityOff } from "@mui/icons-material";
import { demakkFont } from "@/pages/_app";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";

import handleEmailChange from "../libs/handleEmailChange";
import handleClearEmailInput from "../libs/handleClearEmailInput";
import handlePasswordChange from "../libs/handlePasswordChange";
import handleContinueButton, {
  AuthMethodTypes,
} from "../libs/handleContinueButton";

import useUserStore from "@/store/user";
import useTokenStore from "@/store/token";
import usePageStore from "@/store/page";
import { t } from "i18next";

interface ILoginComponent {
  setContinueStage: React.Dispatch<React.SetStateAction<boolean>>;
  continueStage: boolean;
  handleClose: () => void;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginComponent = ({
  setContinueStage,
  continueStage,
  handleClose,
  setLoading,
}: ILoginComponent) => {
  const { lang, setRefresh } = useUserStore();
  const { setToken } = useTokenStore();
  const { setSnackBar } = usePageStore();

  const [showPass, setShowPass] = useState(false);
  return (
    <Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
      <OutlinedInput
        id="login--email"
        onChange={({ target }) =>
          handleEmailChange({
            value: target.value,
            requestFrom: "modal",
            type: "log-in",
            setContinueStage,
          })
        }
        size={"small"}
        fullWidth
        placeholder={t("email")}
        sx={{ bgcolor: "background.paper" }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              edge="end"
              onClick={() =>
                handleClearEmailInput({
                  setContinueStage,
                  requestFrom: "modal",
                })
              }
            >
              <Cancel fontSize="small" />
            </IconButton>
          </InputAdornment>
        }
      />
      <OutlinedInput
        id="login--password"
        size="small"
        fullWidth
        onChange={({ target }) =>
          handlePasswordChange({
            value: target.value,
            type: AuthMethodTypes.logIn,
            setContinueStage,
            requestForm: "modal",
          })
        }
        type={showPass ? "text" : "password"}
        placeholder={t("password")}
        sx={{ bgcolor: "background.paper" }}
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
      <Box
        component={"a"}
        href="#"
        className={demakkFont.className}
        fontSize={"0.75rem"}
        sx={{ color: "primary.dark" }}
      >
        {t("forgotPassword")}
      </Box>
      <span
        style={{
          cursor: !continueStage ? "not-allowed" : "pointer",
        }}
      >
        <Button
          fullWidth
          size="large"
          variant={"contained"}
          disabled={!continueStage}
          sx={{
            textTransform: "capitalize",
            borderRadius: "2rem",
            m: "0.5rem 0",
            bgcolor: "primary.light",
          }}
          onClick={() =>
            handleContinueButton({
              setSnackBar,
              handleClose,
              type: AuthMethodTypes.logIn,
              setLoading,
              requestFrom: "modal",
              lang,
              setToken,
            })
          }
        >
          {t("signIn")}
        </Button>
      </span>
    </Box>
  );
};

export default LoginComponent;
