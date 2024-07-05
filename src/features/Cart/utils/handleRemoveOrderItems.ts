import axios from "axios";
import { IOrderItem } from "@/model/orderModel";
import { chosenBackendUrl } from "@/store/user";

const handleRemoveOrderItems = ({
  selectedOrderItems,
  token,
  setLoading,
  setCart,
}: {
  selectedOrderItems: IOrderItem[];
  token: string | null;
  setLoading: (loading: boolean) => void;
  setCart: ({ token }: { token: string }) => void;
}) => {
  setLoading(true);
  const selectedOrderItemIds = selectedOrderItems
    .filter((oi) => oi.isChecked == true)
    .map((oi) => oi._id);

  try {
    axios
      .delete(`${chosenBackendUrl}/cart/orderItems`, {
        data: {
          orderItems: selectedOrderItemIds,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        token && setCart({ token });
      });
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};

export default handleRemoveOrderItems;
