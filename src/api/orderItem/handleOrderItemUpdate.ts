import { IOrderItem } from "@/model/orderModel";
import { chosenBackendUrl } from "@/store/user";
import axios from "axios";

interface HandleOrderItemQuantityProps {
  orderItem: IOrderItem;
  quantity?: number;
  isChecked?: boolean;
  token: string | null;
  setLoading: (value: boolean) => void;
  setCart: ({ token }: { token: string }) => void;
}

const handleOrderItemUpdate = ({
  orderItem,
  quantity,
  token,
  setLoading,
  setCart,
  isChecked,
}: HandleOrderItemQuantityProps) => {
  setLoading(true);

  try {
    axios
      .put(
        `${chosenBackendUrl}/orderItem`,
        {
          orderItemId: orderItem._id,
          quantity,
          isChecked,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setLoading(false);
        token && setCart({ token });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
};

export default handleOrderItemUpdate;
