import { auth } from "@/firebase/firebase";
import { local, server } from "@/hooks/getProducts";
import useUserStore, { LANG } from "@/store/user";
import getLanguage from "@/utils/getLanguage";
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { NextRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";

type IHandleContinueButtonProps = {
  setSnackBar: Dispatch<
    SetStateAction<{
      type: "success" | "error";
      open: boolean;
      message: string;
    }>
  >;
  setLoading: Dispatch<SetStateAction<boolean>>;
  lang: LANG;
  setRefresh: () => void;
} & (
  | {
      requestFrom: "modal";
      type: "log-in" | "register";
      handleClose: () => void;
    }
  | {
      requestFrom: "page";
      continueStage: boolean;
      router: NextRouter;
      setContinueStage: Dispatch<SetStateAction<boolean>>;
      userExists: boolean;
      setUserExists: Dispatch<SetStateAction<boolean>>;
      setContinueButton: Dispatch<SetStateAction<boolean>>;
    }
);

const handleContinueButton = (props: IHandleContinueButtonProps) => {
  const account = (document.getElementById("login--email") as HTMLInputElement)
    .value;

  if (props.requestFrom == "page") {
    props.setLoading(true);
    if (!props.continueStage) {
      axios
        .post(`${server}/user/exists`, { phoneOrEmail: account })
        .then(({ data }) => {
          console.log(data.data.exists);
          props.setUserExists(data.data.exists);
          props.setContinueStage(true);
          props.setContinueButton(false);
        })
        .catch((error) => {
          props.setUserExists(false);
          props.setContinueStage(true);
          props.setSnackBar({
            type: "error",
            message: getLanguage("userDoesNotExistRegisterFirst", props.lang),
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
        signInWithEmailAndPassword(auth, account, password)
          .then(async (userCredential) => {
            props.setSnackBar({
              type: "success",
              message: getLanguage("loggedInSuccessfully", props.lang),
              open: true,
            });
            props.setRefresh();
          })
          .catch((error) => {
            props.setSnackBar({
              type: "error",
              message: error.message,
              open: true,
            });
          })
          .finally(() => {
            props.router.push("/account");
          });
      } else {
        createUserWithEmailAndPassword(auth, account, password)
          .then(async (userCredential) => {
            console.log(userCredential);
            let { email, displayName } = userCredential.user;
            let [firstName, lastName] = displayName?.split(" ") || [];

            return axios
              .post(`${server}/auth/`, {
                account: email,
                password,
                confirmPassword: password,
                firstName,
                lastName,
                firebaseId: userCredential.user.uid,
              })
              .then((response) => {
                props.setSnackBar({
                  type: "success",
                  message: getLanguage("userCreatedSuccessfully", props.lang),
                  open: true,
                });
              });
          })
          .catch((error) => {
            props.setSnackBar({
              type: "error",
              message: error.message,
              open: true,
            });
          })
          .finally(() => {
            props.router.push("/account");
          });
      }
    }
  }

  if (props.requestFrom == "modal") {
    props.setLoading(true);

    const password = (
      document.getElementById("login--password") as HTMLInputElement
    ).value;

    if (props.type == "log-in") {
      signInWithEmailAndPassword(auth, account, password)
        .then(async (userCredential) => {
          props.setSnackBar({
            type: "success",
            message: getLanguage("loggedInSuccessfully", props.lang),
            open: true,
          });
          props.handleClose();
          props.setRefresh();
        })
        .catch((error) => {
          props.setSnackBar({
            type: "error",
            message: error.message,
            open: true,
          });
        })
        .finally(() => {
          props.setLoading(false);
        });
    }
  }
};

export default handleContinueButton;
