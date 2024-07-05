import { ISnackBar } from "@/store/page";
import { chosenBackendUrl } from "@/store/user";
import axios, { AxiosError } from "axios";

type HandleUpdateAddressProps = {
  token: string | null;
  setLoading: (value: boolean) => void;
  setSnackBar: (value: ISnackBar) => void;
  setShippingAddress: (token: string) => void;
  onClose: () => void;

  addressId: string;
  address: string;
  contactName: string;
  phoneNumber: string;
  country: string;
  region: string;
  city: string;
  subCity: string;
  postalCode: string;
  asDefault: boolean;
};

const handleUpdateAddress = ({
  addressId,
  address,
  contactName,
  phoneNumber,
  country,
  region,
  city,
  subCity,
  postalCode,
  asDefault,

  setLoading,
  setSnackBar,
  token,
  setShippingAddress,
  onClose,
}: HandleUpdateAddressProps) => {
  if (!token) return;
  setLoading(true);

  try {
    axios
      .put(
        `${chosenBackendUrl}/address`,
        {
          addressId,
          contactName,
          phoneNumber,
          country,
          region,
          city,
          subCity,
          postalCode,
          asDefault,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(({ data }) => {
        console.log(data);
        setLoading(false);
        setSnackBar({
          type: "success",
          message: "Address updated successfully",
          open: true,
        });
        setShippingAddress(token);
        onClose();
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
      message: "Server error, please try again!",
      open: true,
    });
  }
};

export default handleUpdateAddress;
