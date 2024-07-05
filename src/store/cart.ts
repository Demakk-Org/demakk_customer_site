import getCart from "@/api/cart/getCart";
import { GetCart } from "@/model/cartModel";
import { create } from "zustand";

interface CartStoreProps {
  cart: GetCart | null;
  setCart: ({ token }: { token: string | null }) => void;

  openModal: null | {
    open: true;
    title: string;
    description: string;
    callBackFn: Function;
  };
  setOpenModal: (
    value: null | {
      open: true;
      title: string;
      description: string;
      callBackFn: Function;
    }
  ) => void;
}

const useCartStore = create<CartStoreProps>((set) => ({
  cart: null,
  setCart: async ({ token }) => {
    let cart = await getCart({ token });
    set({ cart });
  },

  openModal: null,
  setOpenModal: (value) => {
    set({ openModal: value });
  },
}));

export default useCartStore;
