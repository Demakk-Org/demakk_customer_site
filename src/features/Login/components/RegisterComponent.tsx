import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import { Cancel, Circle, Visibility, VisibilityOff } from "@mui/icons-material";
import data from "@/data/library";
import getAddress from "@/utils/getAddress";
import LoginMenuItems from "./LoginMenuItems";
import handleEmailChange from "../libs/handleEmailChange";
import handleClearEmailInput from "../libs/handleClearEmailInput";
import handlePasswordChange from "../libs/handlePasswordChange";
import { useState } from "react";
import handleContinueButton, {
  AuthMethodTypes,
} from "../libs/handleContinueButton";
import { demakkFont } from "@/pages/_app";
import useTokenStore from "@/store/token";
import useUserStore from "@/store/user";
import usePageStore from "@/store/page";
import { useTranslation } from "next-i18next";

interface IRegisterComponent {
  setContinueStage: React.Dispatch<React.SetStateAction<boolean>>;
  continueStage: boolean;
  handleClose: () => void;
}

function RegisterComponent({
  setContinueStage,
  continueStage,
  handleClose,
}: IRegisterComponent) {
  const { t } = useTranslation();
  const { lang, address, setAddress } = useUserStore();
  const { setToken } = useTokenStore();
  const { setSnackBar, setLoading } = usePageStore();

  const [showPass, setShowPass] = useState(false);
  console.log(continueStage);

  return (
    <Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
      <Box
        position={"relative"}
        display={"flex"}
        alignItems={"baseline"}
        gap={"0.25rem"}
        width={1}
      >
        <FormControl variant="outlined" fullWidth sx={{ minWidth: 120 }}>
          <InputLabel
            sx={{
              p: "0.35rem 1rem",
              fontSize: "0.8rem",
              color: "text.primary",
              zIndex: 1000,
            }}
            variant={"standard"}
            id="demo-simple-select-label"
          >
            {t("yourLocation")}:
          </InputLabel>
          <Select
            name="address"
            size="small"
            color={"primary"}
            value={address}
            onChange={({ target }) => setAddress(getAddress(target.value))}
            displayEmpty
            inputProps={{
              name: "Your Location:",
              id: "uncontrolled-native",
            }}
            sx={{
              borderRadius: "0.5rem",
              pt: "0.75rem",
              bgcolor: "background.paper",
            }}
          >
            {data.region.map((address, index) => {
              return (
                <MenuItem key={index} value={getAddress(address.code)}>
                  <LoginMenuItems
                    key={index}
                    value={address.code}
                    imgSrc={address.flag}
                    lang={lang}
                  />
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      <OutlinedInput
        id="login--email"
        onChange={({ target }) =>
          handleEmailChange({
            value: target.value,
            setContinueStage,
            requestFrom: "modal",
            type: "register",
          })
        }
        size="small"
        fullWidth
        sx={{ m: "0.5rem 0", bgcolor: "background.paper" }}
        placeholder={t("email", { ns: "auth" })}
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
      <Box display={"flex"} width={1} flexDirection={"column"}>
        <OutlinedInput
          id="login--password"
          onChange={({ target }) =>
            handlePasswordChange({
              value: target.value,
              setContinueStage,
              requestForm: "modal",
              type: AuthMethodTypes.register,
            })
          }
          name="new-password"
          autoComplete={"new-password"}
          size="small"
          fullWidth
          type={showPass ? "text" : "password"}
          placeholder={t("password", { ns: "auth" })}
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
          display={"flex"}
          flexDirection={"column"}
          p={"0.5rem 1rem"}
          color={"text.secondary"}
        >
          <Box display={"flex"} gap={"0.5rem"} alignItems={"center"}>
            <Circle sx={{ fontSize: "6px" }} />
            <Typography fontSize={"0.7rem"}>
              6-20 {t("characters", { ns: "auth" })}
            </Typography>
          </Box>
          <Box display={"flex"} gap={"0.5rem"} alignItems={"center"}>
            <Circle sx={{ fontSize: "6px" }} />
            <Typography fontSize={"0.7rem"}>
              {t("containsNumberLetterOrSymbol", { ns: "auth" })}
            </Typography>
          </Box>
        </Box>
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
              type: AuthMethodTypes.register,
              setLoading,
              requestFrom: "modal",
              lang,
              setToken,
              t,
            })
          }
        >
          {t("createAccount", { ns: "auth" })}
        </Button>
      </span>
      <Box
        component={"a"}
        href="#"
        className={demakkFont.className}
        fontSize={"0.75rem"}
        sx={{ color: "text.secondary" }}
      >
        {t("troubleSigningIn", { ns: "auth" })}
      </Box>
    </Box>
  );
}

export default RegisterComponent;
