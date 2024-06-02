import { textValidator } from "@/utils/emailValidator";

type HandlePasswordChangeProps = {
  value: string;
  setContinueStage: React.Dispatch<React.SetStateAction<boolean>>;
} & (
  | {
      requestForm: "modal";
      type: "log-in" | "register";
    }
  | {
      requestForm: "page";
      setContinueButton: React.Dispatch<React.SetStateAction<boolean>>;
    }
);

export default function handlePasswordChange(props: HandlePasswordChangeProps) {
  const buttonState = textValidator(props.value, "password");
  const email = (document.getElementById("login--email") as HTMLInputElement)
    .value;

  const emailState = textValidator(email, "email");

  if (props.requestForm == "modal") {
    if ((buttonState || props.type) && emailState) {
      props.setContinueStage(true);
    } else {
      props.setContinueStage(false);
    }
  }

  if (props.requestForm == "page") {
    if (buttonState && emailState) {
      props.setContinueButton(true);
    }
  }
}
