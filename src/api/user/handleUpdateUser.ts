import axios from "axios";
import { ISnackBar } from "@/store/page";
import { chosenBackendUrl } from "@/store/user";

interface HandleUpdateUserProps {
  language?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  gender?: string;
  city?: string;
  country?: string;
  streetAddress?: string;
  zipCode?: string;
  verify?: boolean;

  token: string;
  setLoading: (value: boolean) => void;
  setSnackBar?: (value: ISnackBar) => void;
  setUser: (token?: string) => void;
  setEditProfile?: () => void;
}

const handleUpdateUser = async ({
  language,
  firstName,
  lastName,
  email,
  phoneNumber,
  gender,
  city,
  country,
  streetAddress,
  zipCode,
  verify,

  token,
  setLoading,
  setSnackBar,
  setUser,
  setEditProfile,
}: HandleUpdateUserProps) => {
  setLoading(true);

  return axios
    .put(
      `${chosenBackendUrl}/user`,
      {
        language,
        firstName,
        lastName,
        email,
        phoneNumber,
        verify,
        gender,
        address: { city, country, streetAddress, zipCode },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then(({ data }) => {
      setLoading(false);
      token && setUser(token);
      setEditProfile && setEditProfile();
      return data;
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
      throw new Error(
        err.response?.data.message || "Server error, please try again!"
      );
    });
};

export default handleUpdateUser;
