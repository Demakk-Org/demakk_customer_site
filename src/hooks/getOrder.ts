import { GetOrder } from "@/model/orderModel";
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

const getOrder = async (id: string) => {
  try {
    const order = await axios.get(`${local}/order/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(order.data.data, "from hook");

    const newOrder: GetOrder = new GetOrder(order.data.data);
    console.log(newOrder, "from hook");

    return newOrder;
  } catch (err: any) {
    console.log(err);
    return null;
  }
};

export default getOrder;
