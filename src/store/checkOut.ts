import { ICheckOut } from "@/model/checkOutModel";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface DiscountStoreProps {
  checkOut: ICheckOut | null;
  setCheckOut: (checkOut: ICheckOut) => void;
}

const useCheckOutStore = create<DiscountStoreProps>()(
  persist(
    (set) => ({
      checkOut: null,

      setCheckOut: (checkOut: ICheckOut) => {
        set({
          checkOut,
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
