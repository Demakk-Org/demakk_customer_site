import useSearchStore, { useLocalSearchStore } from "@/store/search";
import {
  ExpandLess,
  ExpandMore,
  FormatListBulletedOutlined,
  GridViewOutlined,
} from "@mui/icons-material";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import ProductCardComponent from "../Product/ProductsCard";
import { GetProduct } from "@/model/productModel";
import sortSearchResults from "@/utils/sortSearchResults";
import { useTranslation } from "next-i18next";

function SearchResultDisplaySection() {
  const { t } = useTranslation();
  const { sortType, setSortType } = useLocalSearchStore();
  const { searchResults } = useSearchStore();
  const [listType, setListType] = useState<"list" | "gallery">("gallery");

  return (
    <Stack px={{ xs: "1rem", md: "3rem" }} pl={0} pb={"3rem"}>
      <Stack
        direction={"row"}
        py={2}
        spacing={4}
        justifyContent={"flex-end"}
        display={{ xs: "none", md: "flex" }}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          <Typography color={"text.primary"}>{t("sortBy")}:</Typography>
          <Stack direction={"row"}>
            <Button
              variant="outlined"
              color={sortType == "score" ? "demakkSecondary" : "contrast"}
              sx={{
                borderTopLeftRadius: "3rem",
                borderBottomLeftRadius: "3rem",
              }}
              onClick={() => {
                setSortType("score");
              }}
            >
              {t("bestMatch", {
                ns: "saleTerms",
              })}
            </Button>
            <Button
              variant="outlined"
              color={sortType == "popularity" ? "demakkSecondary" : "contrast"}
              onClick={() => {
                setSortType("popularity");
              }}
            >
              {t("order", { count: 2, ns: "order" })}
            </Button>
            <Button
              variant="outlined"
              color={
                sortType == "asc" || sortType == "desc"
                  ? "demakkSecondary"
                  : "contrast"
              }
              endIcon={
                <Stack>
                  <ExpandLess
                    color={sortType == "desc" ? "demakkSecondary" : "contrast"}
                    sx={{ p: 0, height: "0.8rem", width: "0.8rem" }}
                  />
                  <ExpandMore
                    color={sortType == "asc" ? "demakkSecondary" : "contrast"}
                    sx={{ p: 0, height: "0.8rem", width: "0.8rem" }}
                  />
                </Stack>
              }
              sx={{
                borderTopRightRadius: "3rem",
                borderBottomRightRadius: "3rem",
              }}
              onClick={() => {
                setSortType(sortType == "asc" ? "desc" : "asc");
              }}
            >
              {t("price")}
            </Button>
          </Stack>
        </Stack>

        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          <Typography color={"text.primary"}>{t("view")}:</Typography>
          <Stack direction={"row"}>
            <Button
              variant="outlined"
              color={listType == "gallery" ? "demakkSecondary" : "contrast"}
              sx={{
                borderTopLeftRadius: "3rem",
                borderBottomLeftRadius: "3rem",
              }}
              startIcon={<GridViewOutlined />}
              onClick={() => {
                setListType("gallery");
              }}
            >
              <Typography display={{ xs: "none", md: "inline" }}>
                {t("gallery")}
              </Typography>
            </Button>

            <Button
              variant="outlined"
              color={listType == "list" ? "demakkSecondary" : "contrast"}
              sx={{
                borderTopRightRadius: "3rem",
                borderBottomRightRadius: "3rem",
              }}
              startIcon={<FormatListBulletedOutlined />}
              onClick={() => {
                setListType("list");
              }}
            >
              <Typography display={{ xs: "none", md: "inline" }}>
                {t("list")}
              </Typography>
            </Button>
          </Stack>
        </Stack>
      </Stack>

      <Stack flex={1}>
        <Grid container spacing={2}>
          {sortSearchResults({ results: searchResults, type: sortType }).map(
            (product, index) => (
              <Grid item key={index} xs={6} sm={6} md={3}>
                <ProductCardComponent product={new GetProduct(product)} />
              </Grid>
            )
          )}
        </Grid>
      </Stack>
    </Stack>
  );
}

export default SearchResultDisplaySection;
