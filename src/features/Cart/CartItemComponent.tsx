import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  IconButton,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import {
  AddCircleOutline,
  CheckBox,
  CheckBoxOutlineBlank,
  ChevronRightOutlined,
  Circle,
  CircleOutlined,
  DeleteOutlined,
  FavoriteBorder,
  FavoriteOutlined,
  InfoOutlined,
  RadioButtonChecked,
  RadioButtonUncheckedOutlined,
  RemoveCircleOutline,
} from "@mui/icons-material";
import ImageFromFirebase from "@/component/ImageFromFirebase";
import { IOrderItem } from "@/model/orderModel";
import useCartStore from "@/store/cart";
import useTokenStore from "@/store/token";
import useUserStore from "@/store/user";
import orderStockVarietiesByMainFirst from "@/utils/orderStockVarieties";
import handleRemoveOrderItems from "./utils/handleRemoveOrderItems";
import handleOrderItemQuantity from "../../api/orderItem/handleOrderItemUpdate";
import handleLikeProduct from "../Product/ProductsCard/utils/handleLikeProduct";
import handleOrderItemUpdate from "../../api/orderItem/handleOrderItemUpdate";
import usePageStore from "@/store/page";
import { ImageType } from "@/component/FirebaseImageUploadComponent";
import { useTranslation } from "next-i18next";
import { demakkFont } from "@/pages/_app";

interface CartItemComponentProps {
  orderItem: IOrderItem;
  outOfStock?: boolean;
}

