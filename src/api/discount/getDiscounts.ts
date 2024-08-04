import { IDiscount, GetDiscount } from "@/model/discountModel";
import { chosenBackendUrl } from "@/store/user";
import axios from "axios";

const getDiscounts = async () => {
  try {
    const { data } = await axios.get(`${chosenBackendUrl}/discount`);

    const list: GetDiscount[] = data.discounts.map((discount: IDiscount) => {
      discount;
      const newDiscount = new GetDiscount(discount);
      return newDiscount;
    });

    return list;
  } catch (err: any) {
    console.log(err.message);
    return [];
  }
};

export default getDiscounts;
