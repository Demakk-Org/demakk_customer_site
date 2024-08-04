import handleAutoComplete, {
  AutoCompleteProps,
} from "@/api/search/autoComplete";
import handleFetchRelatedProducts, {
  FetchRelatedProductsProps,
} from "@/api/search/handleFetchRelatedProducts";
import handleSearch, { SearchProps } from "@/api/search/handleSearch";
import { IProductForSearch } from "@/model/productModel";
import { SortType } from "@/utils/sortSearchResults";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface SearchFilterProps {
  price?: {
    min: number;
    max: number;
  };
  rating?: number;
}

interface SearchStoreProps {
  searchTerms: string[];
  searchResults: IProductForSearch[];
  autoComplete: string[];
  relatedProducts: IProductForSearch[];

  addSearchTerm: (query: string) => void;
  fetchSearchResults: ({
    query,
    token,
    lang,
    page,
    limit,
    filter,
  }: SearchProps) => void;
  fetchAutoComplete: ({ query, token, lang }: AutoCompleteProps) => void;
  fetchRelatedProducts: ({
    searchProducts,
    token,
    lang,
  }: FetchRelatedProductsProps) => void;
  resetAutoComplete: () => void;
}

const useSearchStore = create<SearchStoreProps>()(
  persist(
    (set) => ({
      searchTerms: [],
      autoComplete: [],
      searchResults: [],
      relatedProducts: [],

      addSearchTerm: (query) => {
        set((state) => ({ searchTerms: [...state.searchTerms, query] }));
      },

      fetchSearchResults: async ({
        query,
        token,
        lang,
        page,
        limit,
        filter,
      }) => {
        const results = await handleSearch({
          query,
          token,
          lang,
          page,
          limit,
          filter,
        });
        set({ searchResults: results });
      },

      fetchAutoComplete: async ({ query, token, lang }) => {
        const results = await handleAutoComplete({ query, token, lang });
        set({ autoComplete: results });
      },

      fetchRelatedProducts: async ({ token, searchProducts, lang }) => {
        const results = await handleFetchRelatedProducts({
          token,
          searchProducts,
          lang,
        });
        set({ relatedProducts: results });
      },

      resetAutoComplete: () => set({ autoComplete: [] }),
    }),
    {
      name: "search_queries",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

interface LocalSearchStoreProps {
  searchState: boolean;
  searchText: string;
  searchFilter: {
    high: number | null;
    low: number | null;
  } | null;
  sortType: SortType;
  searchViewType: "list" | "gallery";

  setSearchState: (value: boolean) => void;
  setSearchText: (value: string) => void;
  setSearchFilter: (value: { high: number | null; low: number } | null) => void;
  setSortType: (value: SortType) => void;
  setSearchViewType: (value: "list" | "gallery") => void;
}

export const useLocalSearchStore = create<LocalSearchStoreProps>((set) => ({
  searchState: false,
  sortType: "score",
  searchViewType: "gallery",

  setSearchState: (value) => {
    set({ searchState: value });
  },

  searchText: "",
  setSearchText: (value) => {
    set({ searchText: value });
  },

  searchFilter: null,
  setSearchFilter: (value) => {
    set({ searchFilter: value });
  },
  setSortType: (value) => {
    set({ sortType: value });
  },

  setSearchViewType: (value) => {
    set({ searchViewType: value });
  },
}));

export default useSearchStore;