function CartItemComponent({ orderItem, outOfStock }: CartItemComponentProps) {
  const { t } = useTranslation("modal");
  const { user, setUser } = useUserStore();
  const { setCart } = useCartStore();
  const { setLoading, setOpenModal, setSnackBar } = usePageStore();
  const { token } = useTokenStore();

  return (
    <Stack zIndex={0}>
      <Grid container spacing={{ xs: 1, md: 2 }}>
        <Grid item xs={1.25} md={0.75}>
          <Stack justifyContent={"center"} height={1}>
            <FormControlLabel
              value="select product variant"
              control={
                <Radio
                  color="warning"
                  icon={
                    outOfStock ? (
                      <Circle color="contrast" />
                    ) : (
                      <RadioButtonUncheckedOutlined />
                    )
                  }
                  checkedIcon={
                    outOfStock ? (
                      <Circle color="contrast" />
                    ) : (
                      <RadioButtonChecked />
                    )
                  }
                  sx={{
                    "&:hover": {
                      cursor: outOfStock ? "not-allowed" : "pointer",
                    },
                  }}
                />
              }
              label={""}
              sx={{ mr: 0 }}
              checked={orderItem.isChecked}
              onClick={() => {
                if (outOfStock) return;

                handleOrderItemUpdate({
                  orderItem,
                  token,
                  setLoading,
                  setCart,
                  isChecked: !orderItem.isChecked,
                });
              }}
            />
          </Stack>
        </Grid>

        <Grid item xs={3.75} md={2.25}>
          <Stack position={"relative"} width={1}>
            <ImageFromFirebase
              width={"100%"}
              name={orderItem?.productVariant?.imageUrl}
              quality={"240p"}
              type={ImageType.product}
            />

            {outOfStock && (
              <Box
                width={1}
                height={1}
                position={"absolute"}
                zIndex={5}
                bgcolor={"background.lightDark"}
              />
            )}

            {!outOfStock && orderItem.productVariant.numberOfAvailable < 10 && (
              <Stack
                position={"absolute"}
                bottom={0}
                left={0}
                bgcolor={"background.lightDark"}
                width={1}
                py={"2px"}
              >
                <Typography
                  textAlign={"center"}
                  fontSize={"0.8rem"}
                  color={"text.primary"}
                >
                  {orderItem.productVariant.numberOfAvailable}{" "}
                  {t("left", { ns: "common" })}
                </Typography>
              </Stack>
            )}
          </Stack>
        </Grid>

        <Grid item xs={7} md={9}>
          <Stack color={"text.primary"} height={1} spacing={0.5}>
            <Stack
              direction={"row"}
              alignItems={"flex-start"}
              justifyContent={"space-between"}
            >
              <Typography
                noWrap
                fontWeight={300}
                fontSize={{ xs: "0.8rem", md: "1rem" }}
                color={outOfStock ? "contrast.dark" : "inherit"}
              >
                {orderItem.productVariant.product.name}
              </Typography>

              <Stack direction={"row"}>
                {!outOfStock && (
                  <IconButton
                    sx={{ padding: { xs: "2px", md: "6px" } }}
                    onClick={() =>
                      handleLikeProduct({ token, orderItem, setUser })
                    }
                  >
                    {user
                      ?.getUser()
                      ?.favs.includes(orderItem.productVariant.product._id) ? (
                      <FavoriteOutlined fontSize="small" />
                    ) : (
                      <FavoriteBorder fontSize="small" />
                    )}
                  </IconButton>
                )}

                <IconButton
                  sx={{ display: { xs: "none", md: "flex" } }}
                  onClick={() =>
                    setOpenModal({
                      open: true,
                      title: t("removeProduct"),
                      description: t("removeProductFromCart"),
                      callBackFn: () =>
                        handleRemoveOrderItems({
                          selectedOrderItems: [orderItem],
                          token,
                          setLoading,
                          setCart,
                        }),
                    })
                  }
                >
                  <DeleteOutlined fontSize="small" />
                </IconButton>
              </Stack>
            </Stack>

            {!outOfStock ? (
              <>
                <Stack>
                  <Button
                    variant="contained"
                    endIcon={<ChevronRightOutlined />}
                    size="small"
                    color="brighten"
                    sx={{ alignSelf: "flex-start", borderRadius: "2rem" }}
                  >
                    <Stack
                      direction={"row"}
                      divider={<Typography fontSize={"0.8rem"}>/</Typography>}
                    >
                      {orderStockVarietiesByMainFirst(
                        orderItem.productVariant.stockVarieties
                      ).map((stockVariety, index) => (
                        <Typography
                          key={index}
                          fontSize={"0.8rem"}
                          fontWeight={500}
                        >
                          {stockVariety.value}
                        </Typography>
                      ))}
                    </Stack>
                  </Button>
                </Stack>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  height={1}
                >
                  <Typography fontSize={"1rem"} fontWeight={"bold"} my={"auto"}>
                    {t("etb", { ns: "common" })}{" "}
                    {orderItem.productVariant.price}
                  </Typography>

                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={{ xs: 1, md: 2 }}
                  >
                    <IconButton
                      sx={{ p: { xs: "2px", md: "6px" } }}
                      onClick={() => {
                        if (orderItem.quantity == 1) {
                          setOpenModal({
                            open: true,
                            title: t("removeProduct"),
                            description: t("removeProductFromCart"),
                            callBackFn: () =>
                              handleRemoveOrderItems({
                                selectedOrderItems: [orderItem],
                                token,
                                setLoading,
                                setCart,
                                single: true,
                              }),
                          });
                          return;
                        }

                        handleOrderItemQuantity({
                          orderItem,
                          quantity: orderItem.quantity - 1,
                          token,
                          setLoading,
                          setCart,
                        });
                      }}
                    >
                      <RemoveCircleOutline />
                    </IconButton>
                    <Typography>{orderItem.quantity}</Typography>
                    <IconButton
                      sx={{ p: { xs: "2px", md: "6px" } }}
                      onClick={() => {
                        if (
                          orderItem.productVariant.numberOfAvailable <
                          orderItem.quantity + 1
                        ) {
                          setSnackBar({
                            open: true,
                            message: t("reachedTheLimit"),
                            type: "error",
                          });
                          return;
                        }

                        handleOrderItemQuantity({
                          orderItem,
                          quantity: orderItem.quantity + 1,
                          token,
                          setLoading,
                          setCart,
                        });
                      }}
                    >
                      <AddCircleOutline />
                    </IconButton>
                  </Stack>
                </Stack>
              </>
            ) : (
              <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <InfoOutlined color="error" />
                <Typography
                  fontSize={"0.9rem"}
                  fontWeight={500}
                  color={"error.main"}
                  className={demakkFont.className}
                >
                  {t("itemUnavailable", { ns: "order" })}
                </Typography>
              </Stack>
            )}
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default CartItemComponent;
