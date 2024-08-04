import verifyOTP from "@/api/auth/verifyOTP";
import handleUpdateUser from "@/api/user/handleUpdateUser";
import OTP from "@/component/OTPInput";
import { Email } from "@/model/authModel";
import usePageStore from "@/store/page";
import useTokenStore from "@/store/token";
import useUserStore from "@/store/user";
import { Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import { useTranslation } from "next-i18next";

function EmailVerificationCodeModal({
  newEmail,
  otpValue,
  setOtpValue,
  timerState,
  otpId,
  setSendOTPCount,
  setIsOTPVerified,
  setIsEmailChanged,
}: {
  otpId: string;
  newEmail: string;
  otpValue: string;
  timerState: boolean;
  setIsEmailChanged: Dispatch<SetStateAction<boolean>>;
  setIsOTPVerified: Dispatch<SetStateAction<boolean>>;
  setSendOTPCount: Dispatch<SetStateAction<number>>;
  setOtpValue: Dispatch<SetStateAction<string>>;
}) {
  const { token } = useTokenStore();
  const { t } = useTranslation(["modal"]);
  const { user, setUser } = useUserStore();
  const { setLoading, setSnackBar } = usePageStore();

  return (
    <>
      <Typography fontSize={"1.8rem"} fontWeight={"bold"}>
        {t("emailVerificationCode")}
      </Typography>

      <Stack spacing={3}>
        <Typography>
          {t("enterThe6DigitCode")}{" "}
          {newEmail
            ? newEmail
            : new Email(
                user?.getUser().email || "example@gmail.com"
              ).getMaskedEmail()}
        </Typography>

        <Stack alignItems={"center"}>
          <OTP
            separator="-"
            value={otpValue}
            length={6}
            onChange={setOtpValue}
          />
        </Stack>

        <Button
          variant="text"
          sx={{ alignSelf: "flex-start" }}
          disabled={timerState}
          onClick={() => {
            setSendOTPCount((p) => p + 1);
            setOtpValue("");
          }}
        >
          <Typography
            id="count-down"
            sx={{ textTransform: "none", pl: "0.5rem" }}
          >
            {t("resendCode", { ns: "actions" })}
          </Typography>
        </Button>

        <Button
          variant="contained"
          size="large"
          sx={{ borderRadius: "2rem" }}
          disabled={otpValue.length < 6}
          onClick={() => {
            if (otpValue.length < 6) return;

            verifyOTP({
              otpID: otpId,
              otpValue: otpValue,
              activation: false,
            })
              .then(() => {
                !newEmail &&
                  setSnackBar({
                    open: true,
                    type: "success",
                    message: t("otpVerificationWasSuccessful", {
                      ns: "response",
                    }),
                  });
                setIsOTPVerified(true);
                token &&
                  newEmail &&
                  handleUpdateUser({
                    email: newEmail,
                    verify: true,
                    token,
                    setUser,
                    setLoading,
                    setSnackBar,
                  })
                    .then((data) => {
                      console.log(data);
                      setIsEmailChanged(true);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
              })
              .catch((error) => {
                setSnackBar({
                  open: true,
                  type: "error",
                  message: t("otpVerificationFailed"),
                });
                setIsOTPVerified(false);
              });
          }}
        >
          {t("verify", { ns: "actions" })}
        </Button>
        <Link href={""} style={{ alignSelf: "center", color: "lightblue" }}>
          {t("otherWaysToVerify")}
        </Link>
      </Stack>
    </>
  );
}

export default EmailVerificationCodeModal;
