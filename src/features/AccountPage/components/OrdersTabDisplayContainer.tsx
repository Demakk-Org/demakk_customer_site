import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { FaChevronRight } from "react-icons/fa";
import { LuClipboardList } from "react-icons/lu";
import IconFromReactIcons from "@/component/IconFromReactIcons";
import useOrderStore from "@/store/order";
import getPrice from "@/utils/getPrice";
import { Dispatch, SetStateAction } from "react";
import getMonths from "@/utils/getMonths";
import useUserStore from "@/store/user";

interface OrdersTabDisplayContainerProps {
  selectedTab: number;
  setDetail: Dispatch<SetStateAction<boolean>>;
}

function OrdersTabDisplayContainer({
  selectedTab,
  setDetail,
}: OrdersTabDisplayContainerProps) {
  const { orderList, orderStatus, setOrder } = useOrderStore();
  const { lang } = useUserStore();
  console.log(orderList, "from orderTabDisplayContainer", orderStatus);

  let OrderList = orderList.filter(
    (order) =>
      order.getOrder().orderStatus ==
      [{ name: "View All", orderIndex: -1 }, ...orderStatus].sort(
        (a, b) => a.orderIndex - b.orderIndex
      )[selectedTab].name
  );

  if (selectedTab == 0) {
    OrderList = orderList;
  }

  if (!orderList.length || !OrderList.length) {
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
      {OrderList.map((order, index) => {
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
                {order.getOrder().orderStatus}
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
                    Order date:{" "}
                    {getMonths({
                      lang,
                      index: new Date(
                        order.getOrder().orderDate.toString()
                      ).getMonth(),
                    })}{" "}
                    {new Date(order.getOrder().orderDate.toString()).getDate()},{" "}
                    {new Date(
                      order.getOrder().orderDate.toString()
                    ).getFullYear()}
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
                  onClick={() => {
                    setDetail((p) => !p);
                    setOrder(order.getOrder().id);
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
          </Stack>
        );
      })}
    </>
  );
}

export default OrdersTabDisplayContainer;
