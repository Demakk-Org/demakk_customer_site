import { Box, Grid } from "@mui/material";

function PaymentCard({ url }) {
  return (
    <Grid item xs={1.5} sm={3} lg={2}>
      <Box
        borderRadius={"0.5rem"}
        bgcolor={"background.lighter"}
        width={1}
        component={"img"}
        src={url || "/assets/images/pay5.webp"}
        sx={{
          cursor: "pointer",
          border: "1px solid transparent",
          "&:hover": {
            borderColor: "text.links",
          },
        }}
      />
    </Grid>
  );
}

export default PaymentCard;
