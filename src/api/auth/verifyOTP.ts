import { chosenBackendUrl } from "@/store/user";
import axios from "axios";

const verifyOTP = async ({
  token,
  otpID,
  otpValue,
  activation,
}: {
  token?: string;
  otpID: string;
  otpValue: string;
  activation: boolean;
}) => {
  try {
    return axios
      .post(`${chosenBackendUrl}/auth/verifyOTP`, {
        otpID,
        otpValue,
        activation: false,
      })
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    console.log(error);
    throw new Error("Error occurred while verifying");
  }
};

export default verifyOTP;
