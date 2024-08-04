import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import CartSummaryComponent from "./CartSummaryComponent";
import CartItemListComponent from "./CartItemListComponent";
import useCartStore from "@/store/cart";
import { useRouter } from "next/router";
import useUserStore from "@/store/user";
import BottomNavigationBar from "../AccountPage/BottomNavigation";
import CartSummaryModal from "./CartSummaryModal";
import { useTranslation } from "next-i18next";

function CartDisplaySection() {
  const { t } = useTranslation("order");
  const { user } = useUserStore();
  const { cart } = useCartStore();
  const router = useRouter();

  return (
    <>
      <Stack
        width={1}
        minHeight={"80vh"}
        p={{ xs: "0.5rem 0rem", md: "2rem 12rem" }}
        justifyContent={"flex-start"}
      >
        {cart && cart?.getCart().orderItems.length > 0 ? (
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <CartItemListComponent />
            </Grid>
            <Grid item xs={12} md={4}>
              <CartSummaryComponent />
            </Grid>
          </Grid>
        ) : (
          <Stack
            p={"3rem"}
            alignItems={"center"}
            justifySelf={"center"}
            m={"auto"}
          >
            <Stack maxWidth={"400px"} spacing={4}>
              <Box
                component={"img"}
                src={"/assets/images/shopping-cart.png"}
                width="150px"
                alignSelf={"center"}
              />

              <Typography
                fontWeight={"bold"}
                color={"text.primary"}
                textAlign={"center"}
              >
                {t("noItemsYet")}
              </Typography>

              <Stack spacing={2} px={6}>
                {!user && (
                  <Button
                    fullWidth
                    variant="contained"
                    color="demakkPrimary"
                    size="large"
                    sx={{ borderRadius: "2rem" }}
                    onClick={() => router.push("/login")}
                  >
                    {t("signIn", { ns: "auth" })}
                  </Button>
                )}
                <Button
                  fullWidth
                  variant="contained"
                  color="primaryButton"
                  size="large"
                  sx={{ borderRadius: "2rem" }}
                >
                  {t("exploreItems", { ns: "actions" })}
                </Button>
              </Stack>
            </Stack>
          </Stack>
        )}
      </Stack>

      <BottomNavigationBar page={2}>
        <CartSummaryModal />
      </BottomNavigationBar>
    </>
  );
}

export default CartDisplaySection;
