import axios from "axios";
import { IOrderItem } from "@/model/orderModel";
import { chosenBackendUrl } from "@/store/user";

const handleLikeProduct = async ({
  productId,
  orderItem,
  token,
  setUser,
}: {
  productId?: string;
  orderItem?: IOrderItem;
  token: string | null;
  setUser: (token?: string) => void;
}) => {
  if (!token) return;

  try {
    return axios
      .post(
        `${chosenBackendUrl}/product/fav`,
        {
          productId: orderItem?.productVariant.product._id || productId,
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
        return;
      });
  } catch (error) {
    console.log(error);
    return;
  }
};

export default handleLikeProduct;
