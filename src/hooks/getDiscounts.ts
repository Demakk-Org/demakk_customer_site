import { Discount, GetDiscount } from '@/model/discountModel';
import axios from 'axios';

const getDiscounts = async () => {
  try {
    const discounts = await axios.get("http://localhost:8080/api/v1/discount");

    const list: GetDiscount[] = discounts.data.data.map(
      (discount: Discount) => {
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
