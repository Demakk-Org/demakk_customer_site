import IconFromReactIcons from "@/component/IconFromReactIcons";
import useOrderStore from "@/store/order";
import useUserStore from "@/store/user";
import getMonths from "@/utils/getMonths";
import getPrice from "@/utils/getPrice";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { LiaClipboardListSolid } from "react-icons/lia";
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";

function OrderDetailTabContent() {
  const { setBreadcrumbs, lang } = useUserStore();
  const { order } = useOrderStore();
  const [more, setMore] = useState(false);

  console.log(order, "from the detail component");

  useEffect(() => {
    setBreadcrumbs([
      { name: "Home", url: "/" },
      {
        name: "Order",
        url: "/order",
      },
      {
        name: "Order details",
        url: "/order/663fa1f59533ba81604b18fa",
      },
    ]);
  }, []);

  if (!order) return <></>;

  let totalPrice = 0;

  order.getOrder().orderItems.map((item) => {
    totalPrice += item.productVariant.price * item.quantity;
  });

  return (
    <Stack color={"text.primary"} gap={2}>
      <Stack bgcolor={"background.light"} p={"1rem"} gap={2}>
        <Typography fontSize={"1.2rem"} fontWeight={"bold"} letterSpacing={1}>
          {order.getOrder().orderStatus}
        </Typography>
        <Typography>
          If the item you received is defective or not as described, you can
          open a dispute within 15 days of receipt.
        </Typography>
        <Stack direction={"row"} gap={2}>
          <Button variant="contained" sx={{ borderRadius: "2rem" }}>
            Write a review
          </Button>
          <Button
            color="primaryButton"
            variant="outlined"
            sx={{ borderRadius: "2rem" }}
          >
            Add to cart
          </Button>
          <Button
            color="primaryButton"
            variant="outlined"
            sx={{ borderRadius: "2rem" }}
          >
            Track order
          </Button>
          <Button
            color="primaryButton"
            variant="outlined"
            sx={{ borderRadius: "2rem" }}
          >
            Receipt
          </Button>
        </Stack>
      </Stack>

      <Stack gap={2}>
        <Grid container spacing={2}>
          <Grid item xs={6} container>
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

          <Grid item xs={6} container>
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
          <Grid item xs={9}>
            <Stack divider={<Divider flexItem />} gap={2}>
              {order.getOrder().orderItems.map((orderItem, index) => {
                return (
                  <Stack direction={"row"} key={index} gap={2}>
                    <Box
                      width={"25%"}
                      component={"img"}
                      alignSelf={"flex-start"}
                      src={orderItem.productVariant.imageUrl}
                      sx={{ aspectRatio: 1, objectFit: "cover" }}
                    />
                    <Stack gap={2} width={"75%"}>
                      <Typography
                        noWrap
                        color={"text.primary"}
                        fontWeight={300}
                      >
                        {orderItem.productVariant.product.name}
                      </Typography>
                      <Stack
                        direction={"row"}
                        // gap={1}
                        color={"text.secondary"}
                        divider={<Typography pr={"0.25rem"}>, </Typography>}
                      >
                        {orderItem.productVariant.stockVarieties.map(
                          (stockVariety, index) => (
                            <Typography key={index} component={"span"}>
                              {stockVariety.value}
                            </Typography>
                          )
                        )}
                      </Stack>
                      <Stack direction={"row"} gap={2}>
                        <Typography fontWeight={300} color={"text.primary"}>
                          ETB {getPrice(orderItem.productVariant.price).int}.
                          {getPrice(orderItem.productVariant.price).dec}
                        </Typography>
                        <Typography fontWeight={300} color={"text.secondary"}>
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
              p={"0 1rem"}
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
            <Grid item xs={3}>
              <Stack gap={1}>
                <Typography fontWeight={300}>Subtotal</Typography>
                <Typography fontWeight={"bold"}>Total</Typography>
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
