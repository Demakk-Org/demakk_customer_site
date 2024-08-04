import { useLocalSearchStore } from "@/store/search";
import {
  Check,
  ExpandLess,
  ExpandMore,
  FilterAltOutlined,
  FormatListBulletedOutlined,
  GridViewOutlined,
} from "@mui/icons-material";
import {
  Button,
  Collapse,
  Divider,
  Grid,
  IconButton,
  Slide,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "next-i18next";

function SearchFilterSectionForSmallDevices() {
  const { t } = useTranslation(["common", "saleTerms"]);
  const router = useRouter();
  const {
    sortType,
    setSortType,
    searchViewType,
    setSearchViewType,
    searchFilter,
    searchText,
  } = useLocalSearchStore();
  const [openSortFilter, setOpenSortFilter] = useState(false);
  const [openViewFilter, setOpenViewFilter] = useState(false);

  const [localFilter, setLocalFilter] = useState<{
    high: number | null;
    low: number | null;
  } | null>(searchFilter);

  let sortTypeName = () => {
    switch (sortType) {
      case "popularity":
        return t("popular", { ns: "saleTerms" });
      case "score":
        return t("bestMatch", { ns: "saleTerms" });
      case "desc":
        return t("priceFromHighToLow");
      case "asc":
        return t("priceFromLowToHigh");
      default:
        return "No name specified";
    }
  };

  return (
    <>
      <Stack
        px={2}
        display={{ xs: "flex", md: "none" }}
        position={"relative"}
        zIndex={openSortFilter ? 2000 : 500}
        borderBottom={"1px solid"}
        borderColor={"text.secondary"}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Button
            color="contrast"
            endIcon={
              openSortFilter ? (
                <ExpandLess sx={{ p: 0, height: "0.8rem", width: "0.8rem" }} />
              ) : (
                <ExpandMore sx={{ p: 0, height: "0.8rem", width: "0.8rem" }} />
              )
            }
            onClick={() => setOpenSortFilter((p) => !p)}
          >
            {sortTypeName()}
          </Button>

          <Stack
            divider={
              <Divider
                flexItem
                orientation="vertical"
                sx={{ borderColor: "text.primary" }}
              />
            }
            direction={"row"}
          >
            <IconButton
              size="small"
              onClick={() =>
                setSearchViewType(
                  searchViewType == "gallery" ? "list" : "gallery"
                )
              }
              disabled={openSortFilter}
            >
              {searchViewType == "gallery" ? (
                <GridViewOutlined />
              ) : (
                <FormatListBulletedOutlined />
              )}
            </IconButton>

            <Button
              color="contrast"
              disabled={openSortFilter}
              startIcon={<FilterAltOutlined />}
              onClick={() => setOpenViewFilter(true)}
            >
              {t("filter")}
            </Button>
          </Stack>
        </Stack>

        <Stack
          position={"absolute"}
          left={"0%"}
          top={"100%"}
          zIndex={1000}
          maxWidth={"100vw"}
          minHeight={0}
          width={1}
          bgcolor={"background.lightOpaque"}
        >
          <Collapse in={openSortFilter}>
            <Stack p={"1rem"}>
              <Button
                color={sortType == "score" ? "demakkPrimary" : "contrast"}
                fullWidth
                endIcon={sortType == "score" && <Check />}
                onClick={() => {
                  setSortType("score");
                  setOpenSortFilter(false);
                }}
              >
                <Typography width={1} textAlign={"left"}>
                  {t("bestMatch", { ns: "saleTerms" })}
                </Typography>
              </Button>
              <Button
                fullWidth
                color={sortType == "popularity" ? "demakkPrimary" : "contrast"}
                endIcon={sortType == "popularity" && <Check />}
                onClick={() => {
                  setSortType("popularity");
                  setOpenSortFilter(false);
                }}
              >
                <Typography width={1} textAlign={"left"}>
                  {t("popular", { ns: "saleTerms" })}
                </Typography>
              </Button>
              <Button
                fullWidth
                color={sortType == "desc" ? "demakkPrimary" : "contrast"}
                endIcon={sortType == "desc" && <Check />}
                onClick={() => {
                  setSortType("desc");
                  setOpenSortFilter(false);
                }}
              >
                <Typography width={1} textAlign={"left"}>
                  {t("priceFromHighToLow")}
                </Typography>
              </Button>
              <Button
                fullWidth
                color={sortType == "asc" ? "demakkPrimary" : "contrast"}
                endIcon={sortType == "asc" && <Check />}
                onClick={() => {
                  setSortType("asc");
                  setOpenSortFilter(false);
                }}
              >
                <Typography width={1} textAlign={"left"}>
                  {t("priceFromLowToHigh")}
                </Typography>
              </Button>
            </Stack>
          </Collapse>
        </Stack>
      </Stack>

      {(openSortFilter || openViewFilter) && (
        <Stack
          position={"fixed"}
          bgcolor="background.paper"
          width={"100vw"}
          height={"100vh"}
          top={0}
          zIndex={openViewFilter ? 2001 : 1000}
          sx={{ opacity: 0.6 }}
          onClick={() => {
            setOpenSortFilter(false);
            setOpenViewFilter(false);
          }}
        />
      )}

      <Slide in={openViewFilter} direction="left">
        <Stack
          display={openViewFilter ? "flex" : "none"}
          position="absolute"
          right={"0%"}
          top={"0%"}
          width={"80vw"}
          height={"100vh"}
          bgcolor={"background.lightOpaque"}
          zIndex={3000}
          justifyContent={"space-between"}
        >
          <Stack spacing={1} p={"1rem"}>
            <Typography color={"text.primary"}>{t("price")}</Typography>

            <Stack
              direction={"row"}
              divider={<Typography color={"text.primary"}>-</Typography>}
              spacing={2}
              alignItems={"center"}
            >
              <TextField
                size="small"
                placeholder={t("min")}
                onChange={({ target }) =>
                  setLocalFilter((p) => {
                    if (p) {
                      return {
                        ...p,
                        low: parseInt(target.value),
                      };
                    } else {
                      return {
                        high: null,
                        low: parseInt(target.value),
                      };
                    }
                  })
                }
              />
              <TextField
                size="small"
                placeholder={t("max")}
                onChange={({ target }) =>
                  setLocalFilter((p) => {
                    if (p) {
                      return {
                        ...p,
                        high: parseInt(target.value),
                      };
                    } else {
                      return {
                        low: null,
                        high: parseInt(target.value),
                      };
                    }
                  })
                }
              />
            </Stack>

            <Stack pt={2}>
              <Grid container spacing={0.5}>
                <Grid item xs={4}>
                  <Button
                    fullWidth
                    size="small"
                    variant="outlined"
                    color={
                      localFilter?.low == 0 && localFilter?.high == 50
                        ? "demakkPrimary"
                        : "contrast"
                    }
                    onClick={() => {
                      setLocalFilter({ high: 50, low: 0 });
                      router.push(`/?searchText=${searchText}&lt=50`);
                      setOpenViewFilter(false);
                    }}
                  >
                    <Typography fontSize={"0.8rem"}>0 - 50</Typography>
                  </Button>
                </Grid>

                <Grid item xs={4}>
                  <Button
                    fullWidth
                    size="small"
                    variant="outlined"
                    color={
                      localFilter?.low == 50 && localFilter?.high == 200
                        ? "demakkPrimary"
                        : "contrast"
                    }
                    onClick={() => {
                      setLocalFilter({ high: 200, low: 50 });
                      router.push(`/?searchText=${searchText}&gt=50&lt=200`);
                      setOpenViewFilter(false);
                    }}
                  >
                    <Typography fontSize={"0.8rem"}>50 - 200</Typography>
                  </Button>
                </Grid>

                <Grid item xs={4}>
                  <Button
                    fullWidth
                    size="small"
                    variant="outlined"
                    color={
                      localFilter?.low == 200 && localFilter?.high == 1000
                        ? "demakkPrimary"
                        : "contrast"
                    }
                    onClick={() => {
                      setLocalFilter({ high: 1000, low: 200 });
                      router.push(`/?searchText=${searchText}&gt=200&lt=1000`);
                      setOpenViewFilter(false);
                    }}
                  >
                    <Typography fontSize={"0.8rem"}>200 - 1000</Typography>
                  </Button>
                </Grid>
              </Grid>
            </Stack>
          </Stack>

          <Stack direction={"row"}>
            <Button
              size="large"
              variant="contained"
              fullWidth
              onClick={() => setOpenViewFilter(false)}
            >
              {t("reset", { ns: "actions" })}
            </Button>
            <Button
              size="large"
              variant="contained"
              color="demakkSecondary"
              fullWidth
              onClick={() => {
                router.push(
                  `/?searchText=${searchText}${
                    localFilter?.low ? "&gt=" + localFilter?.low : ""
                  }${localFilter?.high ? "&lt=" + localFilter?.high : ""}`
                );
                setOpenViewFilter(false);
              }}
            >
              {t("done", { ns: "actions" })}
            </Button>
          </Stack>
        </Stack>
      </Slide>
    </>
  );
}

export default SearchFilterSectionForSmallDevices;
