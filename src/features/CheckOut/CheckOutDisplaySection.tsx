import { Button, Grid, Stack, Typography } from "@mui/material";

import CheckOutSummaryComponent from "./CheckOutSummaryComponent";
import CheckOutShippingAddressComponent from "./CheckOutShippingAddressComponent";
import CheckOutPaymentMethodComponent from "./CheckOutPaymentMethodComponent";
import CheckOutOrderItemsComponent from "./CheckOutOrderItemsComponent";

import useCheckOutStore from "@/store/checkOut";
import GetCheckOut from "@/model/checkOutModel";
import { CheckCircleOutline } from "@mui/icons-material";
import { useState } from "react";
import { useTranslation } from "next-i18next";

function CheckOutDisplaySection() {
  const { t } = useTranslation(["order"]);
  const { checkOut, orderId } = useCheckOutStore();
  const [isCheckOutCompleted, setIsCheckOutCompleted] = useState(true);

  if (isCheckOutCompleted) {
    return (
      <Stack
        color={"text.primary"}
        spacing={{ xs: 2, sm: 4, md: 6 }}
        p={{ xs: "1rem 0", sm: "1.5rem 0", lg: "3rem 0" }}
        margin={"auto"}
        width={{ xs: "90%", md: 800, lg: 1100, xl: 1200 }}
      >
        <Stack direction={"row"} spacing={2}>
          <CheckCircleOutline
            sx={{
              width: { xs: "35px", md: "50px" },
              height: { xs: "35px", md: "50px" },
            }}
            color="success"
          />

          <Stack direction={"column"} spacing={{ xs: 1, md: 2 }}>
            <Typography
              fontSize={{ xs: "1.5rem", md: "2rem" }}
              fontWeight={"bold"}
            >
              {t("paymentSuccessful")}
            </Typography>
            <Typography fontSize={{ xs: "1.1rem", md: "1.3rem" }}>
              {t("paymentSuccessfulText")}
            </Typography>

            <Button
              LinkComponent={"a"}
              href={`/order/${orderId}`}
              variant="contained"
              color="demakkPrimary"
            >
              {t("trackYourOrderWithLink", { ns: "actions" })}
            </Button>
          </Stack>
        </Stack>
      </Stack>
    );
  }

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
        <Grid item xs={12} md={4}>
          <CheckOutSummaryComponent
            orderItems={
              new GetCheckOut(checkOut).getCheckOut().orderItems || []
            }
            setIsCheckOutCompleted={() => setIsCheckOutCompleted(true)}
          />
        </Grid>
      </Grid>
    </Stack>
  );
}

export default CheckOutDisplaySection;
