import getOrders from "@/hooks/getOrders";
import { GetOrder, IOrderStatus } from "@/model/orderModel";
import { create } from "zustand";
import { LANG } from "./user";
import getOrderStatuses from "@/hooks/getOrderStatuses";
import getOrder from "@/hooks/getOrder";

interface OrderStoreProps {
  order: GetOrder | null;
  orderList: GetOrder[];
  orderStatus: IOrderStatus[];
  ordersTabIndex: number;

  setOrder: (id: string) => void;
  setOrderList: (token: string) => void;
  setOrderStatus: (lang?: LANG) => void;
  setOrdersTabIndex: (value: number) => void;
}

const useOrderStore = create<OrderStoreProps>((set) => ({
  order: null,
  orderList: [],
  orderStatus: [],
  ordersTabIndex: 0,

  setOrder: async (id: string) => {
    ///get the orders from the database and set to the store
    const order = await getOrder(id);
    set({ order });
  },

  setOrderList: async (token: string) => {
    ///get the orders from the database and set to the store
    const orderList = await getOrders(token);
    console.log(orderList, "from store");
    set({ orderList });
  },
  setOrderStatus: async (lang?: LANG) => {
    ///get the order statuses from the database and set to the store
    const orderStatusList = await getOrderStatuses(lang);
    set({ orderStatus: orderStatusList });
  },

  setOrdersTabIndex: (value: number) => {
    set({ ordersTabIndex: value });
  },
}));

export default useOrderStore;
