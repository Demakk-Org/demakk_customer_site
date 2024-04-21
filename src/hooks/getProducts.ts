import { GetProduct, Product } from "@/model/productModel";
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
  const products = await axios.get(
    `${local}/product?${limit && `limit=${limit}`}&${page && `page=${page}`}&${
      lang && `lang=${lang}`
    }`
  );

  const list: GetProduct[] = products.data.data.data.map((product: Product) => {
    product;
    const newProduct = new GetProduct(product);
    return newProduct;
  });

  return list;
};

export default getProducts;
