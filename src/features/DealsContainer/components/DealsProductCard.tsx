import getPrice from "@/utils/getPrice";
import { Box, Grid, Typography } from "@mui/material";

export interface IDealsProductCard {
  image: string;
  price: number;
  discountValue: number;
  discountPercent: number;
  notShowDiscountValue?: boolean;
  notShowDiscountPercent?: boolean;
  size?: number;
}

function DealsProductCard({
  image,
  price,
  discountValue,
  discountPercent,
  notShowDiscountValue,
  notShowDiscountPercent,
  size = 1,
}: IDealsProductCard) {
  return (
    <Grid item xs={12 / size} display={"flex"} flexDirection={"column"}>
      <Box display={"flex"} flexDirection={"column"} gap={"0.5rem"}>
        <Box
          borderRadius={2}
          width={1}
          component={"img"}
          src={image}
          sx={{ backgroundSize: "cover", aspectRatio: 1 }}
        />
        <Box
          position={"relative"}
          width={1}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={"0.5rem"}
        >
          <Typography
            noWrap
            fontSize={"0.8rem"}
            fontWeight={500}
            color={"text.price"}
            minWidth={"max-content"}
          >
            ETB{" "}
            <Typography
              component={"span"}
              fontSize={"1rem"}
              fontWeight={"bold"}
            >
              {getPrice(discountValue).int}
            </Typography>
            .{getPrice(discountValue).dec}
          </Typography>
          {!notShowDiscountValue ? (
            <Typography
              title={"ETB " + getPrice(price).int + "." + getPrice(price).dec}
              noWrap
              fontSize={"0.8rem"}
              color={"text.secondary"}
              sx={{ textDecoration: "line-through" }}
            >
              ETB {getPrice(price).int}.{getPrice(price).dec}
            </Typography>
          ) : (
            <></>
          )}
          {!notShowDiscountPercent ? (
            <Typography
              position={"absolute"}
              right={0}
              top={0}
              fontSize={"1rem"}
              p={"0.25rem 0.25rem"}
              color={"text.price"}
              bgcolor={"background.lightOpaque"}
              borderRadius={"0.5rem"}
              height={1}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {discountPercent}%
            </Typography>
          ) : (
            <></>
          )}
        </Box>
      </Box>
    </Grid>
  );
}

export default DealsProductCard;
