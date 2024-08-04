import {
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { useTranslation } from "next-i18next";
import { Cancel } from "@mui/icons-material";
import { Email } from "@/model/authModel";
import handleSendVerification from "@/api/auth/sendVerification";
import useTokenStore from "@/store/token";
import useUserStore from "@/store/user";
import usePageStore from "@/store/page";

function ChangeEmailModal({
  newEmail,
  setNewEmail,
  setOtpValue,
  setOtpId,
  setIsOTPVerified,
}: {
  newEmail: string;
  setNewEmail: Dispatch<SetStateAction<string>>;
  setOtpValue: Dispatch<SetStateAction<string>>;
  setOtpId: Dispatch<SetStateAction<string>>;
  setIsOTPVerified: Dispatch<SetStateAction<boolean>>;
}) {
  const { token } = useTokenStore();
  const { setSnackBar, setLoading } = usePageStore();
  const { t } = useTranslation(["modal"]);
  return (
    <>
      <Typography fontSize={"1.8rem"} fontWeight={"bold"}>
        {t("changeEmail")}
      </Typography>

      <Stack spacing={3}>
        <Typography>{t("needToVerifyYourEmail")}</Typography>

        <Stack>
          <TextField
            id="filled-basic"
            type="email"
            label={t("enterYourEmail")}
            color="demakkSecondary"
            variant="filled"
            value={newEmail}
            onChange={({ target }) => {
              setNewEmail(target.value);
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setNewEmail("")}>
                    <Cancel />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <Button
          variant="contained"
          size="large"
          sx={{ borderRadius: "2rem" }}
          disabled={!new Email(newEmail).isEmailValid()}
          onClick={() => {
            setLoading(true);
            token &&
              handleSendVerification({
                token,
                accountType: "email",
                newEmail,
              })
                .then((data) => {
                  console.log(data);
                  setOtpValue("");
                  setOtpId(data.otpInfo.id);
                  setSnackBar({
                    open: true,
                    type: "success",
                    message: t("otpIsSendToEmailAddress", {
                      ns: "response",
                    }),
                  });
                  setIsOTPVerified(false);
                  setLoading(false);
                })
                .catch((err) => {
                  setLoading(false);
                  setSnackBar({
                    open: true,
                    type: "error",
                    message: t("failedToSendVerification", {
                      ns: "response",
                    }),
                  });
                });
          }}
        >
          {t("continue", { ns: "actions" })}
        </Button>
      </Stack>
    </>
  );
}

export default ChangeEmailModal;
