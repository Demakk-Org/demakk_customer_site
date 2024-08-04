import { IProductForSearch } from "@/model/productModel";

export type SortType = "asc" | "desc" | "popularity" | "score";

const sortSearchResults = ({
  results,
  type,
}: {
  results: IProductForSearch[];
  type: SortType;
}) => {
  if (!type) return results;

  switch (type) {
    case "score":
      return results.sort((a, b) => b.score - a.score);
    case "popularity":
      return results.sort((a, b) => b.popularity - a.popularity);
    case "desc":
      return results.sort((a, b) => b.price - a.price);
    case "asc":
      return results.sort((a, b) => a.price - b.price);
    default:
      return results;
  }
};

export default sortSearchResults;
