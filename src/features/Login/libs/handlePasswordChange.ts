import { textValidator } from "@/utils/emailValidator";

interface HandlePasswordChangeProps {
  value: string;
  type?: string;
  setContinueStage: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function handlePasswordChange({
  value,
  type,
  setContinueStage,
}: HandlePasswordChangeProps) {
  const buttonState = textValidator(value, "password");
  const email = (document.getElementById("login--email") as HTMLInputElement)
    .value;

  const emailState = textValidator(email, "email");

  if ((buttonState || type) && emailState) {
    setContinueStage(true);
  } else {
    setContinueStage(false);
  }
}
