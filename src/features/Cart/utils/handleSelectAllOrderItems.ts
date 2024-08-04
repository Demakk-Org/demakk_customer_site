import axios from "axios";
import { IOrderItem } from "@/model/orderModel";
import { chosenBackendUrl } from "@/store/user";

type HandleSelectAllOrderItemProps = {
  orderItems: IOrderItem[];
  token: string | null;
  setLoading: (value: boolean) => void;
  setCart: ({ token }: { token: string }) => void;
};

const handleSelectAllOrderItems = ({
  orderItems,
  token,
  setCart,
  setLoading,
}: HandleSelectAllOrderItemProps) => {
  setLoading(true);

  let isChecked: boolean = true;

  orderItems.map((orderItem) => {
    if (!orderItem.isChecked) {
      isChecked = false;
    }
  });

  try {
    axios
      .put(
        `${chosenBackendUrl}/cart/orderItems/checkAll`,
        {
          isChecked: !isChecked,
          orderItems: orderItems.map((oi) => oi._id),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(({ data }) => {
        setLoading(false);
        console.log(data);
        token && setCart({ token });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  } catch (error) {
    console.log(error);
  }
};

export default handleSelectAllOrderItems;
