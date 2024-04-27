import { GetProduct, IProduct } from "@/model/productModel";
import { LANG } from "@/store/user";
import axios from "axios";
import { ObjectId } from "mongoose";

export interface GetProductProps {
  productId: ObjectId | string;
  limit?: number;
  page?: number;
  lang?: LANG;
}

const local = "http://localhost:8080/api/v1";
const server = "https://demakk-backend.vercel.app/api/v1";

const getProduct = async ({
  productId,
  limit,
  page,
  lang,
}: GetProductProps) => {
  const { data } = await axios.get(
    `${local}/product/${productId}?${limit && `limit=${limit}`}&${
      page && `page=${page}`
    }&${lang && `lang=${lang}`}`
  );

  console.log(data.data, "from hook");

  const product = data.data;
  return product;
};

export default getProduct;
