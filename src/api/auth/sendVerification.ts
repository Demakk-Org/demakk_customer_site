import axios from "axios";
import { chosenBackendUrl } from "@/store/user";

const handleSendVerification = async ({
  token,
  newEmail,
  newPhoneNumber,
  accountType,
}: {
  token: string;
  newEmail?: string;
  newPhoneNumber?: string;
  accountType: "email" | "phoneNumber";
}) => {
  try {
    return axios
      .post(
        `${chosenBackendUrl}/auth/sendVerification`,
        { accountType, newEmail, newPhoneNumber },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        throw new Error(
          error.response?.data?.message || "Server error, please try again"
        );
      });
  } catch (error: any) {
    console.log(error);
    throw new Error(
      error.response?.data?.message || "Server error, please try again"
    );
  }
};

export default handleSendVerification;
