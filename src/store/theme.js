import { create } from 'zustand';

const useThemeProvider = create((set) => ({
  darkMode: true,
  switchTheme: () => set((state) => ({ darkMode: !state.darkMode })),
  setTheme: (value) => set({ darkMode: value }),
}));

export default useThemeProvider;
