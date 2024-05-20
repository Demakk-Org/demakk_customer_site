import { IOrderStatus } from "@/model/orderModel";
import { LANG } from "@/store/user";
import axios from "axios";

const local = "http://localhost:8080/api/v1";
const server = "https://demakk-backend.vercel.app/api/v1";

const getOrderStatuses = async (lang?: LANG) => {
  try {
    const orderStatuses = await axios.get(`${local}/orderStatus`, {
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    });

    const orderStatusesList: IOrderStatus[] = orderStatuses.data.data;

    return orderStatusesList;
  } catch (err: any) {
    console.log(err.response.data);
    return [];
  }
};

export default getOrderStatuses;
