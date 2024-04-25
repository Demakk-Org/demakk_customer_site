import { Deal, GetDeal } from "@/model/dealModel";
import { LANG } from "@/store/user";
import axios from "axios";
// import { Deal } from "../../dealsContainerStructure";

export interface GetDealProps {
  limit: number;
  page: number;
  lang: LANG;
}

const local = "http://localhost:8080/api/v1";
const server = "https://demakk-backend.vercel.app/api/v1";

const getDeals = async () => {
  const deals = await axios.get(`${local}/deal`);

  const list: GetDeal[] = deals.data.data.map((deal: Deal) => {
    const newDeal = new GetDeal(deal);
    return newDeal;
  });

  return list;
};

export default getDeals;
