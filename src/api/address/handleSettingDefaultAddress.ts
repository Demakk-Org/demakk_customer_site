import { ISnackBar } from "@/store/page";
import { chosenBackendUrl } from "@/store/user";
import axios from "axios";

interface HandleSettingDefaultAddressProps {
  addressId: string;
  token: string;
  setLoading: (value: boolean) => void;
  setSnackBar: (value: ISnackBar) => void;
  setShippingAddress: (token: string) => void;
}

const handleSettingDefaultAddress = ({
  addressId,

  token,
  setLoading,
  setSnackBar,
  setShippingAddress,
}: HandleSettingDefaultAddressProps) => {
  setLoading(true);

  axios
    .put(
      `${chosenBackendUrl}/address/default`,
      { addressId },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then(() => {
      setLoading(false);
      setShippingAddress(token);
      setSnackBar({
        open: true,
        type: "success",
        message: "Default address has been set",
      });
    })
    .catch((err: any) => {
      console.log(err);
      setLoading(false);
      setSnackBar({
        open: true,
        type: "error",
        message: err.response?.data.message || "Server error, please try again",
      });
    });
};

export default handleSettingDefaultAddress;
