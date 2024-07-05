import { GetOrder, IOrder } from "@/model/orderModel";
import { LANG, chosenBackendUrl } from "@/store/user";
import axios from "axios";

export interface GetDealProps {
  limit: number;
  page: number;
  lang: LANG;
}

const getOrders = async (token: string | null) => {
  if (!token) return [];

  try {
    const orders = await axios.get(`${chosenBackendUrl}/order`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const list: GetOrder[] = orders.data.data.data.map((order: IOrder) => {
      const newOrder = new GetOrder(order);
      return newOrder;
    });

    return list;
  } catch (err: any) {
    console.log(err?.response?.data);
    return [];
  }
};

export default getOrders;
