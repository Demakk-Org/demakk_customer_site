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
import { ChevronRightOutlined, HelpOutlined } from "@mui/icons-material";
import CartItemComponent from "./CartItemComponent";
import useTokenStore from "@/store/token";
import handleRemoveOrderItems from "./utils/handleRemoveOrderItems";
import useUserStore from "@/store/user";
import handleSelectAllOrderItems from "./utils/handleSelectAllOrderItems";
import CartSectionModal from "./CartSectionModal";
import { t } from "i18next";

function CartItemListComponent() {
  const { cart, setCart, setLoading, openModal, setOpenModal } = useCartStore();

  const { lang } = useUserStore();
  const { token } = useTokenStore();

  return (
    <Stack gap={1}>
      <Stack bgcolor={"background.light"} p={2} gap={2}>
        <Typography
          color={"text.primary"}
          fontSize={{ xs: "1.2rem", md: "1.5rem" }}
          fontWeight={600}
          className={demakkFont.className}
        >
          {t("shoppingCart")}({cart?.getCart().orderItems.length})
        </Typography>

        <Stack
          alignItems={"center"}
          direction={"row"}
          gap={1}
          divider={
            <Divider
              flexItem
              sx={{ border: "1px solid", borderColor: "text.teritiary" }}
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
                {t("selectAllItems")}
              </Typography>
            }
            sx={{ mr: 0 }}
            onClick={() =>
              handleSelectAllOrderItems({
                orderItems: cart?.getCart().orderItems || [],
                token,
                setCart,
                setLoading,
              })
            }
            checked={
              cart?.getCart().orderItems.filter((oi) => oi.isChecked == true)
                .length == cart?.getCart().orderItems.length
            }
          />
          <Button
            disableRipple
            sx={{ p: 0 }}
            onClick={() =>
              setOpenModal({
                open: true,
                title: t("removeAll"),
                description: t("removeAllContent"),
                callBackFn: () =>
                  handleRemoveOrderItems({
                    selectedOrderItems: cart?.getCart().orderItems || [],
                    token,
                    setLoading,
                    setCart,
                  }),
              })
            }
          >
            {t("deleteSelectedItems")}
          </Button>
        </Stack>

        <Button variant="contained" endIcon={<ChevronRightOutlined />}>
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
        </Button>
      </Stack>

      <Stack
        bgcolor={"background.light"}
        p={2}
        divider={<Divider flexItem />}
        gap={2}
      >
        <Stack direction={"row"} alignItems={"center"} gap={1} zIndex={1}>
          <FormControlLabel
            value="select product variant"
            control={<Radio color="warning" />}
            label={
              <Typography color={"text.primary"} fontWeight={300}>
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
                Choice items are curated, selected and shipped directly by
                AliExpress. This includes a delivery guarantee and free returns
                on all items.
              </Typography>
            </Box>
          </Box>
        </Stack>

        {cart?.getCart().orderItems.map((orderItem, index) => {
          return <CartItemComponent key={index} orderItem={orderItem} />;
        })}
      </Stack>

      <CartSectionModal />
    </Stack>
  );
}

export default CartItemListComponent;
