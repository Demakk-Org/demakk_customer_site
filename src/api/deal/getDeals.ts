import { IDeal, GetDeal } from "@/model/dealModel";
import { LANG, chosenBackendUrl } from "@/store/user";
import axios from "axios";

export interface GetDealProps {
  limit: number;
  page: number;
  lang: LANG;
}

const getDeals = async () => {
  try {
    const deals = await axios.get(`${chosenBackendUrl}/deal`);

    const list: GetDeal[] = deals.data.data.map((deal: IDeal) => {
      const newDeal = new GetDeal(deal);
      return newDeal;
    });

    return list;
  } catch (err: any) {
    console.log(err.message);
    return [];
  }
};

export default getDeals;
