import getDiscounts from "@/hooks/getDiscounts";
import { Discount, GetDiscount } from "@/model/discountModel";
import { create } from "zustand";

interface DiscountStoreProps {
  discount: GetDiscount[];
  setDiscount: () => void;
}

const useDiscountStore = create<DiscountStoreProps>((set) => ({
  discount: [],
  setDiscount: async () => {
    ///get the discounts from the database and set to the store
    const discountList = await getDiscounts();
    set({ discount: discountList });
  },
}));

export default useDiscountStore;
