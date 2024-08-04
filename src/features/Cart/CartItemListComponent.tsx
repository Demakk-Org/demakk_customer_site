import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import { demakkFont } from "@/pages/_app";
import useCartStore from "@/store/cart";
import { HelpOutlined } from "@mui/icons-material";
import CartItemComponent from "./CartItemComponent";
import useTokenStore from "@/store/token";
import handleRemoveOrderItems from "./utils/handleRemoveOrderItems";
import handleSelectAllOrderItems from "./utils/handleSelectAllOrderItems";
import usePageStore from "@/store/page";
import { useTranslation } from "next-i18next";
import { OrderItems } from "@/model/orderModel";

function CartItemListComponent() {
  const { t } = useTranslation("common");
  const { cart, setCart } = useCartStore();
  const { setLoading, setOpenModal } = usePageStore();

  const { token } = useTokenStore();

  let orderItems = new OrderItems(cart?.getCart().orderItems || []);

  let availableCartItems = orderItems.getAvailableOrderItems().getOrderItems();
  let outOfStockCartItems = orderItems
    .getOutOfStockOrderItems()
    .getOrderItems();

  return (
    <Stack spacing={2}>
      <Stack bgcolor={"background.light"} p={2} gap={2}>
        <Typography
          color={"text.primary"}
          fontSize={{ xs: "1.2rem", md: "1.5rem" }}
          fontWeight={600}
          className={demakkFont.className}
        >
          {t("shoppingCart", { ns: "order" })}({orderItems.getLength()})
        </Typography>

        <Stack
          alignItems={"center"}
          direction={"row"}
          gap={2}
          divider={
            <Divider
              flexItem
              sx={{ border: "1px solid", borderColor: "text.secondary" }}
            />
          }
        >
          <FormControlLabel
            value="select product variant"
            control={<Radio color="warning" />}
            label={
              <Typography
                color={"text.primary"}
                fontWeight={300}
                fontSize={{ xs: "0.8rem", md: "1rem" }}
              >
                {t("selectAllItems", { ns: "actions" })}
              </Typography>
            }
            sx={{ mr: 0 }}
            onClick={() =>
              handleSelectAllOrderItems({
                orderItems: availableCartItems,
                token,
                setCart,
                setLoading,
              })
            }
            checked={
              orderItems
                .getAvailableOrderItems()
                .getSelectedOrderItems()
                .getLength() == orderItems.getAvailableOrderItems().getLength()
            }
          />
          <Button
            disableRipple
            sx={{ p: 0 }}
            onClick={() =>
              setOpenModal({
                open: true,
                title: t("removeAll", { ns: "modal" }),
                description: t("removeAllContent", { ns: "modal" }),
                callBackFn: () =>
                  handleRemoveOrderItems({
                    selectedOrderItems: orderItems
                      .getAvailableOrderItems()
                      .getSelectedOrderItems()
                      .getOrderItems(),
                    token,
                    setLoading,
                    setCart,
                  }),
              })
            }
          >
            {t("deleteSelectedItems", { ns: "actions" })}
          </Button>
        </Stack>

        {/* <Button variant="contained" endIcon={<ChevronRightOutlined />}>
          <Typography
            color={"bright.main"}
            fontWeight={600}
            width={1}
            textAlign={"left"}
          >
            <Typography component={"span"} fontSize={"1.2rem"} fontWeight={700}>
              ChoiceDay
            </Typography>{" "}
            Ends: Jun 8, 09:59 (GMT+3)
          </Typography>
        </Button> */}
      </Stack>

      {availableCartItems.length > 0 && (
        <Stack
          bgcolor={"background.light"}
          p={2}
          divider={<Divider flexItem />}
          gap={2}
        >
          <Stack direction={"row"} alignItems={"center"} gap={1} zIndex={1}>
            <FormControlLabel
              value="select product variant"
              control={<></>}
              label={
                <Typography color={"text.primary"} fontWeight={300} pl={2}>
                  {t("shippedByDemakk")}
                </Typography>
              }
              sx={{ mr: 0 }}
            />
            <Box
              position={"relative"}
              color={"text.primary"}
              sx={{ "&:hover #info-box": { display: "block" } }}
            >
              <HelpOutlined
                color="inherit"
                sx={{ fontSize: "1rem", cursor: "pointer" }}
              />
              <Box
                id="info-box"
                position={"absolute"}
                width={"250px"}
                top={"100%"}
                left={"calc(50% - 125px)"}
                bgcolor={"background.lightOpaque"}
                p={1.5}
                borderRadius={2}
                display={"none"}
              >
                <Typography fontSize={"0.85rem"}>
                  {t("choiceDeliveryPolicyDescription", { ns: "policies" })}
                </Typography>
              </Box>
            </Box>
          </Stack>

          {availableCartItems.map((orderItem, index) => {
            return <CartItemComponent key={index} orderItem={orderItem} />;
          })}
        </Stack>
      )}

      {outOfStockCartItems.length > 0 && (
        <Stack
          bgcolor={"background.light"}
          p={2}
          divider={<Divider flexItem />}
          gap={2}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={1}
            zIndex={1}
          >
            <Typography
              color={"text.primary"}
              fontSize={{ xs: "1.2rem", md: "1.2rem" }}
              fontWeight={600}
              className={demakkFont.className}
            >
              {t("unavailable", { ns: "order" })}({outOfStockCartItems.length})
            </Typography>

            <Button
              color="primaryButton"
              size="medium"
              onClick={() => {
                handleRemoveOrderItems({
                  selectedOrderItems: outOfStockCartItems,
                  token,
                  setCart,
                  setLoading,
                });
              }}
            >
              {t("remove", { ns: "actions" })}
            </Button>
          </Stack>

          {outOfStockCartItems.map((orderItem, index) => {
            return (
              <CartItemComponent
                key={index}
                orderItem={orderItem}
                outOfStock={true}
              />
            );
          })}
        </Stack>
      )}
    </Stack>
  );
}

export default CartItemListComponent;
