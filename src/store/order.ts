import { create } from "zustand";
import getOrders from "@/api/order/getOrders";
import { GetOrder, IOrderStatus } from "@/model/orderModel";
import { LANG } from "./user";
import getOrderStatuses from "@/api/orderStatus/getOrderStatuses";
import getOrder from "@/api/order/getOrder";

interface OrderStoreProps {
  order: GetOrder | null;
  orderList: GetOrder[] | null;
  orderStatus: IOrderStatus[];
  ordersTabIndex: number;

  setOrder: ({ id, token }: { id: string; token: string | null }) => void;
  setOrderList: (token: string | null) => void;
  setOrderStatus: (lang?: LANG) => void;
  setOrdersTabIndex: (value: number) => void;
  emptyOrderList: () => void;
}

const useOrderStore = create<OrderStoreProps>((set) => ({
  order: null,
  orderList: null,
  orderStatus: [],
  ordersTabIndex: 0,

  setOrder: async ({ id, token }) => {

    const order = await getOrder({ id, token });
    set({ order });
  },

  setOrderList: async (token) => {
    const orderList = await getOrders(token);
    console.log(orderList);
    set({ orderList });
  },
  emptyOrderList: () => {
    set({ orderList: null });
  },
  setOrderStatus: async (lang?: LANG) => {
    const orderStatusList = await getOrderStatuses(lang);
    set({ orderStatus: orderStatusList });
  },

  setOrdersTabIndex: (value: number) => {
    set({ ordersTabIndex: value });
  },
}));

export default useOrderStore;
