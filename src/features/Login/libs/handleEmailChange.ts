import { textValidator } from "@/utils/emailValidator";

interface HandleEmailChangeProps {
  value: string;
  type?: string;
  setContinueStage: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function handleEmailChange({
  value,
  type,
  setContinueStage,
}: HandleEmailChangeProps) {
  const buttonState = textValidator(value, "email");
  const password = (
    document.getElementById("login--password") as HTMLInputElement
  ).value;

  const passwordState = textValidator(password, "password");

  if (buttonState && (passwordState || type)) {
    setContinueStage(true);
  } else {
    setContinueStage(false);
  }
}
