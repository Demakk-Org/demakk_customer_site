import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { FaChevronRight } from "react-icons/fa";
import { LuClipboardList } from "react-icons/lu";
import IconFromReactIcons from "@/component/IconFromReactIcons";
import useOrderStore, { orderStatus } from "@/store/order";
import getPrice from "@/utils/getPrice";
import useUserStore from "@/store/user";
import { GetOrder, Orders } from "@/model/orderModel";
import { useRouter } from "next/router";
import ImageFromFirebase from "@/component/ImageFromFirebase";
import orderStockVarietiesByMainFirst from "@/utils/orderStockVarieties";
import handleAddOrderItem from "@/api/orderItem/handleAddOrderItem";
import useTokenStore from "@/store/token";
import useCartStore from "@/store/cart";
import usePageStore from "@/store/page";
import handleDeleteOrderItem from "@/api/orderItem/handleDeleteOrderItem";
import { ImageType } from "@/component/FirebaseImageUploadComponent";
import { useTranslation } from "next-i18next";
import Loading from "@/component/Loading";
import { filterOrderByTime } from "@/utils/filterOrder";
import handleRestoreOrderItem from "@/api/orderItem/restoreOrderItem";

export const copyToClipboard = (text: string, openSnackBar: () => void) => {
  var textField = document.createElement("textarea");
  textField.innerText = text;
  document.body.appendChild(textField);
  textField.select();
  document.execCommand("copy");
  textField.remove();
  openSnackBar();
};

