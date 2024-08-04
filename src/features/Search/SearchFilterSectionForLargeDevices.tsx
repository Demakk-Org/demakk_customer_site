import { useLocalSearchStore } from "@/store/search";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "next-i18next";

function SearchFilterSectionForLargeDevices() {
  const { t } = useTranslation(["common", "saleTerms", "actions"]);
  const router = useRouter();
  const { searchFilter, searchText } = useLocalSearchStore();

  const [showShipmentFilter, setShowShipmentFilter] = useState(true);
  const [showPriceFilter, setShowPriceFilter] = useState(true);
  const [showDiscountFilter, setShowDiscountFilter] = useState(true);

  const [localFilter, setLocalFilter] = useState<{
    high: number | null;
    low: number | null;
  } | null>(searchFilter);

  return (
    <Stack
      divider={<Divider flexItem />}
      spacing={2}
      p={"1.5rem 3rem"}
      position={"sticky"}
      top={"5rem"}
      display={{ xs: "none", md: "flex" }}
    >
      <Stack spacing={"0.5rem"}>
        <Stack
          direction={"row"}
          spacing={4}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography fontWeight={"bold"} color={"text.primary"}>
            {t("deliveryOptionsAndServices", { ns: "deal" })}
          </Typography>

          <IconButton onClick={() => setShowShipmentFilter((p) => !p)}>
            {!showShipmentFilter ? <ExpandMore /> : <ExpandLess />}
          </IconButton>
        </Stack>

        {showShipmentFilter && (
          <Stack spacing={"0.5rem"}>
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  size="small"
                  sx={{ p: "2px", mr: "0.5rem" }}
                />
              }
              label={t("choice", { ns: "deal" })}
              sx={{ color: "text.primary", p: 0 }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  size="small"
                  sx={{ p: "2px", mr: "0.5rem" }}
                />
              }
              label={t("freeShipping", { ns: "deal" })}
              sx={{ color: "text.primary" }}
            />
          </Stack>
        )}
      </Stack>

      <Stack spacing={1}>
        <Stack
          direction={"row"}
          spacing={4}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography fontWeight={"bold"} color={"text.primary"}>
            {t("discount", { count: 2, ns: "deal" })}
          </Typography>

          <IconButton onClick={() => setShowDiscountFilter((p) => !p)}>
            {!showPriceFilter ? <ExpandMore /> : <ExpandLess />}
          </IconButton>
        </Stack>
        {showDiscountFilter && (
          <Stack spacing={"0.5rem"}>
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  size="small"
                  sx={{ p: "2px", mr: "0.5rem" }}
                />
              }
              label={t("sale", { ns: "deal" })}
              sx={{ color: "text.primary" }}
            />
          </Stack>
        )}
      </Stack>

      <Stack spacing={1}>
        <Stack spacing={1}>
          <Stack
            direction={"row"}
            spacing={4}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography fontWeight={"bold"} color={"text.primary"}>
              {t("price")}
            </Typography>

            <IconButton onClick={() => setShowPriceFilter((p) => !p)}>
              {!showPriceFilter ? <ExpandMore /> : <ExpandLess />}
            </IconButton>
          </Stack>
        </Stack>

        {showPriceFilter && (
          <Stack>
            <Stack>
              <Grid container spacing={1}>
                <Grid item xs={9}>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={1}
                    divider={<Typography color={"text.primary"}>-</Typography>}
                  >
                    <TextField
                      placeholder={t("etb")}
                      size="small"
                      value={localFilter?.low || ""}
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
                      placeholder={t("etb")}
                      size="small"
                      value={localFilter?.high || ""}
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
                </Grid>

                <Grid item xs={3}>
                  <Button
                    variant="contained"
                    size="medium"
                    fullWidth
                    sx={{ height: "100%" }}
                    onClick={() =>
                      router.push(
                        `/?searchText=${searchText}${
                          localFilter?.low ? "&gt=" + localFilter?.low : ""
                        }${localFilter?.high ? "&lt=" + localFilter?.high : ""}`
                      )
                    }
                  >
                    {t("ok", { ns: "actions" })}
                  </Button>
                </Grid>
              </Grid>
            </Stack>

            <Stack>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={localFilter?.low === 0 && localFilter?.high == 50}
                    onClick={() => {
                      setLocalFilter({ high: 50, low: 0 });
                      router.push(`/?searchText=${searchText}&lt=50`);
                    }}
                  />
                }
                label={`${t("under")} - 50`}
                sx={{ color: "text.primary" }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={localFilter?.low == 50 && localFilter?.high == 200}
                    onClick={() => {
                      setLocalFilter({ high: 200, low: 50 });
                      router.push(`/?searchText=${searchText}&gt=50&lt=200`);
                    }}
                  />
                }
                label="50 - 200"
                sx={{ color: "text.primary" }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={
                      localFilter?.low == 200 && localFilter?.high == 1000
                    }
                    onClick={() => {
                      setLocalFilter({ high: 1000, low: 200 });
                      router.push(`/?searchText=${searchText}&gt=200&lt=1000`);
                    }}
                  />
                }
                label="200 - 1000"
                sx={{ color: "text.primary" }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={
                      localFilter?.low == 1000 && localFilter?.high == null
                    }
                    onClick={() => {
                      setLocalFilter({ high: null, low: 1000 });
                      router.push(`/?searchText=${searchText}&gt=1000`);
                    }}
                  />
                }
                label={`1000 - ${t("over")}`}
                sx={{ color: "text.primary" }}
              />
            </Stack>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
}

export default SearchFilterSectionForLargeDevices;
