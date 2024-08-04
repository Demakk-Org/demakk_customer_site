import { ISnackBar } from "@/store/page";
import { chosenBackendUrl, LANG } from "@/store/user";
import axios, { AxiosError } from "axios";

type HandleDeleteAddressProps = {
  token: string | null;
  setLoading: (value: boolean) => void;
  setSnackBar: (value: ISnackBar) => void;
  setShippingAddress: (token: string) => void;

  addressId: string;
  lang: LANG;
};

const handleDeleteAddress = ({
  addressId,
  lang,

  setLoading,
  setSnackBar,
  token,
  setShippingAddress,
}: HandleDeleteAddressProps) => {
  if (!token) return;

  setLoading(true);

  try {
    axios
      .delete(`${chosenBackendUrl}/address`, {
        data: { addressId, lang },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setLoading(false);
        setSnackBar({
          type: "success",
          message: "Address deleted successfully",
          open: true,
        });
        setShippingAddress(token);
      })
      .catch((err) => {
        setLoading(false);
        setSnackBar({
          type: "error",
          message: "Failed to delete address",
          open: true,
        });
        setShippingAddress(token);
        console.error(err);
      });
  } catch (error) {
    console.log(error);
    setLoading(false);
    const errors = error as Error | AxiosError;
    if (!axios.isAxiosError(errors)) {
      setSnackBar({
        type: "error",
        message: errors?.message,
        open: true,
      });
    }

    setSnackBar({
      type: "error",
      message: "Network error, please try again!",
      open: true,
    });
  }
};

export default handleDeleteAddress;
