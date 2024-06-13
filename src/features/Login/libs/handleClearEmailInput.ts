import handleEmailChange from "./handleEmailChange";

type IHandleClearEmailInput = {
  setContinueStage: React.Dispatch<React.SetStateAction<boolean>>;
} & (
  | {
      requestFrom: "modal";
    }
  | {
      requestFrom: "page";
      continueStage: boolean;
      setUserExists: React.Dispatch<React.SetStateAction<boolean>>;
      setContinueButton: React.Dispatch<React.SetStateAction<boolean>>;
      continueButton: boolean;
    }
);

export default function handleClearEmailInput(props: IHandleClearEmailInput) {
  const component = document.getElementById("login--email") as HTMLInputElement;

  component.value = "";

  if (props.requestFrom == "modal") {
    handleEmailChange({
      value: "",
      setContinueStage: props.setContinueStage,
      requestFrom: props.requestFrom,
      type: "log-in",
    });
  }

  if (props.requestFrom == "page") {
    handleEmailChange({
      value: "",
      setContinueStage: props.setContinueStage,
      requestFrom: props.requestFrom,
      setContinueButton: props.setContinueButton,
      continueButton: props.continueButton,
      setUserExists: props.setUserExists,
      continueStage: props.continueStage,
    });
  }
}
