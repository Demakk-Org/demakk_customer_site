import { create } from "zustand";

export interface ISnackBar {
  open: boolean;
  message: string;
  type: "error" | "success" | "warning";
}

interface PageStoreProps {
  snackBar: ISnackBar | null;
  setSnackBar: (value: ISnackBar | null) => void;

  loading: boolean;
  setLoading: (value: boolean) => void;
}

const usePageStore = create<PageStoreProps>((set) => ({
  snackBar: null,
  loading: false,

  setSnackBar: (value) => {
    set({ snackBar: value });
  },

  setLoading: (value) => {
    set({ loading: value });
  },
}));

export default usePageStore;
