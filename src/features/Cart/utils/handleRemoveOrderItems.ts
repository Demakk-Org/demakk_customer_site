import axios from "axios";
import { IOrderItem } from "@/model/orderModel";
import { chosenBackendUrl } from "@/store/user";

const handleRemoveOrderItems = ({
  selectedOrderItems,
  token,
  setLoading,
  setCart,
  single,
}: {
  selectedOrderItems: IOrderItem[];
  token: string | null;
  setLoading: (loading: boolean) => void;
  setCart: ({ token }: { token: string }) => void;
  single?: boolean;
}) => {
  setLoading(true);

  let selectedOrderItemIds: string[] = selectedOrderItems.map((oi) =>
    oi._id.toString()
  );

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
        setLoading(false);
        console.log(response);
        token && setCart({ token });
      });
  } catch (error) {
    console.log(error);
  }
};

export default handleRemoveOrderItems;
