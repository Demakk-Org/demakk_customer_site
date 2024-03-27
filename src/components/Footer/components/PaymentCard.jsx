import { Box, Grid } from "@mui/material";

function PaymentCard({ url }) {
  return (
    <Grid item xs={1.5} sm={3} lg={2}>
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
