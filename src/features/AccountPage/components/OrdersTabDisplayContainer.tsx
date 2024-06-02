import {
  Alert,
  Box,
  Button,
  Divider,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import { FaChevronRight } from "react-icons/fa";
import { LuClipboardList } from "react-icons/lu";
import IconFromReactIcons from "@/component/IconFromReactIcons";
import useOrderStore from "@/store/order";
import getPrice from "@/utils/getPrice";
import { useState } from "react";
import getMonths from "@/utils/getMonths";
import useUserStore from "@/store/user";
import ImageFromCloudinary from "@/component/ImageFromCloudinary";
import { GetOrder } from "@/model/orderModel";
import Loading from "@/component/Loading";
import getLanguage from "@/utils/getLanguage";
import { orderStatus } from "./OrdersTabContent";

interface OrdersTabDisplayContainerProps {
  selectedOrderStatusType: number;
}

const copyToClipboard = (text: string, openSnackBar: Function) => {
  console.log("text", text);
  var textField = document.createElement("textarea");
  textField.innerText = text;
  document.body.appendChild(textField);
  textField.select();
  document.execCommand("copy");
  textField.remove();
  openSnackBar();
};

function OrdersTabDisplayContainer({
  selectedOrderStatusType,
}: OrdersTabDisplayContainerProps) {
  const { orderList, setOrder } = useOrderStore();
  const { lang } = useUserStore();
  const [copySnackBar, setCopySnackBar] = useState(false);

  let OrderList: GetOrder[] | null =
    orderList &&
    orderList.filter(
      (order) =>
        order.getOrder().orderStatus.toLowerCase() ==
        [{ name: "viewAll", orderIndex: -1 }, ...orderStatus].sort(
          (a, b) => a.orderIndex - b.orderIndex
        )[selectedOrderStatusType].name
    );

  if (selectedOrderStatusType == 0) {
    OrderList = orderList;
  }

  if (orderList == null) {
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

  if (!orderList?.length || !OrderList?.length) {
    return (
      <Stack
        bgcolor={"background.light"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Stack my={"8rem"} alignItems={"center"} gap={2} p={2}>
          <IconFromReactIcons
            width={60}
            height={60}
            icon={<LuClipboardList />}
            strokeWidth="1.5px"
          />
          <Typography
            color={"text.secondary"}
            fontWeight={300}
            textAlign={"center"}
          >
            {getLanguage("noOrdersYet", lang)}, {getLanguage("please", lang)}{" "}
            <Typography
              component={"a"}
              color={"demakkPrimary.main"}
              href="/login"
              sx={{ textDecoration: "none" }}
            >
              {getLanguage("switchAccount", lang)}
            </Typography>{" "}
            {getLanguage("or", lang)}{" "}
            <Typography
              component={"a"}
              color={"demakkPrimary.main"}
              href="/feedback"
              sx={{ textDecoration: "none" }}
            >
              {getLanguage("feedback", lang)}
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
          <>
            <Stack
              key={index}
              bgcolor={"background.light"}
              p={"1.5rem"}
              gap={2}
              divider={<Divider flexItem />}
            >
              <Stack
                direction={{ sx: "column", sm: "row" }}
                justifyContent={"space-between"}
                alignItems={"center"}
                color={"text.primary"}
                gap={{ xs: 1, sm: 0 }}
              >
                <Typography
                  fontWeight={"bold"}
                  fontSize={{ xs: "1rem", sm: "1.1rem" }}
                  letterSpacing={1}
                >
                  {getLanguage(
                    order.getOrder().orderStatus.toLowerCase(),
                    lang
                  )}
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
                    <Typography
                      color={"text.primary"}
                      fontSize={{ xs: "0.75rem", sm: "0.8rem" }}
                    >
                      {getLanguage("orderDate", lang)}:{" "}
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
                    <Typography
                      color={"text.primary"}
                      fontWeight={300}
                      fontSize={{ xs: "0.75rem", sm: "0.8rem" }}
                      sx={{ textWrap: "nowrap" }}
                    >
                      {getLanguage("orderId", lang)}: {order.getOrder().id}{" "}
                    </Typography>
                    <Button
                      color={"primary"}
                      onClick={() =>
                        copyToClipboard(order.getOrder().id, () =>
                          setCopySnackBar(true)
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
                        {getLanguage("copy", lang)}
                      </Typography>
                    </Button>
                  </Stack>
                  <Button
                    color="primaryButton"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      borderRadius: { xs: "0.5rem", sm: "2rem" },
                      px: { xs: "0.25rem", sm: "1rem" },
                    }}
                    onClick={() => {
                      setOrder({ id: order.getOrder().id });
                    }}
                    endIcon={
                      <IconFromReactIcons
                        width={15}
                        height={15}
                        icon={<FaChevronRight />}
                      />
                    }
                  >
                    <Typography
                      fontSize={{ xs: "0.7rem", sm: "1rem" }}
                      color={"text.primary"}
                    >
                      {getLanguage("orderDetails", lang)}
                    </Typography>
                  </Button>
                </Stack>
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} gap={2}>
                <Stack
                  width={{ xs: 1, sm: "65%" }}
                  gap={2}
                  divider={<Divider flexItem />}
                >
                  {order.getOrder().orderItems.map((orderItem, index) => {
                    return (
                      <Stack direction={"row"} key={index} gap={2}>
                        <Box width={{ xs: "30%", md: "20%" }}>
                          <ImageFromCloudinary
                            publicId={orderItem.productVariant.imageUrl}
                            width="100%"
                          />
                        </Box>
                        <Stack gap={{ xs: 0.25, sm: 1, md: 2 }} flex={1}>
                          <Typography
                            noWrap
                            color={"text.primary"}
                            fontWeight={300}
                            fontSize={{ xs: "1rem", md: "1rem" }}
                          >
                            {orderItem.productVariant.product.name}
                          </Typography>
                          <Stack
                            direction={"row"}
                            color={"text.secondary"}
                            divider={
                              <Typography
                                pr={"0.25rem"}
                                fontSize={{ xs: "1rem", md: "1rem" }}
                              >
                                ,{" "}
                              </Typography>
                            }
                          >
                            {orderItem.productVariant.stockVarieties.map(
                              (stockVariety, index) => (
                                <Typography
                                  key={index}
                                  component={"span"}
                                  fontSize={{ xs: "0.85rem", md: "1rem" }}
                                >
                                  {stockVariety.value}
                                </Typography>
                              )
                            )}
                          </Stack>
                          <Stack direction={"row"} gap={2}>
                            <Typography
                              fontWeight={300}
                              color={"text.primary"}
                              fontSize={{ xs: "0.85rem", md: "1rem" }}
                            >
                              ETB {getPrice(orderItem.productVariant.price).int}
                              .{getPrice(orderItem.productVariant.price).dec}
                            </Typography>
                            <Typography
                              fontWeight={300}
                              color={"text.secondary"}
                              fontSize={{ xs: "0.85rem", md: "1rem" }}
                            >
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
                  p={{ xs: "0 4rem", sm: "0 0rem", md: "0 2rem" }}
                  gap={2}
                  sx={{ "&>button": { borderRadius: "2rem" } }}
                >
                  <Typography textAlign={"center"} color={"text.primary"}>
                    {getLanguage("total", lang)}: {getLanguage("etb", lang)}{" "}
                    {getPrice(totalPrice).int}.{getPrice(totalPrice).dec}
                  </Typography>
                  <Button
                    size="small"
                    variant="contained"
                    color="demakkPrimary"
                    sx={{ fontWeight: "bold" }}
                  >
                    {getLanguage("writeReview", lang)}
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    color="primaryButton"
                    sx={{ fontWeight: "bold", color: "text.primary" }}
                  >
                    {getLanguage("addToCart", lang)}
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    color="primaryButton"
                    sx={{ fontWeight: "bold", color: "text.primary" }}
                  >
                    {getLanguage("remove", lang)}
                  </Button>
                </Stack>
              </Stack>
            </Stack>
            <Snackbar
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              open={copySnackBar}
              onClose={() => setCopySnackBar(false)}
              autoHideDuration={3000}
            >
              <Alert
                onClose={() => setCopySnackBar(false)}
                severity="success"
                variant="filled"
              >
                Copied to clipboard
              </Alert>
            </Snackbar>
          </>
        );
      })}
    </>
  );
}

export default OrdersTabDisplayContainer;
