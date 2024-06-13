import { textValidator } from "@/utils/emailValidator";

type HandleEmailChangeProps = {
  value: string;
  setContinueStage: React.Dispatch<React.SetStateAction<boolean>>;
} & (
  | {
      requestFrom: "page";
      continueButton: boolean;
      setContinueButton: React.Dispatch<React.SetStateAction<boolean>>;
      setUserExists: React.Dispatch<React.SetStateAction<boolean>>;
      continueStage: boolean;
    }
  | {
      requestFrom: "modal";
      type: "log-in" | "register";
    }
);

export default function handleEmailChange(props: HandleEmailChangeProps) {
  const buttonState = textValidator(props.value, "email");

  if (props.requestFrom == "modal") {
    const password = (
      document.getElementById("login--password") as HTMLInputElement
    ).value;

    const passwordState = textValidator(password, "password");

    if (buttonState && passwordState) {
      props.setContinueStage(true);
    } else {
      props.setContinueStage(false);
    }
  }

  if (props.requestFrom == "page") {
    if (buttonState !== props.continueButton)
      props.setContinueButton((prev) => !prev);
    if (!buttonState && props.continueStage) {
      props.setContinueStage(false);
      props.setUserExists(false);
    }
  }
}
