import { Discount, GetDiscount } from '@/model/discountModel';
import axios from 'axios';

const getDiscounts = async () => {
  const discounts = await axios.get(
    'https://demakk-backend.vercel.app/api/v1/discount'
  );

  const list: Discount[] = discounts.data.data.data.map(
    (discount: Discount) => {
      discount;
      const newDiscount = new GetDiscount(discount);
      // console.log(newProduct);
      return newDiscount;
    }
  );

  return list;
};

export default getDiscounts;
