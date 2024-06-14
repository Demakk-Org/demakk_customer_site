import { GetOrder, IOrder } from "@/model/orderModel";
import { LANG } from "@/store/user";
import axios from "axios";

export interface GetDealProps {
  limit: number;
  page: number;
  lang: LANG;
}

const local = "http://localhost:8080/api/v1";
const server = "https://demakk-backend.vercel.app/api/v1";

const getOrders = async (token: string) => {
  try {
    const orders = await axios.get(`${local}/order`, {
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
    console.log(err.response.data);
    return [];
  }
};

export default getOrders;
