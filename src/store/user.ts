import { create } from "zustand";

interface User {
  name: string;
  img?: string;
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
  user: User | null;
  setUser: (user: User) => void;
  signOut: () => void;
}

const useUserStore = create<StoreInterface>((set) => ({
  lang: LANG.en,
  setLang: (lang) => {
    console.log(lang, "store");
    set({ lang });
  },
  address: Addresses["addis-ababa"],
  setAddress: (address) => set({ address: Addresses[address] }),
  user: null,
  setUser: (user) => set({ user }),
  signOut: () => set({ user: null }),
}));

export default useUserStore;
