import { GetOrder } from "@/model/orderModel";
import { LANG, chosenBackendUrl } from "@/store/user";
import axios from "axios";

export interface GetDealProps {
  limit: number;
  page: number;
  lang: LANG;
}

const getOrder = async ({
  id,
  token,
}: {
  id: string;
  token: string | null;
}) => {
  if (!token) return null;

  try {
    const { data } = await axios.get(`${chosenBackendUrl}/order/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const newOrder: GetOrder = new GetOrder(data.order);

    return newOrder;
  } catch (err: any) {
    console.log(err);
    return null;
  }
};

export default getOrder;
