import { IDiscount, GetDiscount } from "@/model/discountModel";
import axios from "axios";

const local = "http://localhost:8080/api/v1";
const server = "https://demakk-backend.vercel.app/api/v1";

const getDiscounts = async () => {
  try {
    const discounts = await axios.get(`${server}/discount`);

    const list: GetDiscount[] = discounts.data.data.map(
      (discount: IDiscount) => {
        discount;
        const newDiscount = new GetDiscount(discount);
        return newDiscount;
      }
    );

    return list;
  } catch (err: any) {
    console.log(err.message);
    return [];
  }
};

export default getDiscounts;
