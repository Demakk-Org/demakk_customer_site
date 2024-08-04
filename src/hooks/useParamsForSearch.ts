import { ParamsFromServer } from "@/pages";
import useSearchStore, { useLocalSearchStore } from "@/store/search";
import useTokenStore from "@/store/token";
import { useEffect } from "react";

const useParamsForSearch = (params: ParamsFromServer) => {
  const {
    setSearchState,
    searchText,
    searchFilter,
    setSearchText,
    setSearchFilter,
  } = useLocalSearchStore();

  const { fetchSearchResults } = useSearchStore();
  const { token } = useTokenStore();

  const { text, filter } = params;
  useEffect(() => {
    if (text) {
      setSearchText(text);
      setSearchState(true);
    }

    if (filter.low && filter.high) {
      setSearchFilter({
        low: filter.low || 0,
        high: filter.high,
      });
    }

    if (text) {
      fetchSearchResults({
        query: text,
        token,
        filter: {
          price: {
            min: filter?.low || 0,
            max: filter?.high || Number.POSITIVE_INFINITY,
          },
        },
      });
    }

    if (searchText) setSearchState(true);
  }, [text, filter.high, filter.low]);
};

export default useParamsForSearch;
