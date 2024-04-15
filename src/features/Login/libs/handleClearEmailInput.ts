import React from "react";
import handleEmailChange from "./handleEmailChange";

interface HandleClearEmailInputProps {
  setContinueStage: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function handleClearEmailInput({
  setContinueStage,
}: HandleClearEmailInputProps) {
  const component = document.getElementById("login--email") as HTMLInputElement;

  component.value = "";
  handleEmailChange({ value: "", setContinueStage });
}
