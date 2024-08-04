import { GetProductForCard, IProductForCard } from "@/model/productModel";
import { LANG, chosenBackendUrl } from "@/store/user";
import axios from "axios";

export interface GetProductProps {
  limit: number;
  page: number;
  lang: LANG;
}

const getProducts = async ({ limit, page, lang }: GetProductProps) => {
  try {
    const { data } = await axios.get(
      `${chosenBackendUrl}/product?${limit && `limit=${limit}`}&${
        page && `page=${page}`
      }&${lang && `lang=${lang}`}`
    );

    const list: GetProductForCard[] = data.products.map(
      (product: IProductForCard) => {
        const newProduct = new GetProductForCard(
          product,
          product.reviews,
          product.productCategory,
          product.productVariants
        );
        return newProduct;
      }
    );
    return list;
  } catch (e: any) {
    console.log("Error", e.message);
    return [];
  }
};

export default getProducts;
