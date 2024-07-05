import { Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { VerifiedUserOutlined } from "@mui/icons-material";

import { demakkFont } from "@/pages/_app";
import getPrice from "@/utils/getPrice";
import useUserStore from "@/store/user";

import TextWithLinksFromDictionary from "@/component/TextWithLinksFromDictionary";
import { IOrderItem } from "@/model/orderModel";
import { t } from "i18next";

function CheckOutSummaryComponent({
  orderItems,
}: {
  orderItems: IOrderItem[];
}) {
  const { lang } = useUserStore();

  let shippingFee = 0;

  let subTotal = orderItems.reduce(
    (acc, orderItem) =>
      acc + orderItem.productVariant.price * orderItem.quantity,
    0
  );

  let total = subTotal - shippingFee;

  return (
    <Stack gap={1} color={"text.primary"} position={"sticky"} top={"1rem"}>
      <Stack p={2} bgcolor={"background.light"} gap={2}>
        <Typography
          color={"text.primary"}
          fontSize={"1.5rem"}
          fontWeight={"bold"}
          className={demakkFont.className}
        >
          {t("summary")}
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Stack gap={1.5}>
              {subTotal !== 0 && (
                <Typography fontWeight={600}>{t("subTotal")}</Typography>
              )}
              {shippingFee !== 0 && (
                <Typography fontWeight={600}>Shipping fee</Typography>
              )}
              {/* <Typography fontWeight={600}>Saved</Typography> */}
              <Typography fontWeight={700}>{t("total")}</Typography>
            </Stack>
          </Grid>

          <Grid item xs={6}>
            <Stack gap={1.5} alignItems={"flex-end"}>
              {subTotal !== 0 && (
                <Typography fontWeight={600}>
                  {t("etb")} {getPrice(subTotal).int}
                </Typography>
              )}
              {shippingFee !== 0 && (
                <Typography fontWeight={600}>{t("etb")} 1.98</Typography>
              )}
              {/* <Typography fontWeight={600}>-US $1.98</Typography> */}
              <Typography fontSize={"1.25rem"} fontWeight={700}>
                {t("etb")} {getPrice(total).int}.{getPrice(total).dec}
              </Typography>
              {total !== 0 && (
                <Typography>
                  (&asymp;${getPrice(total / 55.74).int}.
                  {getPrice(total / 55.74).dec})
                </Typography>
              )}
            </Stack>
          </Grid>
        </Grid>

        <Button
          size="large"
          variant="contained"
          sx={{ borderRadius: "2rem" }}
          onClick={() => {}}
        >
          <Typography fontWeight={"bold"} fontSize={"1.05rem"}>
            {t("payNow")}
          </Typography>
        </Button>

        <Typography fontSize={"0.9rem"} textAlign={"center"}>
          {TextWithLinksFromDictionary({
            name: t("acceptTermsAndPoliciesFromCheckOut"),
            url: "#terms_and_policies",
          })}
        </Typography>
      </Stack>

      <Stack
        bgcolor="background.light"
        p={2}
        divider={<Divider flexItem />}
        gap={2}
      >
        <Stack gap={1.5}>
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <VerifiedUserOutlined fontSize="large" />
            <Typography fontSize={"1.5rem"} fontWeight={"bold"}>
              {t("demakk")}
            </Typography>
          </Stack>
          <Typography fontSize={"1rem"}>
            {t("ensureCustomerAboutSafety")}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default CheckOutSummaryComponent;
