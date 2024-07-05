import {
  Box,
  Button,
  Checkbox,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import handleOrderItemUpdate from "@/api/orderItem/handleOrderItemUpdate";
import ImageFromFirebase from "@/component/ImageFromFirebase";
import useCartStore from "@/store/cart";
import useTokenStore from "@/store/token";
import useUserStore from "@/store/user";
import {
  AddCircleOutline,
  CheckCircle,
  Circle,
  RemoveCircleOutline,
} from "@mui/icons-material";
import { useRouter } from "next/router";
import handleRemoveOrderItems from "./utils/handleRemoveOrderItems";
import useCheckOutStore from "@/store/checkOut";
import getSelectedOrderItems from "./utils/getSelectedOrderItems";
import { PaymentType } from "@/model/paymentMethod";
import { t } from "i18next";

function SideCartComponent() {
  const router = useRouter();
  const { cart, setCart, setLoading, setOpenModal } = useCartStore();
  const { lang, user } = useUserStore();
  const { token } = useTokenStore();
  const { setCheckOut } = useCheckOutStore();

  let totalPrice = getSelectedOrderItems({ cart }).reduce(
    (acc, orderItem) =>
      acc + orderItem.productVariant.price * orderItem.quantity,
    0
  );

  return (
    <Stack
      position={"sticky"}
      top={0}
      borderLeft={"4px solid gray"}
      height={"100vh"}
      maxHeight={"100vh"}
      spacing={2}
    >
      <Stack alignItems={"center"} spacing={1.5} p={2}>
        <Typography
          fontSize={"0.9rem"}
          fontWeight={"bold"}
          color={"text.primary"}
        >
          {t("etb")} {totalPrice}
        </Typography>

        <Button
          variant="contained"
          fullWidth
          size="small"
          sx={{ borderRadius: "3rem" }}
          onClick={() => {
            setCheckOut({
              paymentMethod: {
                type: PaymentType.MasterCard,
                value: "32435465545342",
                id: "65aa4cb7bc1de989b45eaea6",
              },
              shippingAddress: user?.getUser().shippingAddress,
              orderItems: getSelectedOrderItems({ cart }),
            });

            router.push("/checkout");
          }}
        >
          <Typography fontSize={"0.9rem"} fontWeight={"bold"}>
            {t("checkout")}
          </Typography>
        </Button>

        <Button
          variant="outlined"
          fullWidth
          size="small"
          color="brighten"
          sx={{ borderRadius: "3rem" }}
          onClick={() => router.push("/cart")}
        >
          <Typography
            fontSize={"0.9rem"}
            fontWeight={"bold"}
            color={"text.primary"}
          >
            {t("goTCart")}
          </Typography>
        </Button>
      </Stack>

      <Box px={"0.5rem"}>
        <Divider flexItem />
      </Box>

      <Stack flex={1} spacing={2} overflow={"auto"} p={2}>
        <Typography fontWeight={"bold"} color={"text.primary"}>
          {t("shippedByDemakk")}
        </Typography>

        <Stack>
          <Grid container spacing={1} rowSpacing={2}>
            {cart?.getCart().orderItems.map((oi, index) => (
              <Grid item md={6} key={index}>
                <Stack spacing={0.5}>
                  <Box
                    bgcolor={"background.lighter"}
                    border={"1px solid"}
                    borderColor={"text.teritiary"}
                    borderRadius={"0.5rem"}
                    position={"relative"}
                  >
                    <ImageFromFirebase
                      width={"100%"}
                      quality="240p"
                      shape={"rounded"}
                      name={oi.productVariant.imageUrl}
                    />

                    <Checkbox
                      color="primary"
                      size="small"
                      checked={oi.isChecked}
                      icon={<Circle />}
                      checkedIcon={<CheckCircle />}
                      sx={{
                        position: "absolute",
                        top: "10%",
                        left: "10%",
                        p: "0",
                        border: "1px solid lightgray",
                      }}
                      onClick={() =>
                        handleOrderItemUpdate({
                          orderItem: oi,
                          token,
                          setLoading,
                          setCart,
                          isChecked: !oi.isChecked,
                        })
                      }
                    />
                  </Box>

                  <Typography
                    color={"text.primary"}
                    fontSize={"0.9rem"}
                    fontWeight={"bold"}
                    textAlign={"center"}
                  >
                    {t("etb")} {oi.productVariant.price}
                  </Typography>

                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={1}
                    justifyContent={"space-between"}
                  >
                    <IconButton
                      sx={{ p: "0" }}
                      onClick={() => {
                        if (oi.quantity == 1) {
                          setOpenModal({
                            open: true,
                            title: t("removeProduct"),
                            description: t("removeProductFromCart", lang),
                            callBackFn: () =>
                              handleRemoveOrderItems({
                                selectedOrderItems: [oi],
                                token,
                                setLoading,
                                setCart,
                              }),
                          });
                          return;
                        }

                        handleOrderItemUpdate({
                          orderItem: oi,
                          quantity: oi.quantity - 1,
                          token,
                          setLoading,
                          setCart,
                        });
                      }}
                    >
                      <RemoveCircleOutline />
                    </IconButton>
                    <Typography color={"text.primary"}>
                      {oi.quantity}
                    </Typography>
                    <IconButton
                      size="small"
                      sx={{ p: "0" }}
                      onClick={() =>
                        handleOrderItemUpdate({
                          orderItem: oi,
                          quantity: oi.quantity + 1,
                          token,
                          setLoading,
                          setCart,
                        })
                      }
                    >
                      <AddCircleOutline />
                    </IconButton>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default SideCartComponent;
