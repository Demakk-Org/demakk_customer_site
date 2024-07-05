import { ISnackBar } from "@/store/page";
import { chosenBackendUrl } from "@/store/user";
import axios from "axios";

interface HandleUpdateUserProps {
  language?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;

  token: string;
  setLoading: (value: boolean) => void;
  setSnackBar?: (value: ISnackBar) => void;
}

const handleUpdateUser = ({
  language,
  firstName,
  lastName,
  email,
  phoneNumber,
  token,
  setLoading,
  setSnackBar,
}: HandleUpdateUserProps) => {
  setLoading(true);

  axios
    .put(
      `${chosenBackendUrl}/user`,
      { language, firstName, lastName, email, phoneNumber },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      setLoading(false);
      setSnackBar &&
        setSnackBar({
          open: true,
          message: response.data.message,
          type: "success",
        });
    })
    .catch((err: any) => {
      setLoading(false);
      setSnackBar &&
        setSnackBar({
          open: true,
          message:
            err.response?.data.message || "Server error, please try again!",
          type: "error",
        });
    });
};

export default handleUpdateUser;
