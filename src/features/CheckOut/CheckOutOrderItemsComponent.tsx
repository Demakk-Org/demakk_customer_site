import { Divider, Grid, IconButton, Stack, Typography } from "@mui/material";
import handleOrderItemUpdate from "@/api/orderItem/handleOrderItemUpdate";
import ImageFromFirebase from "@/component/ImageFromFirebase";
import { IOrderItem } from "@/model/orderModel";
import useCartStore from "@/store/cart";
import useCheckOutStore from "@/store/checkOut";
import usePageStore from "@/store/page";
import useTokenStore from "@/store/token";
import orderStockVarietiesByMainFirst from "@/utils/orderStockVarieties";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { ImageType } from "@/component/FirebaseImageUploadComponent";
import { useTranslation } from "next-i18next";

function CheckOutOrderItemsComponent({
  orderItems,
}: {
  orderItems?: IOrderItem[];
}) {
  const { t } = useTranslation();
  const { setLoading } = usePageStore();
  const { setCart } = useCartStore();
  const { token } = useTokenStore();
  const { setCheckOut, checkOut } = useCheckOutStore();

  if (!checkOut) return <></>;

  return (
    <Stack
      bgcolor={"background.light"}
      divider={<Divider flexItem />}
      spacing={2}
    >
      {orderItems &&
        orderItems.map((orderItem) => (
          <Stack key={orderItem._id.toString()} p={2}>
            <Grid container spacing={2}>
              <Grid item xs={3} md={2.25}>
                <Stack position={"relative"} width={1}>
                  <ImageFromFirebase
                    width={"100%"}
                    name={orderItem?.productVariant?.imageUrl}
                    quality={"240p"}
                    type={ImageType.product}
                  />
                </Stack>
              </Grid>

              <Grid item xs={9} md={9.75}>
                <Stack color={"text.primary"} height={1} spacing={0.5}>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography noWrap fontWeight={300}>
                      {orderItem.productVariant.product.name}
                    </Typography>
                  </Stack>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    height={1}
                  >
                    <Stack>
                      <Stack
                        color={"text.secondary"}
                        direction={"row"}
                        divider={
                          <Typography fontSize={"0.8rem"}>,&nbsp;</Typography>
                        }
                      >
                        {orderStockVarietiesByMainFirst(
                          orderItem.productVariant.stockVarieties
                        ).map((stockVariety, index) => (
                          <Typography
                            component={"span"}
                            key={index}
                            fontSize={"0.8rem"}
                            fontWeight={500}
                          >
                            {stockVariety.value}
                          </Typography>
                        ))}
                      </Stack>

                      <Typography
                        fontSize={"1rem"}
                        fontWeight={"bold"}
                        my={"auto"}
                      >
                        {t("etb")} {orderItem.productVariant.price}
                      </Typography>
                    </Stack>

                    <Stack direction={"row"} alignItems={"center"} spacing={2}>
                      <IconButton
                        disabled={orderItem.quantity <= 1}
                        onClick={() => {
                          handleOrderItemUpdate({
                            orderItem,
                            quantity: orderItem.quantity - 1,
                            token,
                            setLoading,
                            setCart,
                          });

                          setCheckOut({
                            shippingAddress: checkOut.shippingAddress,
                            paymentMethod: checkOut.paymentMethod,
                            orderItems: orderItems.map((oi) => {
                              if (oi._id === orderItem._id) {
                                return {
                                  ...oi,
                                  quantity: oi.quantity - 1,
                                };
                              }
                              return oi;
                            }),
                          });
                        }}
                      >
                        <RemoveCircleOutline />
                      </IconButton>
                      <Typography>{orderItem.quantity}</Typography>
                      <IconButton
                        disabled={
                          orderItem.quantity >=
                          orderItem.productVariant.numberOfAvailable
                        }
                        onClick={() => {
                          handleOrderItemUpdate({
                            orderItem,
                            quantity: orderItem.quantity + 1,
                            token,
                            setLoading,
                            setCart,
                          });

                          setCheckOut({
                            shippingAddress: checkOut.shippingAddress,
                            paymentMethod: checkOut.paymentMethod,
                            orderItems: orderItems.map((oi) => {
                              if (oi._id === orderItem._id) {
                                return {
                                  ...oi,
                                  quantity: oi.quantity + 1,
                                };
                              }
                              return oi;
                            }),
                          });
                        }}
                      >
                        <AddCircleOutline />
                      </IconButton>
                    </Stack>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        ))}
    </Stack>
  );
}

export default CheckOutOrderItemsComponent;
