import { LANG, chosenBackendUrl } from "@/store/user";
import axios from "axios";

export interface AutoCompleteProps {
  query: string;
  token: string | null;
  lang?: LANG;
}

const handleAutoComplete = async ({
  query,
  token,
  lang,
}: AutoCompleteProps) => {
  try {
    let { data } = await axios.get(`${chosenBackendUrl}/search/autocomplete`, {
      params: {
        text: query,
        lang,
      },
      headers: {
        Authorization: token ? `Bearer ${token}` : "none",
      },
    });

    let autocomplete: string[] = data.autoCompleteList;
    return autocomplete;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default handleAutoComplete;
