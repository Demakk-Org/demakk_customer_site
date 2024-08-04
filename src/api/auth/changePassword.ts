import { chosenBackendUrl } from "@/store/user";
import axios from "axios";

const handleUpdatePassword = async ({
  token,
  password,
  confirmPassword,
}: {
  token: string | null;
  password: string;
  confirmPassword: string;
}) => {
  if (!token) return;

  try {
    return axios
      .post(
        `${chosenBackendUrl}/auth/changePassword`,
        {
          password,
          confirmPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
      });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default handleUpdatePassword;
