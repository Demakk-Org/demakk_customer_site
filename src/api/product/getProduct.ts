import { LANG, chosenBackendUrl } from "@/store/user";
import axios from "axios";
import { ObjectId } from "mongoose";

export interface GetProductProps {
  productId: ObjectId | string;
  limit?: number;
  page?: number;
  lang?: LANG;
}

const getProduct = async ({
  productId,
  limit,
  page,
  lang,
}: GetProductProps) => {
  try {
    const { data } = await axios.get(
      `${chosenBackendUrl}/product/${productId}?${limit && `limit=${limit}`}&${
        page && `page=${page}`
      }&${lang && `lang=${lang}`}`
    );

    const product = data.product;
    return product;
  } catch (err: any) {
    console.log(err.message);
    return null;
  }
};

export default getProduct;
