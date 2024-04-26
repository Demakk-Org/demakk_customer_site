import { create } from 'zustand';
import getProducts, { GetProductProps } from '@/hooks/getProducts';
import { GetProduct } from '@/model/productModel';

interface ProductStoreProps {
  products: GetProduct[];
  product: GetProduct | null;
  page: number;
  limit: number;

  setProducts: (props: GetProductProps) => void;
  nextPage: () => void;
  prevPage: () => void;
}

const useProductStore = create<ProductStoreProps>((set) => ({
  products: [],
  product: null,
  page: 1,
  limit: 7,

  // setProduct: async (value) => {
  //   ///get from the database ansd set to the store
  //   const productList: GetProduct = await getProducts(value);
  //   set({ products: productList });

  setProducts: async (value) => {
    ///get from the database ansd set to the store
    const productList: GetProduct[] = await getProducts(value);
    set({ products: productList });
  },
  /**
   * next set of products
   */
  nextPage: () => set((state) => ({ page: state.page + 1 })),
  prevPage: () => set((state) => ({ page: state.page - 1 })),
}));



export default useProductStore;
