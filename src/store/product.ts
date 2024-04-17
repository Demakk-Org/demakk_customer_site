import { create } from "zustand";
// import { Product } from "../../dealsContainerStructure";
import getProducts, { GetProductProps } from "@/hooks/getProducts";
import { GetProduct } from "@/model/product";

interface ProductStoreProps {
  products: GetProduct[];
  setProducts: (props: GetProductProps) => void;
}

const useProductStore = create<ProductStoreProps>((set) => ({
  products: [],
  setProducts: async (value) => {
    ///get from the database ansd set to the store
    const productList: GetProduct[] = await getProducts(value);
    set({ products: productList });
  },
}));

export default useProductStore;
