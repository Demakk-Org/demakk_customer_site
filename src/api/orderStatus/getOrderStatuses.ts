import { IOrderStatus } from "@/model/orderModel";
import { LANG, chosenBackendUrl } from "@/store/user";
import axios from "axios";

const getOrderStatuses = async (lang?: LANG) => {
  try {
    const { data } = await axios.get(`${chosenBackendUrl}/orderStatus`);

    const orderStatusesList: IOrderStatus[] = data.orderStatuses;

    return orderStatusesList;
  } catch (err: any) {
    console.log(err?.response?.data);
    return [];
  }
};

export default getOrderStatuses;
