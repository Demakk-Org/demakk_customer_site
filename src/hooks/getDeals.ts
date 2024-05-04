import { IDeal, EStatus, GetDeal } from "@/model/dealModel";
import { LANG } from "@/store/user";
import axios from "axios";

export interface GetDealProps {
  limit: number;
  page: number;
  lang: LANG;
}

const local = "http://localhost:8080/api/v1";
const server = "https://demakk-backend.vercel.app/api/v1";

const getDeals = async () => {
  try {
    const deals = await axios.get(`${server}/deal`);

    const list: GetDeal[] = deals.data.data
      .filter((deal: IDeal) => deal.status == EStatus.active)
      .map((deal: IDeal) => {
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
