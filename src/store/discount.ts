import { create } from "zustand";
import getDeals from "@/api/deal/getDeals";
import getDiscounts from "@/api/discount/getDiscounts";
import { GetDeal } from "@/model/dealModel";
import { GetDiscount } from "@/model/discountModel";

interface DiscountStoreProps {
  deals: GetDeal[];
  discount: GetDiscount[];
  setDiscount: () => void;
  setDeal: () => void;
}

const useDiscountStore = create<DiscountStoreProps>((set) => ({
  deals: [],
  discount: [],
  setDiscount: async () => {
    const discountList = await getDiscounts();
    set({ discount: discountList });
  },
  setDeal: async () => {
    const dealList = await getDeals();
    set({ deals: dealList });
  },
}));

export default useDiscountStore;
