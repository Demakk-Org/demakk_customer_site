import { create } from "zustand";

const useUserStore = create((set) => ({
  lang: "am",
  address: "addis-ababa",
  setAddress: (address) => set({ address }),
  user: {},
  setUser: (user) => set({ user }),
  signOut: () => set({ user: {} }),
  setLang: (lang) => set({ lang }),
}));

export default useUserStore;
