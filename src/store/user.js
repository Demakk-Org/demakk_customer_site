import { create } from "zustand";

const useUserStore = create((set) => ({
  user: { name: "Melka" },
  setUser: (user) => set({ user }),
  signOut: () => set({ user: {} }),
}));

export default useUserStore;
