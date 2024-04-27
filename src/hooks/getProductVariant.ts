import { LANG } from "@/store/user";
import axios from "axios";

export interface IGetProductVariantProps {
  productVarietyId: string;
  lang: LANG;
}

const local = "http://localhost:8080/api/v1";
const server = "https://demakk-backend.vercel.app/api/v1";

const getProductVariant = async ({
  productVarietyId,
  lang,
}: IGetProductVariantProps) => {
  const productVariant = await axios.get(
    `${local}/stockVariety/${productVarietyId}?lang=${lang}`
  );

  // console.log(productVariant.data.data);
  return productVariant.data.data;
};

export default getProductVariant;
