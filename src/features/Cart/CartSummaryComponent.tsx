import { Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { demakkFont } from "@/pages/_app";
import PaymentCard from "../Footer/components/PaymentCard";
import { OrderItems } from "@/model/orderModel";
import { useEffect, useState } from "react";
import getPrice from "@/utils/getPrice";
import useUserStore from "@/store/user";
import useCartStore from "@/store/cart";
import useCheckOutStore from "@/store/checkOut";
import { PaymentType } from "@/model/paymentMethod";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import usePageStore from "@/store/page";

function CartSummaryComponent() {
  const { t } = useTranslation();
  const router = useRouter();

  const { cart } = useCartStore();
  const { user } = useUserStore();
  const { setCheckOut } = useCheckOutStore();
  const { setSnackBar } = usePageStore();

  const [subTotal, setSubTotal] = useState(0);
  const [shippingFee] = useState(0);

  let total = subTotal - shippingFee;

  let orderItems = new OrderItems(cart?.getCart().orderItems || []);

  useEffect(() => {
    let totalPrice = orderItems.getTotalPriceOfSelectedOrderItems();

    setSubTotal(totalPrice || 0);
  }, [cart]);

  return (
    <Stack
      zIndex={0}
      gap={1}
      color={"text.primary"}
      position={{ md: "sticky" }}
      top={{ md: "2rem" }}
      width={1}
      display={{ xs: "none", md: "flex" }}
    >
      <Stack
        p={2}
        bgcolor={{ xs: "background.paper", md: "background.light" }}
        gap={2}
        position={"relative"}
      >
        <Typography
          color={"text.primary"}
          fontSize={{ xs: "1.2rem", md: "1.65rem" }}
          fontWeight={"bold"}
          className={demakkFont.className}
        >
          {t("summary", { ns: "order" })}
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Stack gap={1.5}>
              {subTotal !== 0 && (
                <Typography fontWeight={600}>{t("subTotal")}</Typography>
              )}
              {shippingFee !== 0 && (
                <Typography fontWeight={600}>
                  {t("shippingFee", { ns: "order" })}
                </Typography>
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
          size="medium"
          fullWidth
          variant="contained"
          sx={{ borderRadius: "2rem" }}
          disabled={
            orderItems
              .getAvailableOrderItems()
              .getSelectedOrderItems()
              .getLength() == 0
          }
          onClick={() => {
            if (orderItems.getSelectedOrderItems().getLength() == 0) {
              setSnackBar({
                open: true,
                message: t("checkOutIsEmpty", { ns: "modal" }),
                type: "error",
              });
              return;
            }

            setCheckOut({
              paymentMethod: {
                type: PaymentType.MasterCard,
                value: "32435465545342",
                id: "65aa4cb7bc1de989b45eaea6",
              },
              shippingAddress: user?.getUser().shippingAddress || null,
              orderItems: orderItems
                .getAvailableOrderItems()
                .getSelectedOrderItems()
                .getOrderItems(),
            });

            router.push("/checkout");
          }}
        >
          <Typography
            fontWeight={"bold"}
            fontSize={{ xs: "0.8rem", md: "1.05rem" }}
            noWrap
          >
            {t("checkout", { ns: "order" })} (
            {orderItems
              .getAvailableOrderItems()
              .getSelectedOrderItems()
              .getLength() || 0}
            )
          </Typography>
        </Button>
      </Stack>
      <Stack
        bgcolor="background.light"
        p={2}
        divider={<Divider flexItem />}
        gap={2}
      >
        <Stack gap={1.5}>
          <Typography fontSize={"1.1rem"} fontWeight={"bold"}>
            {t("payWith", { ns: "footer" })}
          </Typography>
          <Grid
            container
            spacing={1}
            justifyContent={{ xs: "center", sm: "unset" }}
          >
            <PaymentCard
              url={"/assets/images/paymentCards/pay.png"}
              lg={1.75}
            />
            <PaymentCard
              url={"/assets/images/paymentCards/pay3.webp"}
              lg={1.75}
            />
            <PaymentCard
              url={"/assets/images/paymentCards/pay2.webp"}
              lg={1.75}
            />
            <PaymentCard
              url={"/assets/images/paymentCards/pay4.webp"}
              lg={1.75}
            />
            <PaymentCard
              url={"/assets/images/paymentCards/pay5.webp"}
              lg={1.75}
            />
            <PaymentCard
              url={"/assets/images/paymentCards/pay6.webp"}
              lg={1.75}
            />
            <PaymentCard
              url={"/assets/images/paymentCards/pay11.webp"}
              lg={1.75}
            />
            <PaymentCard
              url={"/assets/images/paymentCards/pay8.webp"}
              lg={1.75}
            />
            <PaymentCard
              url={"/assets/images/paymentCards/pay9.webp"}
              lg={1.75}
            />
            <PaymentCard
              url={"/assets/images/paymentCards/pay10.webp"}
              lg={1.75}
            />
          </Grid>
        </Stack>
        <Stack gap={1.5}>
          <Typography fontSize={"1.1rem"} fontWeight={"bold"}>
            {t("buyerProtection")}
          </Typography>
          <Typography fontSize={"0.9rem"}>
            {t("getFullRefund", { ns: "policies" })}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default CartSummaryComponent;
