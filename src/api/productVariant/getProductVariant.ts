import { LANG, chosenBackendUrl } from "@/store/user";
import axios from "axios";

export interface IGetProductVariantProps {
  productVarietyId: string;
  lang: LANG;
}

const getProductVariant = async ({
  productVarietyId,
  lang,
}: IGetProductVariantProps) => {
  try {
    const { data } = await axios.get(
      `${chosenBackendUrl}/stockVariety/${productVarietyId}?lang=${lang}`
    );

    return data.productVariant;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getProductVariant;
