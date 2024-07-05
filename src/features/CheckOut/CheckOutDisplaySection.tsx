import { Grid, Stack } from "@mui/material";

import CheckOutSummaryComponent from "./CheckOutSummaryComponent";
import CheckOutShippingAddressComponent from "./CheckOutShippingAddressComponent";
import CheckOutPaymentMethodComponent from "./CheckOutPaymentMethodComponent";
import CheckOutOrderItemsComponent from "./CheckOutOrderItemsComponent";

import useCheckOutStore from "@/store/checkOut";
import GetCheckOut from "@/model/checkOutModel";

function CheckOutDisplaySection() {
  const { checkOut } = useCheckOutStore();

  if (!checkOut) return <></>;

  return (
    <Stack width={1} minHeight={"80vh"} p={{ xs: "1rem 0", md: "2rem 12rem" }}>
      <Grid container spacing={{ xs: 2, md: 4 }}>
        <Grid item xs={12} md={8}>
          <Stack spacing={2}>
            <CheckOutShippingAddressComponent
              shippingAddress={
                new GetCheckOut(checkOut).getCheckOut().shippingAddress
              }
            />
            <CheckOutPaymentMethodComponent
              paymentMethod={
                new GetCheckOut(checkOut).getCheckOut().paymentMethod
              }
            />
            <CheckOutOrderItemsComponent
              orderItems={new GetCheckOut(checkOut).getCheckOut().orderItems}
            />
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <CheckOutSummaryComponent
            orderItems={
              new GetCheckOut(checkOut).getCheckOut().orderItems || []
            }
          />
        </Grid>
      </Grid>
    </Stack>
  );
}

export default CheckOutDisplaySection;
