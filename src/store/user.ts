import getAddresses from "@/hooks/getAddresses";
import { GetAddress, IAddress } from "@/model/addressModel";
import { create } from "zustand";

interface User {
  name: string;
  img?: string;
  address?: string[];
}

export enum LANG {
  am = "am",
  en = "en",
  or = "or",
}

export enum Addresses {
  "addis-ababa" = "addis-ababa",
  afar = "afar",
  oromia = "oromia",
  amhara = "amhara",
  gumuz = "gumuz",
  harari = "harari",
}

interface IBreadcrumb {
  name: string;
  url: string;
}

interface StoreInterface {
  token: string;
  lang: LANG;
  user: User | null;
  address: Addresses;
  breadcrumbs: IBreadcrumb[];
  shippingAddress: GetAddress[];

  setToken: (value: string) => void;
  setLang: (lang: LANG) => void;
  setAddress: (address: Addresses) => void;
  setUser: (user: User) => void;
  signOut: () => void;
  setBreadcrumbs: (breadcrumbs: IBreadcrumb[]) => void;
  setShippingAddress: (token: string) => void;
}

const useUserStore = create<StoreInterface>((set) => ({
  token: "",
  lang: LANG.en,
  user: null,
  address: Addresses["addis-ababa"],
  breadcrumbs: [],
  shippingAddress: [],

  setToken: (token: string) => set({ token }),
  setLang: (lang) => {
    console.log(lang, "store");
    set({ lang });
  },
  setAddress: (address) => set({ address: Addresses[address] }),
  setUser: (user) => set({ user }),
  signOut: () => set({ user: null }),
  setBreadcrumbs: (breadcrumbs: IBreadcrumb[]) => set({ breadcrumbs }),
  setShippingAddress: async (token) => {
    const shippingAddressList = await getAddresses(token);
    set({ shippingAddress: shippingAddressList });
  },
}));

export default useUserStore;
