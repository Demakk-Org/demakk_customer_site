import { create } from "zustand";

const useUserStore = create((set) => ({
  lang: "",
  address: "",
  setAddress: (address) => set({ address }),
  user: {},
  setUser: (user) => set({ user }),
  signOut: () => set({ user: {} }),
  setLang: (lang) => set({ lang }),
}));

export default useUserStore;
