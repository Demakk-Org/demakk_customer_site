import { ICheckOut } from "@/model/checkOutModel";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface DiscountStoreProps {
  checkOut: ICheckOut | null;
  setCheckOut: (checkOut: ICheckOut | null) => void;
  orderId: string | null;
  setOrderId: (orderId: string | null) => void;
  isCheckOutComplete: boolean;
  setIsCheckOutComplete: (isCheckOutComplete: boolean) => void;
}

const useCheckOutStore = create<DiscountStoreProps>()(
  persist(
    (set) => ({
      checkOut: null,
      orderId: null,

      setCheckOut: (checkOut) => {
        set({
          checkOut,
        });
      },

      setOrderId: (orderId) => {
        set({
          orderId,
        });
      },

      isCheckOutComplete: false,
      setIsCheckOutComplete: (isCheckOutComplete) => {
        set({
          isCheckOutComplete,
        });
      },
    }),
    {
      name: "checkout",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useCheckOutStore;
