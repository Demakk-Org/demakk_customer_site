import { Box, Grid } from "@mui/material";

interface PaymentCardInterface {
  url: string;
  xs?: number;
  sm?: number;
  lg?: number;
}

function PaymentCard({ url, xs, sm, lg }: PaymentCardInterface) {
  return (
    <Grid item xs={xs || 1.5} sm={sm || 3} lg={lg || 2}>
      <Box
        borderRadius={"0.25rem"}
        bgcolor={"background.lightOpaque"}
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
