import axios from "axios";
import { ISnackBar } from "@/store/page";
import { LANG, Providers, chosenBackendUrl } from "@/store/user";
import { NextRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import { t } from "i18next";

export enum AuthMethodTypes {
  logIn = "login",
  register = "register",
  mixed = "mixed",
}

type IHandleContinueButtonProps = {
  setSnackBar: (snackBar: ISnackBar) => void;
  setLoading: (value: boolean) => void;
  lang: LANG;
  setToken: (token: string) => void;
} & (
  | {
      requestFrom: "modal";
      type: AuthMethodTypes;
      handleClose: () => void;
    }
  | ({
      continueStage: boolean;
      setContinueStage: Dispatch<SetStateAction<boolean>>;
      userExists: boolean;
      setUserExists: Dispatch<SetStateAction<boolean>>;
      setContinueButton: Dispatch<SetStateAction<boolean>>;
    } & (
      | {
          requestFrom: "page";
          router: NextRouter;
        }
      | {
          requestFrom: "mixed";
          handleClose: () => void;
        }
    ))
);
interface HandleAuthProps {
  account: string;
  password: string;
  setSnackBar: (snackBar: ISnackBar) => void;
  lang: LANG;
  provider: Providers;
  setToken: (token: string) => void;
  setLoading: (value: boolean) => void;
  handleClose?: () => void;
  type: AuthMethodTypes;
  router?: NextRouter;
}

const handleAuth = ({
  account,
  password,
  lang,
  provider,

  type,
  setSnackBar,
  setToken,
  setLoading,
  handleClose,
  router,
}: HandleAuthProps) => {
  axios
    .post(
      `${chosenBackendUrl}/auth${
        type == AuthMethodTypes.logIn ? "/login" : ""
      }`,
      {
        account,
        password,
        provider,
        lang,
      }
    )
    .then((res) => {
      setSnackBar({
        type: "success",
        message: t(
          type == AuthMethodTypes.logIn
            ? "loggedInSuccessfully"
            : "userCreatedSuccessfully"
        ),
        open: true,
      });
      setToken(res.data.data);
      setLoading(false);
      handleClose && handleClose();
      router && router.back();
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
      setSnackBar({
        type: "error",
        message:
          error?.response?.data?.message || "Server error, please try again!",
        open: true,
      });
    });
};

const handleContinueButton = (props: IHandleContinueButtonProps) => {
  const account = (document.getElementById("login--email") as HTMLInputElement)
    .value;

  if (props.requestFrom !== "modal") {
    props.setLoading(true);
    if (!props.continueStage) {
      axios
        .post(`${chosenBackendUrl}/user/exists`, { phoneOrEmail: account })
        .then(({ data }) => {
          props.setUserExists(data.data.exists);
          props.setContinueStage(true);
          props.setContinueButton(false);
        })
        .catch((error) => {
          props.setUserExists(false);
          props.setContinueStage(true);
          props.setSnackBar({
            type: "error",
            message: t("userDoesNotExistRegisterFirst"),
            open: true,
          });
        })
        .finally(() => {
          props.setLoading(false);
        });
    } else {
      const password = (
        document.getElementById("login--password") as HTMLInputElement
      ).value;

      if (props.userExists) {
        props.setLoading(true);

        handleAuth({
          account,
          password,
          type: AuthMethodTypes.logIn,

          provider: Providers.password,
          lang: props.lang,
          setSnackBar: props.setSnackBar,
          setToken: props.setToken,
          setLoading: props.setLoading,
          handleClose:
            props.requestFrom == "mixed" ? props.handleClose : undefined,
          router: props.requestFrom == "page" ? props.router : undefined,
        });
      } else {
        handleAuth({
          account,
          password,
          type: AuthMethodTypes.register,

          setSnackBar: props.setSnackBar,
          lang: props.lang,
          provider: Providers.password,
          setToken: props.setToken,
          setLoading: props.setLoading,
          handleClose:
            props.requestFrom == "mixed" ? props.handleClose : undefined,
        });
      }
    }
  }

  if (props.requestFrom == "modal") {
    props.setLoading(true);

    const password = (
      document.getElementById("login--password") as HTMLInputElement
    ).value;

    if (props.type == AuthMethodTypes.logIn) {
      handleAuth({
        account,
        password,
        type: AuthMethodTypes.logIn,

        provider: Providers.password,
        lang: props.lang,
        setSnackBar: props.setSnackBar,
        setToken: props.setToken,
        setLoading: props.setLoading,
        handleClose: props.handleClose,
      });
    }

    if (props.type == "register") {
      handleAuth({
        account,
        password,
        type: AuthMethodTypes.register,

        provider: Providers.password,
        lang: props.lang,
        setSnackBar: props.setSnackBar,
        setToken: props.setToken,
        setLoading: props.setLoading,
        handleClose: props.handleClose,
      });
    }
  }
};

export default handleContinueButton;
