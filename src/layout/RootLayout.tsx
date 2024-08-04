import SideCartComponentContainer from "@/features/Cart/SideCartComponentContainer";
import useCartStore from "@/store/cart";
import { Grid, Stack } from "@mui/material";
import { ReactNode } from "react";

function RootLayout({ children }: { children: ReactNode }) {
  const { cart } = useCartStore();

  return (
    <Stack width={1}>
      <Grid container width={1}>
        <Grid
          item
          md={cart?.getCart().orderItems.length ? 10.25 : 12}
          width={1}
        >
          <Stack>{children}</Stack>
        </Grid>

        <Grid
          item
          md
          display={
            cart?.getCart().orderItems.length
              ? { xs: "none", md: "flex" }
              : "none"
          }
        >
          <SideCartComponentContainer />
        </Grid>
      </Grid>
    </Stack>
  );
}

export default RootLayout;
