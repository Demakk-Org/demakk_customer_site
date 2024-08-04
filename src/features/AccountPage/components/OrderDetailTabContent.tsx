import IconFromReactIcons from "@/component/IconFromReactIcons";
import ImageFromFirebase from "@/component/ImageFromFirebase";
import Loading from "@/component/Loading";
import useOrderStore from "@/store/order";
import useTokenStore from "@/store/token";
import useUserStore from "@/store/user";
import getPrice from "@/utils/getPrice";
import { ChevronLeft } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { LiaClipboardListSolid } from "react-icons/lia";
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";
import handleAddOrderItem from "@/api/orderItem/handleAddOrderItem";
import useCartStore from "@/store/cart";
import usePageStore from "@/store/page";
import { ImageType } from "@/component/FirebaseImageUploadComponent";
import { useTranslation } from "next-i18next";
import { copyToClipboard } from "./OrdersTabDisplayContainer";
import MoreToLoveComponent from "./MoreToLoveComponent";
import { OrderItems } from "@/model/orderModel";

function OrderDetailTabContent({ orderId }: { orderId: string }) {
  const { t } = useTranslation(["order"]);
  const { setBreadcrumbs } = useUserStore();
  const { token } = useTokenStore();
  const { order, setOrder, selectedOrderItem } = useOrderStore();
  const { setCart } = useCartStore();
  const { setLoading, setSnackBar } = usePageStore();

  const router = useRouter();

  const [more, setMore] = useState(false);

  useEffect(() => {
    // if (!token) router.back();

    setBreadcrumbs([
      { name: t("home", { ns: "common" }), url: "/" },
      {
        name: t("order_one"),
        url: "/order",
      },
      {
        name: t("orderDetails"),
        url: "",
      },
    ]);

    setOrder({ id: orderId, token });
  }, [token]);

  if (!order) {
    return (
      <Stack
        bgcolor={"background.light"}
        justifyContent={"center"}
        alignItems={"center"}
        minHeight={"250px"}
      >
        <Loading windowMode={true} />
      </Stack>
    );
  }

  console.log(order.getOrder());

  let totalPrice = 0;

  let orderItemsFromOrder = new OrderItems(order.getOrder().orderItems);

  totalPrice = orderItemsFromOrder
    .getOrderItemsForOrderDetail(selectedOrderItem)
    .getPriceForOrderDetail();
  console.log(totalPrice);

  return (
    <Stack color={"text.primary"} gap={2}>
      <Stack bgcolor={"background.light"} p={"1rem"} gap={2}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography fontSize={"1.2rem"} fontWeight={"bold"} letterSpacing={1}>
            {t(order.getOrder().orderStatus.toLowerCase())}
          </Typography>
          <Button
            onClick={() => router.push("/order")}
            startIcon={<ChevronLeft sx={{ color: "text.primary" }} />}
          >
            <Typography color={"text.primary"}>
              {t("back", { ns: "actions" })}
            </Typography>
          </Button>
        </Stack>
        <Typography fontSize={{ xs: "0.85rem", sm: "1rem" }}>
          {t("defectiveReceiptNotice")}
        </Typography>
        <Stack direction={"row"} gap={{ xs: 0.5, sm: 2 }}>
          <Button
            variant="contained"
            size="medium"
            sx={{ borderRadius: { xs: "0.5rem", sm: "2rem" } }}
          >
            <Typography
              fontSize={{ xs: "0.8rem", sm: "0.85rem" }}
              fontWeight={"bold"}
              width={"150px"}
            >
              {t("writeReview", { ns: "actions" })}
            </Typography>
          </Button>
          <Button
            size="medium"
            color="primaryButton"
            variant="outlined"
            sx={{ borderRadius: { xs: "0.5rem", sm: "2rem" } }}
          >
            <Typography
              fontSize={{ xs: "0.8rem", sm: "0.85rem" }}
              fontWeight={"bold"}
              width={"150px"}
            >
              {t("addToCart", { ns: "actions" })}
            </Typography>
          </Button>
          <Button
            size="medium"
            color="primaryButton"
            variant="outlined"
            sx={{ borderRadius: { xs: "0.5rem", sm: "2rem" } }}
          >
            <Typography
              fontSize={{ xs: "0.8rem", sm: "0.85rem" }}
              fontWeight={"bold"}
              width={"150px"}
            >
              {t("trackOrder")}
            </Typography>
          </Button>
          <Button
            size="medium"
            color="primaryButton"
            variant="outlined"
            sx={{ borderRadius: { xs: "0.5rem", sm: "2rem" } }}
          >
            <Typography
              fontSize={{ xs: "0.8rem", sm: "0.85rem" }}
              fontWeight={"bold"}
              width={"150px"}
            >
              {t("receipt")}
            </Typography>
          </Button>
        </Stack>
      </Stack>

      <Stack gap={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} container>
            <Stack
              p={"1rem"}
              bgcolor={"background.light"}
              width={1}
              fontSize={{ xs: "0.8rem", md: "1rem" }}
              sx={{ "& p": { fontSize: "inherit" } }}
            >
              <Grid container spacing={2}>
                <Grid item xs={1.5}>
                  <Stack alignItems={"center"}>
                    <IconFromReactIcons icon={<CiLocationOn />} />
                  </Stack>
                </Grid>
                <Grid item xs={10.5}>
                  <Stack gap={{ xs: 0.5, md: 1 }} position={"relative"}>
                    <Typography fontWeight={300}>
                      {order.getOrder().deliveryAddress.contactName}
                    </Typography>
                    <Typography fontWeight={300}>
                      {order.getOrder().deliveryAddress.phoneNumber}
                    </Typography>
                    {more && (
                      <Typography fontWeight={300}>
                        <Stack
                          direction={"row"}
                          fontSize={{ xs: "0.8rem", md: "1rem" }}
                          sx={{ "& span": { fontSize: "inherit" } }}
                          divider={
                            <Typography component={"span"}>,&nbsp;</Typography>
                          }
                        >
                          {order.getOrder().deliveryAddress.woreda && (
                            <Typography component={"span"}>
                              {order.getOrder().deliveryAddress.woreda}
                            </Typography>
                          )}
                          {order.getOrder().deliveryAddress.subCity && (
                            <Typography component={"span"}>
                              {order.getOrder().deliveryAddress.subCity}
                            </Typography>
                          )}
                          {order.getOrder().deliveryAddress.city && (
                            <Typography component={"span"}>
                              {order.getOrder().deliveryAddress.city}
                            </Typography>
                          )}
                        </Stack>
                      </Typography>
                    )}
                    <Typography fontWeight={300}>
                      <Stack
                        direction={"row"}
                        fontSize={{ xs: "0.8rem", md: "1rem" }}
                        sx={{ "& span": { fontSize: "inherit" } }}
                        divider={
                          <Typography component={"span"}>,&nbsp;</Typography>
                        }
                      >
                        {order.getOrder().deliveryAddress.region && (
                          <Typography component={"span"}>
                            {order.getOrder().deliveryAddress.region}
                          </Typography>
                        )}
                        {order.getOrder().deliveryAddress.country && (
                          <Typography component={"span"}>
                            {order.getOrder().deliveryAddress.country}
                          </Typography>
                        )}
                        {order.getOrder().deliveryAddress.postalCode && (
                          <Typography component={"span"}>
                            {order.getOrder().deliveryAddress.postalCode}
                          </Typography>
                        )}
                      </Stack>
                    </Typography>

                    <IconButton
                      onClick={() => setMore((m) => !m)}
                      sx={{
                        position: "absolute",
                        bottom: "1.5%",
                        right: "1.5%",
                        p: 0,
                        "&:hover": { bgcolor: "transparent" },
                      }}
                    >
                      {more ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
                    </IconButton>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} container>
            <Stack
              p={"1rem"}
              bgcolor={"background.light"}
              width={1}
              height={"fit-content"}
              fontSize={{ xs: "0.8rem", md: "1rem" }}
              sx={{ "& p": { fontSize: "inherit" } }}
            >
              <Grid container spacing={2}>
                <Grid item xs={1.5}>
                  <Stack alignItems={"center"}>
                    <IconFromReactIcons icon={<LiaClipboardListSolid />} />
                  </Stack>
                </Grid>
                <Grid item xs={10.5}>
                  <Stack gap={1}>
                    <Stack direction={"row"} spacing={1}>
                      <Typography fontWeight={300}>
                        {t("orderId")}: {order.getOrder().id}
                      </Typography>

                      <Button
                        color={"primary"}
                        onClick={() =>
                          copyToClipboard(order.getOrder().id, () =>
                            setSnackBar({
                              open: true,
                              message: t("copiedToClipboard", { ns: "common" }),
                              type: "success",
                            })
                          )
                        }
                        sx={{
                          textDecoration: "none",
                          fontSize: "inherit",
                          p: 0,
                          maxWidth: "fit-content",
                          minWidth: "unset",
                        }}
                      >
                        <Typography fontSize={"0.8rem"}>
                          {t("copy", { ns: "actions" })}
                        </Typography>
                      </Button>
                    </Stack>
                    <Typography fontWeight={300}>
                      {t("orderPlacedOn")}:{" "}
                      {new Date(order.getOrder().orderDate).toDateString()}
                    </Typography>
                    <Typography fontWeight={300}>
                      {t("paymentMethod", { ns: "account" })}: Credit/Debit card
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Stack>

      <Stack
        bgcolor={"background.light"}
        p={"1rem"}
        gap={2}
        divider={<Divider flexItem />}
      >
        {orderItemsFromOrder.getOrderItems().map((orderItem, index) => {
          return (
            <Grid container gap={2} key={index}>
              <Grid item xs={12} sm={9}>
                <Stack divider={<Divider flexItem />} gap={2}>
                  <Stack direction={"row"} key={index} gap={2}>
                    <Box width={{ xs: "30%", md: "20%" }}>
                      <ImageFromFirebase
                        width={"100%"}
                        quality="240p"
                        name={orderItem.productVariant.imageUrl}
                        type={ImageType.product}
                      />
                    </Box>
                    <Stack gap={{ xs: 0.5, sm: 2 }} flex={1}>
                      <Typography
                        noWrap
                        color={"text.primary"}
                        fontWeight={300}
                        fontSize={{ xs: "0.9rem", sm: "1rem" }}
                      >
                        {orderItem.productVariant.product.name}
                      </Typography>
                      <Stack
                        direction={"row"}
                        color={"text.secondary"}
                        divider={
                          <Typography
                            fontSize={{ xs: "0.9rem", sm: "1rem" }}
                            pr={"0.25rem"}
                          >
                            ,&nbsp;
                          </Typography>
                        }
                      >
                        {orderItem.productVariant.stockVarieties.map(
                          (stockVariety, index) => (
                            <Typography
                              fontSize={{ xs: "0.9rem", sm: "1rem" }}
                              key={index}
                              component={"span"}
                            >
                              {stockVariety.value}
                            </Typography>
                          )
                        )}
                      </Stack>
                      <Stack direction={"row"} gap={2}>
                        <Typography
                          fontSize={{ xs: "0.9rem", sm: "1rem" }}
                          fontWeight={300}
                          color={"text.primary"}
                        >
                          {t("etb", { ns: "common" })}{" "}
                          {getPrice(orderItem.productVariant.price).int}.
                          {getPrice(orderItem.productVariant.price).dec}
                        </Typography>
                        <Typography
                          fontSize={{ xs: "0.9rem", sm: "1rem" }}
                          fontWeight={300}
                          color={"text.secondary"}
                        >
                          x{orderItem.quantity}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </Grid>

              <Grid item xs>
                <Stack
                  flex={1}
                  px={{ xs: "4rem", sm: "1rem" }}
                  gap={2}
                  sx={{ "&>button": { borderRadius: "2rem" } }}
                >
                  <Button
                    variant="outlined"
                    color="primaryButton"
                    sx={{
                      fontWeight: "bold",
                      color: "text.primary",
                      "&:hover": { color: "demakkPrimary.main" },
                    }}
                    onClick={() =>
                      handleAddOrderItem({
                        productVariantId: orderItem.productVariant._id,
                        quantity: 1,
                        token,
                        setCart,
                        setLoading,
                      })
                    }
                  >
                    {t("addToCart", { ns: "actions" })}
                  </Button>
                  <Button
                    variant="outlined"
                    color="primaryButton"
                    sx={{
                      fontWeight: "bold",
                      color: "text.primary",
                      "&:hover": { color: "demakkPrimary.main" },
                    }}
                  >
                    {t("returnsRefunds", { ns: "actions" })}
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          );
        })}

        <Stack>
          <Grid container justifyContent={"flex-end"}>
            <Grid item xs={6} md={3}>
              <Stack gap={1} alignItems={{ xs: "flex-start", sm: "unset" }}>
                <Typography fontWeight={300}>
                  {t("subTotal", { ns: "common" })}
                </Typography>
                <Typography fontWeight={"bold"}>
                  {t("total", { ns: "common" })}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} md={3}>
              <Stack gap={1} alignItems={"flex-end"}>
                <Typography fontWeight={300}>
                  {t("etb", { ns: "common" })} {getPrice(totalPrice).int}.
                  {getPrice(totalPrice).dec}
                </Typography>
                <Typography fontWeight={"bold"}>
                  {t("etb", { ns: "common" })} {getPrice(totalPrice).int}.
                  {getPrice(totalPrice).dec}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Stack>

      <MoreToLoveComponent />
    </Stack>
  );
}

export default OrderDetailTabContent;
