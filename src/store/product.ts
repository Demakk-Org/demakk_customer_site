import { create } from 'zustand';
import getProducts, { GetProductProps } from '@/hooks/getProducts';
import { GetProduct, Product } from '@/model/productModel';

interface ProductStoreProps {
  products: GetProduct[];
  product: GetProduct | null;
  page: number;
  limit: number;

  setProducts: (props: GetProductProps) => void;
  setProduct: (value: Product) => void;
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
    console.log('from setProduct');
    const productList: GetProduct[] = await getProducts(value);

    set({ products: productList });
  },

  setProduct: async (value) => {
    ///get from the database ansd set to the store
    const product = new GetProduct(value);
    set({ product });
  },
  /**
   * next set of products
   */
  nextPage: () => set((state) => ({ page: state.page + 1 })),
  prevPage: () => set((state) => ({ page: state.page - 1 })),
}));

export default useProductStore;