function OrdersTabDisplayContainer({
  filter,
  viewDeletedOrders,
}: {
  filter?: string;
  viewDeletedOrders: boolean;
}) {
  const { t } = useTranslation("order");
  const {
    orderList,
    orderStatusType,
    setOrderList,
    setSelectedOrderItem,
    setDeletedOrderList,
  } = useOrderStore();
  const { setCart } = useCartStore();
  const { token } = useTokenStore();
  const { lang } = useUserStore();
  const { setLoading, setOpenModal, setSnackBar } = usePageStore();

  const router = useRouter();

  let OrderList: GetOrder[] | null =
    orderList &&
    orderList.filter(
      (order) =>
        order.getOrder().orderStatus.toLowerCase() ==
        orderStatus.find((os) => os.orderIndex == orderStatusType)?.name
    );

  if (orderStatusType == -1) {
    OrderList = orderList;
  }

  if (orderList == null) {
    return <Loading windowMode={true} />;
  }

  if (
    !orderList?.length ||
    !filterOrderByTime({ orders: OrderList, timeFrame: filter })?.length
  ) {
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
            {t("noOrdersYet")}, {t("please", { ns: "common" })}{" "}
            <Typography
              component={"a"}
              color={"demakkPrimary.main"}
              href="/login"
              sx={{ textDecoration: "none" }}
            >
              {t("switchAccount", { ns: "auth" })}
            </Typography>{" "}
            {t("or", { ns: "common" })}{" "}
            <Typography
              component={"a"}
              color={"demakkPrimary.main"}
              href="/feedback"
              sx={{ textDecoration: "none" }}
            >
              {t("feedback", { ns: "account" })}
            </Typography>
          </Typography>
        </Stack>
      </Stack>
    );
  }

  return (
    <>
      {new Orders(orderList)
        .filterOrderByTime({ timeFrame: filter })
        .sort()
        .getOrders()
        .orders.map((order) => {
          return order.getOrder().orderItems.map((orderItem) => {
            let totalPrice =
              orderItem.productVariant.price * orderItem.quantity;
            return (
              <Stack
                key={orderItem._id.toString()}
                bgcolor={"background.light"}
                p={"1rem"}
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
                    {t(order.getOrder().orderStatus.toLowerCase(), lang)}
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
                        {t("orderDate")}:{" "}
                        {new Date(order.getOrder().orderDate).toDateString()}
                      </Typography>

                      <Stack direction={"row"} spacing={1}>
                        <Typography
                          color={"text.primary"}
                          fontWeight={300}
                          fontSize={{ xs: "0.75rem", sm: "0.8rem" }}
                          sx={{ textWrap: "nowrap" }}
                        >
                          {t("orderId")}: {order.getOrder().id}{" "}
                        </Typography>
                        <Button
                          color={"primary"}
                          onClick={() =>
                            copyToClipboard(order.getOrder().id, () =>
                              setSnackBar({
                                open: true,
                                message: t("copiedToClipboard", {
                                  ns: "common",
                                }),
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
                    </Stack>
                    {!viewDeletedOrders && (
                      <Button
                        color="primaryButton"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          borderRadius: { xs: "0.5rem", sm: "2rem" },
                          px: { xs: "0.25rem", sm: "1rem" },
                        }}
                        onClick={() => {
                          setSelectedOrderItem(orderItem._id);
                          router.push(`/order/${order.getOrder().id}`);
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
                          {t("orderDetails")}
                        </Typography>
                      </Button>
                    )}
                  </Stack>
                </Stack>

                <Stack direction={{ xs: "column", sm: "row" }} gap={2}>
                  <Stack
                    width={{ xs: 1, sm: "65%" }}
                    gap={2}
                    divider={<Divider flexItem />}
                  >
                    <Stack direction={"row"} gap={2}>
                      <Box width={{ xs: "30%", md: "20%" }}>
                        <ImageFromFirebase
                          width={"100%"}
                          quality="480p"
                          type={ImageType.product}
                          name={orderItem.productVariant.imageUrl}
                        />
                      </Box>
                      <Stack gap={{ xs: 0.25, sm: 1, md: 1.5 }} flex={1}>
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
                          {orderStockVarietiesByMainFirst(
                            orderItem.productVariant.stockVarieties
                          ).map((stockVariety, index) => (
                            <Typography
                              key={index}
                              component={"span"}
                              fontSize={{ xs: "0.85rem", md: "1rem" }}
                            >
                              {stockVariety.value}
                            </Typography>
                          ))}
                        </Stack>
                        <Stack direction={"row"} gap={2}>
                          <Typography
                            fontWeight={300}
                            color={"text.primary"}
                            fontSize={{ xs: "0.85rem", md: "1rem" }}
                          >
                            {t("etb", { ns: "common" })}{" "}
                            {getPrice(orderItem.productVariant.price).int}.
                            {getPrice(orderItem.productVariant.price).dec}
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
                  </Stack>
                  <Stack
                    flex={1}
                    p={{ xs: "0 4rem", sm: "0 0rem", md: "0 2rem" }}
                    gap={2}
                    sx={{ "&>button": { borderRadius: "2rem" } }}
                  >
                    <Typography textAlign={"center"} color={"text.primary"}>
                      {t("total", { ns: "common" })}:{" "}
                      {t("etb", { ns: "common" })} {getPrice(totalPrice).int}.
                      {getPrice(totalPrice).dec}
                    </Typography>
                    {/* <Button
                    size="small"
                    variant="contained"
                    color="demakkPrimary"
                    sx={{ fontWeight: "bold" }}
                  >
                    {t("writeReview", { ns: "actions" })}
                  </Button> */}
                    {!viewDeletedOrders && (
                      <Button
                        size="small"
                        variant="contained"
                        color={"demakkPrimary"}
                        sx={{ fontWeight: "bold", color: "text.primary" }}
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
                    )}
                    <Button
                      size="small"
                      variant="outlined"
                      color="primaryButton"
                      sx={{ fontWeight: "bold", color: "text.primary" }}
                      onClick={() =>
                        setOpenModal({
                          open: true,
                          title: t("deleteTheOrder", { ns: "modal" }),
                          description: t(
                            viewDeletedOrders
                              ? "cantUndoThisAction"
                              : "deleteTheOrderDescription",
                            {
                              ns: "modal",
                            }
                          ),
                          callBackFn: () =>
                            handleDeleteOrderItem({
                              token,
                              orderItemId: orderItem._id,
                              orderId: order.getOrder().id,
                              setLoading,
                              setOrderList: viewDeletedOrders
                                ? setDeletedOrderList
                                : setOrderList,
                            }),
                        })
                      }
                    >
                      {t("remove", { ns: "actions" })}
                    </Button>
                    {viewDeletedOrders && (
                      <Button
                        size="small"
                        variant="outlined"
                        color="primaryButton"
                        sx={{ fontWeight: "bold", color: "text.primary" }}
                        onClick={() => {
                          handleRestoreOrderItem({
                            token,
                            setDeletedOrderList,
                            setLoading,
                            orderItem,
                          });
                        }}
                      >
                        {t("restore", { ns: "actions" })}
                      </Button>
                    )}
                  </Stack>
                </Stack>
              </Stack>
            );
          });
        })}
    </>
  );
}

export default OrdersTabDisplayContainer;
