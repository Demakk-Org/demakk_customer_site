import { create } from 'zustand';
import getProducts, { GetProductProps } from '@/hooks/getProducts';
import {
  GetProductForPage,
  GetProductForCard,
  IProductForPage,
} from '@/model/productModel';

interface ProductStoreProps {
  products: GetProductForCard[];
  product: GetProductForPage | null;
  page: number;
  limit: number;

  setProducts: (props: GetProductProps) => void;
  setProduct: (props: IProductForPage) => void;
  nextPage: () => void;
  prevPage: () => void;
}

const useProductStore = create<ProductStoreProps>((set) => ({
  products: [],
  product: null,
  page: 1,
  limit: 8,
  setProducts: async (value) => {
    ///get from the database and set to the store
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
  /**
   * next set of products
   */
  nextPage: () => set((state) => ({ page: state.page + 1 })),
  prevPage: () => set((state) => ({ page: state.page - 1 })),
}));

export default useProductStore;
