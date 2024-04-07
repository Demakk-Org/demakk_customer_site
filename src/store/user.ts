import { create } from "zustand";

interface User {
  name: string;
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

interface StoreInterface {
  lang: LANG;
  address: Addresses;
  setLang: (lang: LANG) => void;
  setAddress: (address: Addresses) => void;
  user: User | {};
  setUser: (user: User) => void;
  signOut: () => void;
}

const useUserStore = create<StoreInterface>((set) => ({
  lang: LANG.en,
  setLang: (lang) => set({ lang }),
  address: Addresses["addis-ababa"],
  setAddress: (address) => set({ address }),
  user: {},
  setUser: (user) => set({ user }),
  signOut: () => set({ user: {} }),
}));

export default useUserStore;
