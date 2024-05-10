import getOrders from "@/hooks/getOrders";
import { GetOrder } from "@/model/orderModel";
import { create } from "zustand";

interface OrderStoreProps {
  order: GetOrder[];
  setOrder: () => void;
}

const useOrderStore = create<OrderStoreProps>((set) => ({
  order: [],

  setOrder: async () => {
    ///get the orders from the database and set to the store
    const orderList = await getOrders();
    set({ order: orderList });
  },
}));

export default useOrderStore;
