import { IDeal, GetDeal } from "@/model/dealModel";
import { LANG, chosenBackendUrl } from "@/store/user";
import axios from "axios";

export interface GetDealProps {
  limit: number;
  page: number;
  lang: LANG;
}

const getDeal = async (id: string) => {
  try {
    const deal = await axios.get(`${chosenBackendUrl}/deal/${id}`);
    return deal.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getDeal;
