import { create } from "zustand";
import getOrders from "@/api/order/getOrders";
import { GetOrder, IOrderStatus } from "@/model/orderModel";
import { LANG } from "./user";
import getOrderStatuses from "@/api/orderStatus/getOrderStatuses";
import getOrder from "@/api/order/getOrder";
import { ObjectId } from "mongoose";
import getDeletedOrders from "@/api/order/getDeletedOrders";

export const orderStatus = [
  { name: "viewAll", orderIndex: -1 },
  { name: "completed", orderIndex: 0 },
  { name: "shipped", orderIndex: 1 },
  { name: "pending", orderIndex: 2 },
  { name: "cancelled", orderIndex: 3 },
];

interface OrderStoreProps {
  order: GetOrder | null;
  orderList: GetOrder[] | null;
  orderStatus: IOrderStatus[];
  ordersTabIndex: number;
  orderStatusType: number;
  selectedOrderItem: ObjectId | null;

  setOrder: ({ id, token }: { id: string; token: string | null }) => void;
  setOrderList: (token: string | null) => void;
  setDeletedOrderList: (token: string | null) => void;
  setOrderStatus: (lang?: LANG) => void;
  setOrdersTabIndex: (value: number) => void;
  emptyOrderList: () => void;
  setOrderStatusType: (value: number) => void;
  setSelectedOrderItem: (value: ObjectId | null) => void;
}

const useOrderStore = create<OrderStoreProps>((set) => ({
  order: null,
  orderList: null,
  orderStatus: [],
  ordersTabIndex: 0,
  orderStatusType: -1,
  selectedOrderItem: null,

  setOrder: async ({ id, token }) => {
    const order = await getOrder({ id, token });
    set({ order });
  },

  setOrderList: async (token) => {
    const orderList = await getOrders(token);
    set({ orderList });
  },

  setDeletedOrderList: async (token) => {
    const orderList = await getDeletedOrders(token);
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

  setOrderStatusType: (value) => {
    set({ orderStatusType: value });
  },

  setSelectedOrderItem: (value: ObjectId | null) => {
    set({ selectedOrderItem: value });
  },
}));

export default useOrderStore;
