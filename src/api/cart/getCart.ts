import { GetCart } from "@/model/cartModel";
import { chosenBackendUrl } from "@/store/user";
import axios from "axios";

const getCart = async ({ token }: { token: string | null }) => {
  if (!token) return null;

  try {
    const response = await axios.get(`${chosenBackendUrl}/cart`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    let cart = new GetCart(response.data.cart);

    return cart;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getCart;
