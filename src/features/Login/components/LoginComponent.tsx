import useUserStore from "@/store/user";
import getLanguage from "@/utils/getLanguage";
import { Cancel, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import React, { useState } from "react";
import handleEmailChange from "../libs/handleEmailChange";
import handleClearEmailInput from "../libs/handleClearEmailInput";
import handlePasswordChange from "../libs/handlePasswordChange";
import { demakkFont } from "@/pages/_app";
import handleContinueButton from "../libs/handleContinueButton";

interface ILoginComponent {
  setContinueStage: React.Dispatch<React.SetStateAction<boolean>>;
  continueStage: boolean;
  setSnackBar: React.Dispatch<
    React.SetStateAction<{
      type: "success" | "error";
      open: boolean;
      message: string;
    }>
  >;
  handleClose: () => void;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginComponent = ({
  setContinueStage,
  continueStage,
  setSnackBar,
  handleClose,
  setLoading,
}: ILoginComponent) => {
  const { lang, setRefresh } = useUserStore();
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
        placeholder={getLanguage("email", lang)}
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
            type: "log-in",
            setContinueStage,
            requestForm: "modal",
          })
        }
        type={showPass ? "text" : "password"}
        placeholder={getLanguage("password", lang)}
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
        {getLanguage("forgotPassword", lang)}
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
              type: "log-in",
              setLoading,
              requestFrom: "modal",
              lang,
              setRefresh: () => setRefresh(),
            })
          }
        >
          {getLanguage("signIn", lang)}
        </Button>
      </span>
    </Box>
  );
};

export default LoginComponent;
