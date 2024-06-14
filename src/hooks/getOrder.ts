import { GetOrder } from "@/model/orderModel";
import { LANG } from "@/store/user";
import axios from "axios";

export interface GetDealProps {
  limit: number;
  page: number;
  lang: LANG;
}

const local = "http://localhost:8080/api/v1";
const server = "https://demakk-backend.vercel.app/api/v1";

const getOrder = async ({ id, token }: { id: string; token: string }) => {
  try {
    const order = await axios.get(`${server}/order/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const newOrder: GetOrder = new GetOrder(order.data.data);

    return newOrder;
  } catch (err: any) {
    console.log(err);
    return null;
  }
};

export default getOrder;
