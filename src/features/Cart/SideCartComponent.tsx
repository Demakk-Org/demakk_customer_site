import handleOrderItemUpdate from "@/api/orderItem/handleOrderItemUpdate";
import { ImageType } from "@/component/FirebaseImageUploadComponent";
import ImageFromFirebase from "@/component/ImageFromFirebase";
import { IOrderItem } from "@/model/orderModel";
import usePageStore from "@/store/page";
import useTokenStore from "@/store/token";
import {
  AddCircleOutline,
  CheckCircle,
  Circle,
  RadioButtonChecked,
  RadioButtonUncheckedOutlined,
  RemoveCircleOutline,
} from "@mui/icons-material";
import {
  Box,
  Checkbox,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import handleRemoveOrderItems from "./utils/handleRemoveOrderItems";
import useCartStore from "@/store/cart";

function SideCartComponent({
  oi,
  outOfStock,
}: {
  oi: IOrderItem;
  outOfStock?: boolean;
}) {
  const { token } = useTokenStore();
  const { setLoading, setOpenModal } = usePageStore();
  const { t } = useTranslation(["order"]);
  const { setCart } = useCartStore();

  return (
    <Grid item md={6}>
      <Stack spacing={0.5}>
        <Box
          bgcolor={"background.lighter"}
          border={"1px solid"}
          borderColor={"text.tertiary"}
          borderRadius={"0.5rem"}
          position={"relative"}
        >
          <Link href={`/item/${oi.productVariant.product._id}`}>
            <ImageFromFirebase
              width={"100%"}
              quality="240p"
              shape={"rounded"}
              name={oi.productVariant.imageUrl}
              aspectRatio={0.8}
              type={ImageType.product}
            />
          </Link>

          <Checkbox
            color="primary"
            size="small"
            checked={oi.isChecked}
            icon={
              outOfStock ? (
                <Circle color="contrast" />
              ) : (
                <RadioButtonUncheckedOutlined />
              )
            }
            checkedIcon={
              outOfStock ? <Circle color="contrast" /> : <RadioButtonChecked />
            }
            sx={{
              position: "absolute",
              top: "10%",
              left: "10%",
              p: "0",
              border: "1px solid lightgray",
              "&:hover": {
                cursor: outOfStock ? "not-allowed" : "pointer",
              },
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

          {outOfStock && (
            <Box
              width={1}
              height={1}
              position={"absolute"}
              zIndex={5}
              top={0}
              bgcolor={"background.lightDark"}
            />
          )}
        </Box>

        <Typography
          color={"text.primary"}
          fontSize={"0.9rem"}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          {t("etb", { ns: "common" })} {oi.productVariant.price}
        </Typography>

        {!outOfStock && (
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
                    title: t("removeProduct", { ns: "modal" }),
                    description: t("removeProductFromCart"),
                    callBackFn: () =>
                      handleRemoveOrderItems({
                        selectedOrderItems: [oi],
                        token,
                        setLoading,
                        setCart,
                        single: true,
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
            <Typography color={"text.primary"}>{oi.quantity}</Typography>
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
        )}
      </Stack>
    </Grid>
  );
}

export default SideCartComponent;
