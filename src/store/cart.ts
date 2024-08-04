import getCart from "@/api/cart/getCart";
import { GetCart } from "@/model/cartModel";
import { create } from "zustand";

interface CartStoreProps {
  cart: GetCart | null;
  setCart: ({ token }: { token: string | null }) => void;
}

const useCartStore = create<CartStoreProps>((set) => ({
  cart: null,
  setCart: async ({ token }) => {
    let cart = await getCart({ token });
    set({ cart });
  },
}));

export default useCartStore;
