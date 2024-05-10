import { GetOrder, IOrder } from "@/model/orderModel";
import { LANG } from "@/store/user";
import axios from "axios";

export interface GetDealProps {
  limit: number;
  page: number;
  lang: LANG;
}

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcm9tIjoiRGVtYWtrIFByaW50aW5nIEVudGVycHJpc2UiLCJ1aWQiOiI2NWE2ZjMzMDZiNDhkODhiZGEyZTU3MjAiLCJuYW1lIjoiVG9sZXNzYSIsImVtYWlsIjoidG9sZXNzYWRlcmVzc3VAZ21haWwuY29tIiwiaWF0IjoxNzE1MTY5NDMxNDc2LCJsYW5nIjoiYW0iLCJleHAiOjE3MTc3NjE0MzE0NzZ9.Rixj1WKeojyKeKX_txAo9K7FaqJBjKjxpV7Xww1yRo4";

const token1 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcm9tIjoiRGVtYWtrIFByaW50aW5nIEVudGVycHJpc2UiLCJ1aWQiOiI2NWFhNGNiN2JjMWRlOTg5YjQ1ZWFlYTYiLCJuYW1lIjoiTWVsa2EiLCJlbWFpbCI6Im1lbGthdG9sZTFAZ21haWwuY29tIiwiaWF0IjoxNzE1Mzc3MjI0MDQzLCJsYW5nIjoiYW0iLCJleHAiOjE3MTc5NjkyMjQwNDN9.DBsca9Ag4X4elSfKfPlNyCrnJXLYCVS9dmCx4QyPhAk";
const local = "http://localhost:8080/api/v1";
const server = "https://demakk-backend.vercel.app/api/v1";

const getOrders = async () => {
  try {
    const orders = await axios.get(`${local}/order`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(orders.data.data.data, "from hook");

    const list: GetOrder[] = orders.data.data.data.map((order: IOrder) => {
      const newOrder = new GetOrder(order);
      return newOrder;
    });

    return list;
  } catch (err: any) {
    console.log(err.message);
    return [];
  }
};

export default getOrders;
