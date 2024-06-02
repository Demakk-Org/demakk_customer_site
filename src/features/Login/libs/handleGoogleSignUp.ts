import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../../firebase/firebase";
import { Dispatch, SetStateAction } from "react";
import axios from "axios";
import { local, server } from "@/hooks/getProducts";
import { LANG } from "@/store/user";
import getLanguage from "@/utils/getLanguage";

interface IHandleGoogleSignUp {
  setSnackBar: Dispatch<
    SetStateAction<{
      type: "success" | "error";
      open: boolean;
      message: string;
    }>
  >;
  handleClose: () => void;
  lang: LANG;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const handleGoogleSignUp = ({
  setSnackBar,
  handleClose,
  lang,
  setLoading,
}: IHandleGoogleSignUp) => {
  setLoading(true);

  signInWithPopup(auth, googleProvider)
    .then(async (userCredential) => {
      let token = await userCredential.user.getIdToken(true);

      const { uid, email, displayName } = userCredential.user;
      let [firstName, lastName] = displayName?.split(" ") || [];

      axios
        .post(`${server}/user/exists`, {
          phoneOrEmail: email,
          lang,
        })
        .then((response) => {
          if (!response.data.data.exists) {
            axios
              .post(`${server}/auth`, {
                account: email,
                firstName,
                lastName,
                firebaseId: uid,
                lang,
              })
              .then((response) => {
                setSnackBar({
                  type: "success",
                  message: getLanguage("userCreatedSuccessfully", lang),
                  open: true,
                });
                handleClose();
              })
              .catch((error) => console.log(error));
          } else {
            setSnackBar({
              type: "success",
              message: getLanguage("loggedInSuccessfully", lang),
              open: true,
            });
            handleClose();
          }
        })
        .catch((error) => console.log(error));
    })
    .catch((error) => {
      const errorMessage = error.message;

      setSnackBar({
        type: "error",
        open: true,
        message: errorMessage,
      });
    })
    .finally(() => {
      setLoading(false);
    });
};

export default handleGoogleSignUp;
