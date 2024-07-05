import { GetCart } from "@/model/cartModel";
import { IOrderItem } from "@/model/orderModel";

const getSelectedOrderItems = ({ cart }: { cart: GetCart | null }) => {
  let selectedOrderItems: IOrderItem[] =
    cart?.getCart().orderItems.filter((oi) => oi.isChecked === true) || [];

  return selectedOrderItems;
};

export default getSelectedOrderItems;
