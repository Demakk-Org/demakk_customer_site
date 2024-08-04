import { chosenBackendUrl } from "@/store/user";
import axios from "axios";

interface AddOrderProps {
  token: string | null;
  deliveryDate: Date;
  deliveryAddressId: string;

  setCart: ({ token }: { token: string | null }) => void;
  setLoading: (value: boolean) => void;
}

const handleAddOrder = async ({
  deliveryAddressId,
  deliveryDate,
  token,
  setCart,
  setLoading,
}: AddOrderProps) => {
  if (!token) return;
  setLoading(true);

  try {
    return axios
      .post(
        `${chosenBackendUrl}/order`,
        {
          deliveryDate,
          deliveryAddressId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setCart({ token });
        setLoading(false);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        return null;
      });
  } catch (err: any) {
    console.log(err);
    return null;
  }
};

export default handleAddOrder;
