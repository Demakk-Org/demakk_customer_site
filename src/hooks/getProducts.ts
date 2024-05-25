import { GetProductForCard, IProductForCard } from "@/model/productModel";
import { LANG } from "@/store/user";
import axios from "axios";

export interface GetProductProps {
  limit: number;
  page: number;
  lang: LANG;
}

const local = "http://localhost:8080/api/v1";
const server = "https://demakk-backend.vercel.app/api/v1";

const getProducts = async ({ limit, page, lang }: GetProductProps) => {
  try {
    const products = await axios.get(
      `${server}/product?${limit && `limit=${limit}`}&${
        page && `page=${page}`
      }&${lang && `lang=${lang}`}`
    );

    console.log("products from axios", products);

    const list: GetProductForCard[] = products.data.data.data.map(
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
