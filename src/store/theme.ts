import { create } from "zustand";

export interface ThemeProviderProp {
  darkMode: boolean;
  switchTheme: () => void;
  setTheme: (value: boolean) => void;
}

interface State {
  darkMode: boolean;
}

const useThemeProvider = create<ThemeProviderProp>((set) => ({
  darkMode: true,
  switchTheme: () => set((state: State) => ({ darkMode: !state.darkMode })),
  setTheme: (value: boolean) => set({ darkMode: value }),
}));

export default useThemeProvider;
