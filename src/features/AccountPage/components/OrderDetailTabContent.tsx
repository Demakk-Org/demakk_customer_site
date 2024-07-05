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
import "@/language/translation";
import { t } from "i18next";

function OrderDetailTabContent({ orderId }: { orderId: string }) {
  const { setBreadcrumbs } = useUserStore();
  const { token } = useTokenStore();
  const { order, setOrder } = useOrderStore();

  const router = useRouter();

  const [more, setMore] = useState(false);

  useEffect(() => {
    if (!token) router.back();
    setBreadcrumbs([
      { name: "home", url: "/" },
      {
        name: "order",
        url: "/order",
      },
      {
        name: "orderDetails",
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
        <Loading />
      </Stack>
    );
  }

  let totalPrice = 0;

  order.getOrder().orderItems.map((item) => {
    totalPrice += item.productVariant.price * item.quantity;
  });

  return (
    <Stack color={"text.primary"} gap={2}>
      <Stack bgcolor={"background.light"} p={"1rem"} gap={2}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography fontSize={"1.2rem"} fontWeight={"bold"} letterSpacing={1}>
            {t(order.getOrder().orderStatus.toString().toLowerCase())}
          </Typography>
          <Button
            onClick={() => router.back()}
            startIcon={<ChevronLeft sx={{ color: "text.primary" }} />}
          >
            <Typography color={"text.primary"}>{t("back")}</Typography>
          </Button>
        </Stack>
        <Typography fontSize={{ xs: "0.85rem", sm: "1rem" }}>
          {t("defectiveReceiptNotice")}
        </Typography>
        <Stack direction={"row"} gap={{ xs: 0.5, sm: 2 }}>
          <Button
            variant="contained"
            size="small"
            sx={{ borderRadius: { xs: "0.5rem", sm: "2rem" } }}
          >
            <Typography fontSize={{ xs: "0.8rem", sm: "1rem" }}>
              {t("writeReview")}
            </Typography>
          </Button>
          <Button
            size="small"
            color="primaryButton"
            variant="outlined"
            sx={{ borderRadius: { xs: "0.5rem", sm: "2rem" } }}
          >
            <Typography fontSize={{ xs: "0.8rem", sm: "1rem" }}>
              {t("addToCart")}
            </Typography>
          </Button>
          <Button
            size="small"
            color="primaryButton"
            variant="outlined"
            sx={{ borderRadius: { xs: "0.5rem", sm: "2rem" } }}
          >
            <Typography fontSize={{ xs: "0.8rem", sm: "1rem" }}>
              {t("trackOrder")}
            </Typography>
          </Button>
          <Button
            size="small"
            color="primaryButton"
            variant="outlined"
            sx={{ borderRadius: { xs: "0.5rem", sm: "2rem" } }}
          >
            <Typography fontSize={{ xs: "0.8rem", sm: "1rem" }}>
              {t("receipt")}
            </Typography>
          </Button>
        </Stack>
      </Stack>

      <Stack gap={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} container>
            <Stack p={"1rem"} bgcolor={"background.light"} width={1}>
              <Grid container spacing={2}>
                <Grid item xs={1.5}>
                  <Stack alignItems={"center"}>
                    <IconFromReactIcons icon={<CiLocationOn />} />
                  </Stack>
                </Grid>
                <Grid item xs={10.5}>
                  <Stack gap={1} position={"relative"}>
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
            >
              <Grid container spacing={2}>
                <Grid item xs={1.5}>
                  <Stack alignItems={"center"}>
                    <IconFromReactIcons icon={<LiaClipboardListSolid />} />
                  </Stack>
                </Grid>
                <Grid item xs={10.5}>
                  <Stack gap={1}>
                    <Stack direction={"row"}>
                      <Typography fontWeight={300}>
                        {t("orderId")}: {order.getOrder().id}
                      </Typography>
                    </Stack>
                    <Typography fontWeight={300}>
                      {t("orderPlacedOn")}:{" "}
                      {new Date(order.getOrder().orderDate).toDateString()}
                    </Typography>
                    <Typography fontWeight={300}>
                      {t("paymentMethod")}: Credit/Debit card
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
        <Grid container gap={2}>
          <Grid item xs={12} sm={9}>
            <Stack divider={<Divider flexItem />} gap={2}>
              {order.getOrder().orderItems.map((orderItem, index) => {
                return (
                  <Stack direction={"row"} key={index} gap={2}>
                    <Box width={"20%"}>
                      <ImageFromFirebase
                        width={"100%"}
                        quality="480p"
                        name={orderItem.productVariant.imageUrl}
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
                          ETB {getPrice(orderItem.productVariant.price).int}.
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
                );
              })}
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
              >
                {t("addToCart")}
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
                {t("returnsRefunds")}
              </Button>
            </Stack>
          </Grid>
        </Grid>

        <Stack>
          <Grid container justifyContent={"flex-end"}>
            <Grid item xs={3}>
              <Stack gap={1} alignItems={{ xs: "flex-end", sm: "unset" }}>
                <Typography fontWeight={300}>{t("subTotal")}</Typography>
                <Typography fontWeight={"bold"}>{t("total")}</Typography>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack gap={1} alignItems={"flex-end"}>
                <Typography fontWeight={300}>
                  ETB {getPrice(totalPrice).int}.{getPrice(totalPrice).dec}
                </Typography>
                <Typography fontWeight={"bold"}>
                  ETB {getPrice(totalPrice).int}.{getPrice(totalPrice).dec}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default OrderDetailTabContent;
