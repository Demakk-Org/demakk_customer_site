import axios from "axios";
import { chosenBackendUrl, LANG } from "@/store/user";
import { ObjectId } from "mongoose";

interface HandleOrderItemProps {
  orderItemId: ObjectId;
  orderId: string;
  token: string | null;
  lang?: LANG;
  setLoading: (value: boolean) => void;
  setOrderList: (token: string) => void;
}

const handleDeleteOrderItem = ({
  orderItemId,
  orderId,
  token,
  setLoading,
  setOrderList,
  lang,
}: HandleOrderItemProps) => {
  if (!token) return;

  setLoading(true);

  try {
    axios
      .delete(`${chosenBackendUrl}/order/orderItem`, {
        data: { orderItemId, lang, orderId },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setLoading(false);
        setOrderList(token);
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

export default handleDeleteOrderItem;
