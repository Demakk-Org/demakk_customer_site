import { GetOrder, IOrder } from "@/model/orderModel";
import { LANG, chosenBackendUrl } from "@/store/user";
import axios from "axios";

export interface GetDealProps {
  limit: number;
  page: number;
  lang: LANG;
}

const getDeletedOrders = async (token: string | null) => {
  if (!token) return [];

  try {
    const { data } = await axios.get(`${chosenBackendUrl}/order/deleted`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const list: GetOrder[] = data.orders.list.map((order: IOrder) => {
      const newOrder = new GetOrder(order);
      return newOrder;
    });

    return list;
  } catch (err: any) {
    console.log(err?.response?.data);
    return [];
  }
};

export default getDeletedOrders;
