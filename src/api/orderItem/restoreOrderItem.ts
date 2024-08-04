import { IOrderItem } from "@/model/orderModel";
import { chosenBackendUrl } from "@/store/user";
import axios from "axios";

interface HandleOrderItemQuantityProps {
  orderItem: IOrderItem;
  token: string | null;
  setLoading: (value: boolean) => void;
  setDeletedOrderList: (token: string) => void;
}

const handleRestoreOrderItem = ({
  orderItem,
  token,
  setLoading,
  setDeletedOrderList,
}: HandleOrderItemQuantityProps) => {
  setLoading(true);

  try {
    axios
      .put(
        `${chosenBackendUrl}/orderItem/restore`,
        {
          orderItemId: orderItem._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        token && setDeletedOrderList(token);
        setLoading(false);
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

export default handleRestoreOrderItem;
