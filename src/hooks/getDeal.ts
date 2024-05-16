import { IDeal, GetDeal } from "@/model/dealModel";
import { LANG } from "@/store/user";
import axios from "axios";

export interface GetDealProps {
  limit: number;
  page: number;
  lang: LANG;
}

const local = "http://localhost:8080/api/v1";
const server = "https://demakk-backend.vercel.app/api/v1";

const getDeal = async (id: string) => {
  const deal = await axios.get(`${local}/deal/${id}`);
  console.log(deal.data);
  return deal.data;
};

export default getDeal;
