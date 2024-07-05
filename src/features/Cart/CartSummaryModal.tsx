import { demakkFont } from "@/pages/_app";
import {
  Button,
  Grid,
  IconButton,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import { IOrderItem } from "@/model/orderModel";
import { useEffect, useState } from "react";
import getPrice from "@/utils/getPrice";
import useUserStore from "@/store/user";
import useCartStore from "@/store/cart";
import getSelectedOrderItems from "./utils/getSelectedOrderItems";
import useCheckOutStore from "@/store/checkOut";
import { PaymentType } from "@/model/paymentMethod";
import { useRouter } from "next/router";
import { Close, ExpandLess, ExpandMore } from "@mui/icons-material";
import { t } from "i18next";

function CartSummaryModal() {
  const router = useRouter();

  const { cart } = useCartStore();
  const { lang, user } = useUserStore();
  const { setCheckOut } = useCheckOutStore();

  const [selectedOrderItems] = useState<IOrderItem[]>(
    getSelectedOrderItems({ cart })
  );

  const [subTotal, setSubTotal] = useState(0);
  const [shippingFee] = useState(0);

  const [expandCheckOutSummary, setExpandCheckOutSummary] = useState(false);

  let total = subTotal - shippingFee;

  useEffect(() => {
    let totalPrice = getSelectedOrderItems({ cart }).reduce(
      (acc, orderItem) =>
        acc + orderItem.productVariant.price * orderItem.quantity,
      0
    );

    setSubTotal(totalPrice || 0);
  }, [cart]);

  return (
    <>
      <Stack color={"text.primary"} width={1} zIndex={1}>
        <Stack zIndex={3}>
          <Slide direction="up" in={expandCheckOutSummary}>
            <Stack
              position={"relative"}
              sx={
                expandCheckOutSummary
                  ? {
                      borderTopLeftRadius: "1.5rem",
                      borderTopRightRadius: "1.5rem",
                    }
                  : {}
              }
              p={2}
              bgcolor={{ xs: "background.paper", md: "background.light" }}
            >
              <Typography
                color={"text.primary"}
                fontSize={{ xs: "1.2rem", md: "1.65rem" }}
                fontWeight={"bold"}
                className={demakkFont.className}
                display={{
                  xs: expandCheckOutSummary ? "inline-block" : "none",
                  md: "inline-block",
                }}
              >
                {t("summary")}
              </Typography>
              <Grid
                container
                spacing={2}
                display={{
                  xs: expandCheckOutSummary ? "flex" : "none",
                  md: "flex",
                }}
              >
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

              <IconButton
                sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
                onClick={() => setExpandCheckOutSummary(false)}
              >
                <Close />
              </IconButton>
            </Stack>
          </Slide>
          <Grid
            zIndex={1}
            p={2}
            container
            spacing={1}
            justifyContent={"flex-end"}
            bgcolor={{ xs: "background.paper", md: "background.light" }}
          >
            <Grid item xs={5} sx={{ display: { md: "none" } }}>
              <Button
                variant="text"
                endIcon={
                  !expandCheckOutSummary ? <ExpandLess /> : <ExpandMore />
                }
                onClick={() => setExpandCheckOutSummary((p) => !p)}
                disableRipple
              >
                <Stack
                  alignItems={"center"}
                  justifyContent={"center"}
                  height={1}
                >
                  <Typography
                    fontSize={{ xs: "0.8rem", md: "1.25rem" }}
                    fontWeight={700}
                    sx={{ userSelect: "none" }}
                  >
                    {t("etb")} {getPrice(total).int}.{getPrice(total).dec}
                  </Typography>
                </Stack>
              </Button>
            </Grid>

            <Grid item xs={5} md={12}>
              <Button
                size="medium"
                fullWidth
                variant="contained"
                sx={{ borderRadius: "2rem" }}
                onClick={() => {
                  setCheckOut({
                    paymentMethod: {
                      type: PaymentType.MasterCard,
                      value: "32435465545342",
                      id: "65aa4cb7bc1de989b45eaea6",
                    },
                    shippingAddress: user?.getUser().shippingAddress,
                    orderItems: getSelectedOrderItems({ cart }),
                  });

                  router.push("/checkout");
                }}
              >
                <Typography
                  fontWeight={"bold"}
                  fontSize={{ xs: "0.8rem", md: "1.05rem" }}
                  noWrap
                >
                  {t("checkout")} (
                  {cart
                    ?.getCart()
                    .orderItems.filter((oi) => oi.isChecked == true).length ||
                    0}
                  )
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
      {expandCheckOutSummary && (
        <Stack
          position={"fixed"}
          bgcolor="background.paper"
          width={"100vw"}
          height={"100vh"}
          top={0}
          zIndex={2}
          sx={{ opacity: 0.6 }}
        />
      )}
    </>
  );
}

export default CartSummaryModal;
