import axios from "axios";
import { IProductForSearch } from "@/model/productModel";
import { SearchFilterProps } from "@/store/search";
import { LANG, chosenBackendUrl } from "@/store/user";

export interface SearchProps {
  limit?: number;
  page?: number;
  lang?: LANG;
  query: string;
  token: string | null;
  filter?: SearchFilterProps;
}

const handleSearch = async ({
  token,
  query,
  limit,
  page,
  lang,
  filter,
}: SearchProps) => {
  try {
    const { data } = await axios.post(
      `${chosenBackendUrl}/search`,
      {
        text: query,
        limit: limit || 20,
        page: page || 1,
        lang: lang || LANG.en,
        filter,
      },
      {
        headers: {
          Authorization: token ? `Bearer ${token}` : "none",
        },
      }
    );

    const list: IProductForSearch[] = data.products.list;
    return list;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default handleSearch;
