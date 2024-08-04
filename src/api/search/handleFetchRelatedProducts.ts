import { IProductForSearch } from "@/model/productModel";
import { LANG, chosenBackendUrl } from "@/store/user";
import axios from "axios";

export interface FetchRelatedProductsProps {
  token: string | null;
  searchProducts: IProductForSearch[];
  lang?: LANG;
}

const handleFetchRelatedProducts = async ({
  token,
  searchProducts,
  lang,
}: FetchRelatedProductsProps) => {
  let searchProductsCategories = searchProducts
    .map((searchProduct) => {
      return searchProduct.productCategory;
    })
    .filter((searchProductCategory) => searchProductCategory);

  try {
    let { data } = await axios.post(
      `${chosenBackendUrl}/search/related`,
      {
        productCategoryIds: searchProductsCategories,
        lang,
      },
      {
        headers: {
          Authorization: token ? `Bearer ${token}` : "none",
        },
      }
    );

    let replatedProducts: IProductForSearch[] = data.relatedProducts;
    return replatedProducts;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default handleFetchRelatedProducts;
