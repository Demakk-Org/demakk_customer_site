import { create } from "zustand";

export interface ISnackBar {
  open: boolean;
  message: string;
  type: "error" | "success" | "warning";
}

export interface ModalProps {
  open: true;
  title: string;
  description: string;
  callBackFn: Function;
}

interface PageStoreProps {
  snackBar: ISnackBar | null;
  setSnackBar: (value: ISnackBar | null) => void;
  openModal: ModalProps | null;

  loading: boolean;
  setLoading: (value: boolean) => void;
  setOpenModal: (value: ModalProps | null) => void;
}

const usePageStore = create<PageStoreProps>((set) => ({
  snackBar: null,
  loading: false,
  openModal: null,

  setSnackBar: (value) => {
    set({ snackBar: value });
  },

  setLoading: (value) => {
    set({ loading: value });
  },

  setOpenModal: (value) => {
    set({ openModal: value });
  },
}));

export default usePageStore;
