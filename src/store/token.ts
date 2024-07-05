import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface TokenStoreProps {
  token: string | null;
  setToken: (token: string | null) => void;
}

const useTokenStore = create<TokenStoreProps>()(
  persist(
    (set) => ({
      token: null,
      setToken: (token) => {
        set({ token });
      },
    }),
    {
      name: "demakk_token",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useTokenStore;
