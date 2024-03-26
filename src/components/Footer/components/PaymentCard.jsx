import { Box, Grid } from "@mui/material";
import React from "react";

function PaymentCard({ url }) {
  return (
    <Grid item sm={3} lg={2}>
      <Box
        borderRadius={"0.5rem"}
        width={1}
        component={"img"}
        src={url || "/assets/images/pay5.webp"}
        height={"fit-content"}
      />
    </Grid>
  );
}

export default PaymentCard;
