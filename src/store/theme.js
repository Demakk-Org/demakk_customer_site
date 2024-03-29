import { create } from "zustand";

const useThemeProvider = create((set) => ({
  darkMode: false,
  switchTheme: () => set((state) => ({ darkMode: !state.darkMode })),
  setTheme: (value) => set({ darkMode: value }),
}));

export default useThemeProvider;
