import handleSendVerification from "@/api/auth/sendVerification";
import usePageStore from "@/store/page";
import useTokenStore from "@/store/token";
import useUserStore from "@/store/user";
import { Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import EmailVerificationCodeModal from "./EmailVerificationCodeModal";
import ChangeEmailModal from "./ChangeEmailModal";
import UpdateCompletionModal from "./UpdateCompletionModal";

function EmailVerificationComponent() {
  const router = useRouter();
  const { t } = useTranslation(["modal"]);
  const { setSnackBar, setLoading } = usePageStore();
  const { user, setUser } = useUserStore();
  const { token } = useTokenStore();

  const [timerState, setTimerState] = useState(false);
  const [sendOTPCount, setSendOTPCount] = useState(0);
  const [otpValue, setOtpValue] = useState("");
  const [otpId, setOtpId] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [isOTPVerified, setIsOTPVerified] = useState(false);
  const [isEmailChanged, setIsEmailChanged] = useState(false);

  function startCountdown(
    countdownTimeInSeconds: number,
    elementId: string
  ): void {
    let countdownInterval: any;
    setTimerState(true);

    const countdownElement = document.getElementById(elementId) as HTMLElement;
    countdownInterval = setInterval(() => {
      countdownElement.innerHTML = `Resend in ${countdownTimeInSeconds}s`;

      if (countdownTimeInSeconds <= 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "Resend code";
        setTimerState(false);
      } else {
        countdownTimeInSeconds--;
      }
    }, 1000);
  }

  useEffect(() => {
    if (!token || isOTPVerified) return;

    handleSendVerification({ token, accountType: "email", newEmail }).then(
      (data) => {
        console.log(data);
        setOtpId(data.otpInfo.id);
        setSnackBar({
          open: true,
          type: "success",
          message: t("otpIsSendToEmailAddress", { ns: "response" }),
        });
        startCountdown(60, "count-down");
      }
    );
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
        {isEmailChanged ? (
          <UpdateCompletionModal name={t("emailChanged")} />
        ) : !isOTPVerified ? (
          <EmailVerificationCodeModal
            newEmail={newEmail}
            otpValue={otpValue}
            setOtpValue={setOtpValue}
            otpId={otpId}
            setIsEmailChanged={setIsEmailChanged}
            setIsOTPVerified={setIsOTPVerified}
            setSendOTPCount={setSendOTPCount}
            timerState={timerState}
          />
        ) : (
          <ChangeEmailModal
            setOtpId={setOtpId}
            setIsOTPVerified={setIsOTPVerified}
            setNewEmail={setNewEmail}
            newEmail={newEmail}
            setOtpValue={setOtpValue}
          />
        )}
      </Stack>
    </Stack>
  );
}

export default EmailVerificationComponent;
