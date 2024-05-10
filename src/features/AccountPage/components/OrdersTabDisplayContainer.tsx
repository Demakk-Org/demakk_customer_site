import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { ordersTabs } from "./OrdersTabContent";
import { FaChevronRight } from "react-icons/fa";
import { LuClipboardList } from "react-icons/lu";
import IconFromReactIcons from "@/component/IconFromReactIcons";
import useOrderStore from "@/store/order";
import { useEffect } from "react";
import getPrice from "@/utils/getPrice";

interface OrdersTabDisplayContainerProps {
  selectedTab: number;
}

function OrdersTabDisplayContainer({
  selectedTab,
}: OrdersTabDisplayContainerProps) {
  const { order, setOrder } = useOrderStore();
  console.log(order, "from orderTabDisplayContainer");

  useEffect(() => {
    setOrder();
  }, []);

  if (!order.length) {
    return (
      <Stack
        bgcolor={"background.light"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Stack my={"8rem"} alignItems={"center"} gap={2}>
          <IconFromReactIcons
            width={60}
            height={60}
            icon={<LuClipboardList />}
            strokeWidth="1.5px"
          />
          <Typography color={"text.secondary"} fontWeight={300}>
            No orders yet Please{" "}
            <Typography
              component={"a"}
              color={"text.primary"}
              href="/signin"
              sx={{ textDecoration: "none" }}
            >
              switch account
            </Typography>{" "}
            or{" "}
            <Typography
              component={"a"}
              color={"text.primary"}
              href="/signin"
              sx={{ textDecoration: "none" }}
            >
              feedback
            </Typography>
          </Typography>
        </Stack>
      </Stack>
    );
  }

  return (
    <>
      {order.map((order, index) => {
        let totalPrice = 0;

        order.getOrder().orderItems.map((item) => {
          totalPrice += item.productVariant.price * item.quantity;
        });

        return (
          <Stack
            key={index}
            bgcolor={"background.light"}
            p={"1.5rem"}
            gap={2}
            divider={<Divider flexItem />}
          >
            <Stack
              direction="row"
              justifyContent={"space-between"}
              alignItems={"center"}
              color={"text.primary"}
            >
              <Typography fontWeight={"bold"}>
                {order.getOrder().orderStatus.name}
              </Typography>
              <Stack
                divider={
                  <Divider
                    flexItem
                    orientation="vertical"
                    sx={{ m: "0.25rem 0" }}
                  />
                }
                direction={"row"}
                gap={1}
              >
                <Stack>
                  <Typography color={"text.primary"} fontSize={"0.9rem"}>
                    Order date: {order.getOrder().orderDate + ""}
                  </Typography>
                  <Typography
                    color={"text.primary"}
                    fontWeight={300}
                    fontSize={"0.9rem"}
                  >
                    Order ID: {order.getOrder().id}{" "}
                    <Typography
                      component={"a"}
                      href="/"
                      color={"text.links"}
                      sx={{ textDecoration: "none" }}
                    >
                      Copy
                    </Typography>
                  </Typography>
                </Stack>
                <Button
                  color="primaryButton"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "2rem",
                    px: "1rem",
                  }}
                  endIcon={
                    <IconFromReactIcons
                      width={15}
                      height={15}
                      icon={<FaChevronRight />}
                    />
                  }
                >
                  <Typography color={"text.primary"}>Order details</Typography>
                </Button>
              </Stack>
            </Stack>

            <Stack direction={"row"} gap={2}>
              <Stack width={"65%"} gap={2} divider={<Divider flexItem />}>
                {order.getOrder().orderItems.map((orderItem, index) => {
                  console.log(orderItem.productVariant.stockVarieties);
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
                          {/* <Typography component={"span"}>Gray</Typography>
                          <Typography component={"span"}>42</Typography> */}
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
              <Stack
                flex={1}
                p={"0 2rem"}
                gap={2}
                sx={{ "&>button": { borderRadius: "2rem" } }}
              >
                <Typography textAlign={"center"} color={"text.primary"}>
                  Total: ETB {getPrice(totalPrice).int}.
                  {getPrice(totalPrice).dec}
                </Typography>
                <Button
                  variant="contained"
                  color="demakkPrimary"
                  sx={{ fontWeight: "bold" }}
                >
                  Write a review
                </Button>
                <Button
                  variant="outlined"
                  color="primaryButton"
                  sx={{ fontWeight: "bold", color: "text.primary" }}
                >
                  Add to cart
                </Button>
                <Button
                  variant="outlined"
                  color="primaryButton"
                  sx={{ fontWeight: "bold", color: "text.primary" }}
                >
                  Remove
                </Button>
              </Stack>
            </Stack>

            {/* <Stack direction={"row"} gap={2}>
              <Box
                width={"15%"}
                component={"img"}
                alignSelf={"flex-start"}
                src={
                  orderItem.product.images.imageUrls[
                    order.getOrder().orderItems[0].product.images.primary
                  ]
                }
                sx={{ aspectRatio: 1, objectFit: "cover" }}
              />
              <Stack gap={2} width={"50%"}>
                <Typography noWrap color={"text.primary"} fontWeight={300}>
                  {order.getOrder().orderItems[0].product.name.en}
                </Typography>
                <Stack
                  direction={"row"}
                  // gap={1}
                  color={"text.secondary"}
                  divider={<Typography>,</Typography>}
                >
                  <Typography component={"span"}>Gray</Typography>
                  <Typography component={"span"}>42</Typography>
                </Stack>
                <Stack direction={"row"} gap={2}>
                  <Typography fontWeight={300} color={"text.primary"}>
                    ETB{" "}
                    {getPrice(order.getOrder().orderItems[0].product.price).int}
                    .
                    {getPrice(order.getOrder().orderItems[0].product.price).dec}
                  </Typography>
                  <Typography fontWeight={300} color={"text.secondary"}>
                    x{order.getOrder().orderItems[0].quantity}
                  </Typography>
                </Stack>
              </Stack>

              <Stack
                flex={1}
                p={"0 2rem"}
                gap={2}
                sx={{ "&>button": { borderRadius: "2rem" } }}
              >
                <Typography textAlign={"center"} color={"text.primary"}>
                  Total: ETB 1999.00
                </Typography>
                <Button
                  variant="contained"
                  color="demakkPrimary"
                  sx={{ fontWeight: "bold" }}
                >
                  Write a review
                </Button>
                <Button
                  variant="outlined"
                  color="primaryButton"
                  sx={{ fontWeight: "bold", color: "text.primary" }}
                >
                  Add to cart
                </Button>
                <Button
                  variant="outlined"
                  color="primaryButton"
                  sx={{ fontWeight: "bold", color: "text.primary" }}
                >
                  Remove
                </Button>
              </Stack>
            </Stack> */}
          </Stack>
        );
      })}
    </>
  );
}

export default OrdersTabDisplayContainer;
