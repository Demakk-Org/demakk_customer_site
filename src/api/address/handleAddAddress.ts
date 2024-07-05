import { ISnackBar } from "@/store/page";
import { chosenBackendUrl } from "@/store/user";
import axios, { AxiosError } from "axios";

type HandleAddAddressProps = {
  token: string | null;
  setLoading: (value: boolean) => void;
  setSnackBar: (value: ISnackBar) => void;
  setShippingAddress: (token: string) => void;
  onClose: () => void;

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

const handleAddAddress = ({
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
}: HandleAddAddressProps) => {
  if (!token) return;

  setLoading(true);

  try {
    axios
      .post(
        `${chosenBackendUrl}/address`,
        {
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
          message: "Address added successfully",
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

export default handleAddAddress;
