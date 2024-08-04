import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import useCartStore from "@/store/cart";
import useUserStore from "@/store/user";
import useCheckOutStore from "@/store/checkOut";
import { PaymentType } from "@/model/paymentMethod";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { OrderItems } from "@/model/orderModel";
import SideCartComponent from "./SideCartComponent";

function SideCartComponentContainer() {
  const { t } = useTranslation(["common", "actions", "order"]);
  const { cart } = useCartStore();
  const { user } = useUserStore();
  const { setCheckOut } = useCheckOutStore();

  let orderItems = new OrderItems(cart?.getCart().orderItems || []);

  let totalPrice = orderItems.getTotalPriceOfSelectedOrderItems();

  let availableProducts = orderItems.getAvailableOrderItems();
  let outOfStockProducts = orderItems.getOutOfStockOrderItems();

  if (!user) return <></>;

  return (
    <Stack
      position={"sticky"}
      top={0}
      borderLeft={"4px solid gray"}
      height={"100vh"}
      maxHeight={"100vh"}
      spacing={1}
    >
      <Stack alignItems={"center"} spacing={1} p={2}>
        <Typography
          fontSize={"0.9rem"}
          fontWeight={"bold"}
          color={"text.primary"}
        >
          {t("etb")} {totalPrice}
        </Typography>

        <Link href={"/checkout"} style={{ width: "100%" }}>
          <Button
            variant="contained"
            fullWidth
            size="small"
            sx={{ borderRadius: "3rem" }}
            onClick={() => {
              setCheckOut({
                paymentMethod: {
                  type: PaymentType.MasterCard,
                  value: "32435465545342",
                  id: "65aa4cb7bc1de989b45eaea6",
                },
                shippingAddress: user.getUser().shippingAddress,
                orderItems: availableProducts
                  .getSelectedOrderItems()
                  .getOrderItems(),
              });
            }}
          >
            <Typography fontSize={"0.9rem"} fontWeight={"bold"}>
              {t("checkout", { ns: "order" })}
            </Typography>
          </Button>
        </Link>

        <Link href={"/cart"} style={{ width: "100%" }}>
          <Button
            variant="outlined"
            fullWidth
            size="small"
            color="brighten"
            sx={{ borderRadius: "3rem" }}
          >
            <Typography
              fontSize={"0.9rem"}
              fontWeight={"bold"}
              color={"text.primary"}
            >
              {t("goToCart", { ns: "actions" })}
            </Typography>
          </Button>
        </Link>
      </Stack>

      <Box px={"1rem"}>
        <Divider flexItem sx={{ borderColor: "text.secondary" }} />
      </Box>

      <Stack spacing={2} overflow={"auto"} p={2}>
        <Typography fontWeight={"bold"} color={"text.primary"}>
          {t("shippedByDemakk")}
        </Typography>

        <Stack>
          <Grid container spacing={1} rowSpacing={2}>
            {availableProducts.getOrderItems().map((oi, index) => (
              <SideCartComponent key={index} oi={oi} />
            ))}
          </Grid>
        </Stack>
      </Stack>

      {outOfStockProducts.getLength() && (
        <Stack spacing={2} overflow={"auto"} p={2}>
          <Typography fontWeight={"bold"} color={"text.primary"}>
            {t("unavailable", { ns: "order" })}({outOfStockProducts.getLength()}
            )
          </Typography>

          <Stack>
            <Grid container spacing={1} rowSpacing={2}>
              {outOfStockProducts.getOrderItems().map((oi, index) => (
                <SideCartComponent key={index} oi={oi} outOfStock={true} />
              ))}
            </Grid>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
}

export default SideCartComponentContainer;
