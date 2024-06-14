import IconFromReactIcons from "@/component/IconFromReactIcons";
import ImageFromCloudinary from "@/component/ImageFromCloudinary";
import Loading from "@/component/Loading";
import { auth } from "@/firebase/firebase";
import useOrderStore from "@/store/order";
import useUserStore from "@/store/user";
import getMonths from "@/utils/getMonths";
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

function OrderDetailTabContent({ orderId }: { orderId: string }) {
  const { setBreadcrumbs, lang } = useUserStore();
  const { order, setOrder } = useOrderStore();

  const router = useRouter();

  const [more, setMore] = useState(false);

  useEffect(() => {
    setBreadcrumbs([
      { name: "Home", url: "/" },
      {
        name: "Order",
        url: "/order",
      },
      {
        name: "Order details",
        url: "#", //`/order/${order?.getOrder().id}`,
      },
    ]);

    setOrder({ id: orderId });
  }, [order, auth?.currentUser]);

  if (!order) {
    router.push("/login");
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
            {order.getOrder().orderStatus}
          </Typography>
          <Button
            onClick={() => router.back()}
            startIcon={<ChevronLeft sx={{ color: "text.primary" }} />}
          >
            <Typography color={"text.primary"}>Back</Typography>
          </Button>
        </Stack>
        <Typography fontSize={{ xs: "0.85rem", sm: "1rem" }}>
          If the item you received is defective or not as described, you can
          open a dispute within 15 days of receipt.
        </Typography>
        <Stack direction={"row"} gap={{ xs: 0.5, sm: 2 }}>
          <Button
            variant="contained"
            size="small"
            sx={{ borderRadius: { xs: "0.5rem", sm: "2rem" } }}
          >
            <Typography fontSize={{ xs: "0.8rem", sm: "1rem" }}>
              Write a review
            </Typography>
          </Button>
          <Button
            size="small"
            color="primaryButton"
            variant="outlined"
            sx={{ borderRadius: { xs: "0.5rem", sm: "2rem" } }}
          >
            <Typography fontSize={{ xs: "0.8rem", sm: "1rem" }}>
              Add to cart
            </Typography>
          </Button>
          <Button
            size="small"
            color="primaryButton"
            variant="outlined"
            sx={{ borderRadius: { xs: "0.5rem", sm: "2rem" } }}
          >
            <Typography fontSize={{ xs: "0.8rem", sm: "1rem" }}>
              Track order
            </Typography>
          </Button>
          <Button
            size="small"
            color="primaryButton"
            variant="outlined"
            sx={{ borderRadius: { xs: "0.5rem", sm: "2rem" } }}
          >
            <Typography fontSize={{ xs: "0.8rem", sm: "1rem" }}>
              Receipt
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
                    <Typography fontWeight={300}>Solen Tolessa</Typography>
                    <Typography fontWeight={300}>+251 973387519</Typography>
                    {more && (
                      <Typography fontWeight={300}>
                        Keta, Burayu, Oromia
                      </Typography>
                    )}
                    <Typography fontWeight={300}>
                      Orimia, Ethiopia, 1000
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
                        Order ID: {order.getOrder().id}
                      </Typography>
                      {/* <Button sx={{ p: 0, minHeight: "unset" }}>Copy</Button> */}
                    </Stack>
                    <Typography fontWeight={300}>
                      Order placed on:{" "}
                      {getMonths({
                        lang,
                        index: new Date(
                          order.getOrder().orderDate.toString()
                        ).getMonth(),
                      })}{" "}
                      {new Date(
                        order.getOrder().orderDate.toString()
                      ).getDate()}
                      ,{" "}
                      {new Date(
                        order.getOrder().orderDate.toString()
                      ).getFullYear()}
                    </Typography>
                    <Typography fontWeight={300}>
                      Payment method: Credit/Debit card
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
                    <Box width={"30%"}>
                      <ImageFromCloudinary
                        publicId={orderItem.productVariant.imageUrl}
                        width="100%"
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
                            ,{" "}
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
                Add to cart
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
                Returns/refunds
              </Button>
            </Stack>
          </Grid>
        </Grid>

        <Stack>
          <Grid container justifyContent={"flex-end"}>
            <Grid item xs={6}>
              <Stack gap={1} alignItems={{ xs: "flex-end", sm: "unset" }}>
                <Typography fontWeight={300}>Subtotal</Typography>
                <Typography fontWeight={"bold"}>Total</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6}>
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
