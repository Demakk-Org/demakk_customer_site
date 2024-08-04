import { create } from "zustand";
import getProducts, { GetProductProps } from "@/api/product/getProducts";
import {
  GetProductForPage,
  GetProductForCard,
  IProductForPage,
  IProductForCard,
} from "@/model/productModel";

interface ProductStoreProps {
  products: GetProductForCard[];
  product: GetProductForPage | null;
  favoriteProducts: IProductForCard[] | null;
  page: number;
  limit: number;

  setProducts: (props: GetProductProps) => void;
  setProduct: (props: IProductForPage) => void;
  nextPage: () => void;
  prevPage: () => void;
  setFavoriteProducts: (products: IProductForCard[]) => void;
}

const useProductStore = create<ProductStoreProps>((set) => ({
  products: [],
  product: null,
  page: 1,
  limit: 5,
  favoriteProducts: null,

  setProducts: async (value) => {
    const productList: GetProductForCard[] = await getProducts(value);
    set({ products: productList });
  },
  setProduct: (value) => {
    const product = new GetProductForPage(
      value,
      value.reviews,
      value.productCategory,
      value.productVariants
    );
    set({ product });
  },
  setFavoriteProducts: (products) => {
    set({ favoriteProducts: products });
  },

  nextPage: () => set((state) => ({ page: state.page + 1 })),
  prevPage: () => set((state) => ({ page: state.page - 1 })),
}));

export default useProductStore;
