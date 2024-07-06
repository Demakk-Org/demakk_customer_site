import axios from "axios";
import { IOrderItem } from "@/model/orderModel";
import { chosenBackendUrl } from "@/store/user";

const handleLikeProduct = ({
  orderItem,
  token,
  setUser,
}: {
  orderItem: IOrderItem;
  token: string | null;
  setUser: (token?: string) => void;
}) => {
  if (!token) return;

  try {
    axios
      .post(
        `${chosenBackendUrl}/product/fav`,
        {
          productId: orderItem.productVariant.product._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        console.log("You liked this product");
        token && setUser(token);
      });
  } catch (error) {
    console.log(error);
  }
};

export default handleLikeProduct;
