import getAddresses from "@/api/address/getAddresses";
import getUser from "@/api/user/getUser";
import { GetAddress } from "@/model/addressModel";
import GetUser from "@/model/userModel";
import { create } from "zustand";

export enum backendUrls {
  local = "http://localhost:8080/api/v1",
  server = "https://demakk-backend.vercel.app/api/v1",
}

export const chosenBackendUrl = backendUrls.server;

export enum Providers {
  password = "password",
  google = "google",
  twitter = "twitter",
  facebook = "facebook",
  apple = "apple",
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
  refresh: boolean;
  lang: LANG;
  user: GetUser | null;
  address: Addresses;
  breadcrumbs: IBreadcrumb[];
  shippingAddress: GetAddress[];

  setRefresh: () => void;
  setLang: (lang: LANG) => void;
  setAddress: (address: Addresses) => void;
  setUser: (token?: string) => void;
  signOut: () => void;
  setBreadcrumbs: (breadcrumbs: IBreadcrumb[]) => void;
  setShippingAddress: (token: string) => void;
}

const useUserStore = create<StoreInterface>((set) => ({
  refresh: false,
  lang: LANG.en,
  user: null,
  address: Addresses["addis-ababa"],
  breadcrumbs: [],
  shippingAddress: [],

  setRefresh: () => set((state) => ({ refresh: !state.refresh })),
  setLang: (lang) => {
    console.log(lang, "store");
    set({ lang });
  },
  setAddress: (address) => set({ address: Addresses[address] }),
  setUser: async (token) => {
    const user = await getUser(token);
    set({ user });
  },
  signOut: () => set({ user: null }),
  setBreadcrumbs: (breadcrumbs: IBreadcrumb[]) => set({ breadcrumbs }),
  setShippingAddress: async (token) => {
    const shippingAddressList = await getAddresses(token);
    set({ shippingAddress: shippingAddressList });
  },
}));

export default useUserStore;
