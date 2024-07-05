import { create } from "zustand";
import getAddresses from "@/api/address/getAddresses";
import { GetAddress } from "@/model/addressModel";

interface AddressStore {
  address: GetAddress | null;
  addresses: GetAddress[];

  setAddress: (address: GetAddress | null) => void;
  fetchAddress: ({ token }: { token: string | null }) => void;
}

const useAddressStore = create<AddressStore>((set) => ({
  address: null,
  addresses: [],

  setAddress: (address) => {
    set({ address });
  },

  fetchAddress: async ({ token }) => {
    const addresses = await getAddresses(token);
    set({ addresses });
  },
}));

export default useAddressStore;
