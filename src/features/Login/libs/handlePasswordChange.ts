import { textValidator } from "@/utils/emailValidator";
import { AuthMethodTypes } from "./handleContinueButton";

type HandlePasswordChangeProps = {
  value: string;
  setContinueStage: React.Dispatch<React.SetStateAction<boolean>>;
} & (
  | {
      requestForm: "modal";
      type: AuthMethodTypes;
    }
  | {
      requestForm: "page";
      setContinueButton: React.Dispatch<React.SetStateAction<boolean>>;
    }
);

export default function handlePasswordChange(props: HandlePasswordChangeProps) {
  const isPasswordValidated = textValidator(props.value, "password");
  const email = (document.getElementById("login--email") as HTMLInputElement)
    .value;

  const isEmailValidated = textValidator(email, "email");
  console.log(
    textValidator("r3CdPcZ6b4Ev2gf-", "password"),
    isPasswordValidated
  );

  if (props.requestForm == "modal") {
    if (isPasswordValidated && isEmailValidated) {
      props.setContinueStage(true);
    } else {
      props.setContinueStage(false);
    }
  }

  if (props.requestForm == "page") {
    if (isPasswordValidated && isEmailValidated) {
      props.setContinueButton(true);
    }
  }
}
