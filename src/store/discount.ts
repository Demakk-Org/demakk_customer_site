import getDeals from "@/hooks/getDeals";
import getDiscounts from "@/hooks/getDiscounts";
import { GetDeal } from "@/model/dealModel";
import { GetDiscount } from "@/model/discountModel";
import { create } from "zustand";

interface DiscountStoreProps {
  deal: GetDeal[];
  discount: GetDiscount[];
  setDiscount: () => void;
  setDeal: () => void;
}

const useDiscountStore = create<DiscountStoreProps>((set) => ({
  deal: [],
  discount: [],
  setDiscount: async () => {
    ///get the discounts from the database and set to the store
    const discountList = await getDiscounts();
    set({ discount: discountList });
  },
  setDeal: async () => {
    ///get the discounts from the database and set to the store
    const dealList = await getDeals();
    set({ deal: dealList });
  },
}));

export default useDiscountStore;
