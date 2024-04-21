import { Discount, GetDiscount } from "@/model/discountModel";
import axios from "axios";

const getDiscounts = async () => {
  const discounts = await axios.get("http://localhost:8080/api/v1/discount");

  // console.log(discounts);
  const list: GetDiscount[] = discounts.data.data.map((discount: Discount) => {
    discount;
    const newDiscount = new GetDiscount(discount);
    // console.log(newProduct);
    return newDiscount;
  });

  return list;
};

export default getDiscounts;
