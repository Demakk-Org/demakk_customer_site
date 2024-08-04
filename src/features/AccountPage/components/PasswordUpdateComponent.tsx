import handleUpdatePassword from "@/api/auth/changePassword";
import verifyOTP from "@/api/auth/verifyOTP";
import OTP from "@/component/OTPInput";
import { Email, Password } from "@/model/authModel";
import usePageStore from "@/store/page";
import useTokenStore from "@/store/token";
import useUserStore from "@/store/user";
import { Cancel, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import handleSendVerification from "@/api/auth/sendVerification";

function PasswordUpdateComponent() {
  const router = useRouter();
  const { t } = useTranslation(["modal"]);

  const [value, setValue] = useState("");
  const { user } = useUserStore();
  const [timerState, setTimerState] = useState(false);
  const { setSnackBar, setLoading } = usePageStore();
  const { token } = useTokenStore();
  const [sendOTPCount, setSendOTPCount] = useState(0);
  const [otpId, setOtpId] = useState("");
  const [isOTPVerified, setIsOTPVerified] = useState(false);

  const [newPassword, setNewPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isPasswordChanged, setIsPasswordChanged] = useState(false);

  function startCountdown(
    countdownTimeInSeconds: number,
    elementId: string
  ): void {
    let countdownInterval: any;
    setTimerState(true);

    const countdownElement = document.getElementById(elementId) as HTMLElement;
    countdownInterval = setInterval(() => {
      countdownElement.innerHTML = `${t("resendIn", {
        ns: "actions",
      })} ${countdownTimeInSeconds}s`;

      if (countdownTimeInSeconds <= 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = t("resendCode", { ns: "actions" });
        setTimerState(false);
      } else {
        countdownTimeInSeconds--;
      }
    }, 1000);
  }

  useEffect(() => {
    if (!token || isOTPVerified) return;

    handleSendVerification({ token, accountType: "email" }).then((data) => {
      setOtpId(data.otpInfo.id);
      setSnackBar({
        open: true,
        type: "success",
        message: t("otpIsSendToEmailAddress"),
      });
      startCountdown(60, "count-down");
    });
  }, [token, sendOTPCount, setSnackBar]);

  return (
    <Stack width={1} minHeight={"16rem"} p={"4rem"} alignItems={"center"}>
      <Stack
        maxWidth={"450px"}
        spacing={2}
        color={"text.primary"}
        bgcolor={"background.lighter"}
        p={4}
        borderRadius={4}
      >
        {!isOTPVerified && !isPasswordChanged ? (
          <>
            <Typography fontSize={"1.8rem"} fontWeight={"bold"}>
              {t("emailVerificationCode")}
            </Typography>

            <Stack spacing={3}>
              <Typography>
                {t("enterThe6DigitCode")}{" "}
                {new Email(
                  user?.getUser().email || "example@gmail.com"
                ).getMaskedEmail()}
              </Typography>

              <Stack alignItems={"center"}>
                <OTP
                  separator="-"
                  value={value}
                  length={6}
                  onChange={setValue}
                />
              </Stack>

              <Button
                variant="text"
                sx={{ alignSelf: "flex-start" }}
                disabled={timerState}
                onClick={() => {
                  setSendOTPCount((p) => p + 1);
                  setValue("");
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
                disabled={value.length < 6}
                onClick={() => {
                  if (value.length < 6) return;

                  verifyOTP({
                    otpID: otpId,
                    otpValue: value,
                    activation: false,
                  })
                    .then(() => {
                      setSnackBar({
                        open: true,
                        type: "success",
                        message: t("otpVerificationWasSuccessful", {
                          ns: "response",
                        }),
                      });
                      setIsOTPVerified(true);
                    })
                    .catch((error) => {
                      setSnackBar({
                        open: true,
                        type: "error",
                        message: t("otpVerificationFailed", { ns: "response" }),
                      });
                      setIsOTPVerified(false);
                    });
                }}
              >
                {t("verify", { ns: "actions" })}
              </Button>
              <Link
                href={""}
                style={{ alignSelf: "center", color: "lightblue" }}
              >
                Other ways to verify
              </Link>
            </Stack>
          </>
        ) : isOTPVerified && !isPasswordChanged ? (
          <>
            <Typography fontSize={"1.8rem"} fontWeight={"bold"}>
              {t("changePassword")}
            </Typography>

            <Stack spacing={3}>
              <Typography>{t("mustBe6To20Characters")}</Typography>

              <Stack spacing={2}>
                <TextField
                  id="filled-basic"
                  type={showNewPassword ? "text" : "password"}
                  label={t("newPassword", { ns: "auth" })}
                  color="demakkSecondary"
                  variant="filled"
                  value={newPassword}
                  onChange={({ target }) => {
                    setNewPassword(target.value);
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Stack direction={"row"}>
                          <IconButton onClick={() => setNewPassword("")}>
                            <Cancel />
                          </IconButton>
                          <IconButton
                            onClick={() => setShowNewPassword((p) => !p)}
                          >
                            {!showNewPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </Stack>
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  id="filled-basic"
                  type={showConfirmPassword ? "text" : "password"}
                  label={t("confirmPassword", { ns: "auth" })}
                  color="demakkSecondary"
                  variant="filled"
                  value={confirmPassword}
                  onChange={({ target }) => {
                    setConfirmPassword(target.value);
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Stack direction={"row"}>
                          <IconButton onClick={() => setConfirmPassword("")}>
                            <Cancel />
                          </IconButton>
                          <IconButton
                            onClick={() => setShowConfirmPassword((p) => !p)}
                          >
                            {!showConfirmPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </Stack>
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>

              <Button
                variant="contained"
                size="large"
                sx={{ borderRadius: "2rem" }}
                disabled={
                  !new Password(newPassword).isPasswordValid() ||
                  !new Password(confirmPassword).isPasswordValid() ||
                  !new Password(newPassword).testEquality(confirmPassword)
                }
                onClick={() => {
                  setLoading(true);
                  handleUpdatePassword({
                    token,
                    password: newPassword,
                    confirmPassword,
                  })
                    .then(() => {
                      setIsPasswordChanged(true);
                      setSnackBar({
                        open: true,
                        type: "success",
                        message: t("passwordUpdatedSuccessfully", {
                          ns: "response",
                        }),
                      });
                      setLoading(false);
                    })
                    .catch((err) => {
                      console.log(err);
                      setLoading(false);
                    });
                }}
              >
                {t("updatePassword", { ns: "actions" })}
              </Button>
            </Stack>
          </>
        ) : (
          <>
            <Typography fontSize={"1.8rem"} fontWeight={"bold"}>
              {t("passwordChanged")}
            </Typography>

            <Stack spacing={3}>
              <Typography>{t("yourPasswordHAsBeenUpdated")}</Typography>

              <Button
                variant="contained"
                size="large"
                sx={{ borderRadius: "2rem" }}
                onClick={() => {
                  router.push("/");
                }}
              >
                {t("continue", { ns: "actions" })}
              </Button>
            </Stack>
          </>
        )}
      </Stack>
    </Stack>
  );
}

export default PasswordUpdateComponent;
