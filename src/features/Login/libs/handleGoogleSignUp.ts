import axios from "axios";
import { LANG, chosenBackendUrl } from "@/store/user";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../../firebase/firebase";
import { NextRouter } from "next/router";
import { ISnackBar } from "@/store/page";
import { t } from "i18next";

type IHandleGoogleSignUp = {
  setSnackBar: (snackBar: ISnackBar) => void;
  lang: LANG;
  setLoading: (value: boolean) => void;
  setToken: (token: string) => void;
} & (
  | {
      requestFrom: "page";
      router: NextRouter;
    }
  | {
      requestFrom: "modal";
      handleClose: () => void;
    }
  | {
      requestFrom: "mixed";
      handleClose: () => void;
    }
);

const handleGoogleSignUp = (props: IHandleGoogleSignUp) => {
  props.setLoading(true);

  signInWithPopup(auth, googleProvider)
    .then(async (userCredential) => {
      const { email, displayName } = userCredential.user;
      let [firstName, lastName] = displayName?.split(" ") || [];

      axios
        .post(`${chosenBackendUrl}/user/exists`, {
          phoneOrEmail: email,
          lang: props.lang,
        })
        .then((response) => {
          if (!response.data.data.exists) {
            axios
              .post(`${chosenBackendUrl}/auth`, {
                account: email,
                firstName,
                lastName,
                provider: "google",
                lang: props.lang,
              })
              .then((response) => {
                props.setSnackBar({
                  type: "success",
                  message: t("userCreatedSuccessfully"),
                  open: true,
                });
                props.requestFrom !== "page" && props.handleClose();
                props.setToken(response.data.data);
                props.requestFrom == "page" && props.router.back();
              })
              .catch((error) => console.log(error));
          } else {
            axios
              .post(`${chosenBackendUrl}/auth/login`, {
                account: email,
                provider: "google",
                lang: props.lang,
              })
              .then((response) => {
                props.setSnackBar({
                  type: "success",
                  message: t("loggedInSuccessfully"),
                  open: true,
                });
                props.requestFrom !== "page" && props.handleClose();
                props.setToken(response.data.data);
                props.requestFrom == "page" && props.router.back();
              })
              .catch((error) => {
                props.setSnackBar({
                  type: "error",
                  message: error?.response?.data?.message || t("serverError"),
                  open: true,
                });
              });
          }
        })
        .catch((error) => console.log(error));
    })
    .catch((error) => {
      const errorMessage = error.message;

      props.setSnackBar({
        type: "error",
        open: true,
        message: errorMessage,
      });
    })
    .finally(() => {
      props.setLoading(false);
    });
};

export default handleGoogleSignUp;
