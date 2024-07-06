import CartSectionModal from "@/features/Cart/CartSectionModal";
import SideCartComponent from "@/features/Cart/SideCartComponent";
import useCartStore from "@/store/cart";
import { Grid, Stack } from "@mui/material";
import { ReactNode } from "react";

function RootLayout({ children }: { children: ReactNode }) {
  const { cart } = useCartStore();

  return (
    <>
      <Stack>
        <Grid container>
          <Grid item md={cart?.getCart().orderItems.length ? 10.25 : 12}>
            <Stack>{children}</Stack>
          </Grid>

          <Grid
            item
            md
            display={cart?.getCart().orderItems.length ? "flex" : "none"}
          >
            <SideCartComponent />
          </Grid>
        </Grid>
      </Stack>
      <CartSectionModal />
    </>
  );
}

export default RootLayout;
