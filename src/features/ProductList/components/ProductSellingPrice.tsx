import React from "react";
import { Stack, Typography } from "@mui/material";

import { IAfterDiscountAndPercent } from "@/model/productModel";
import ProductPrice from "@/component/ProductPrice";
import getPrice from "@/utils/getPrice";

interface PriceProps {
  discountedPrice: IAfterDiscountAndPercent;
  price: number;
}

export default function ProductSellingPrice({
  price,
  discountedPrice,
}: PriceProps) {
  return (
    <Stack
      direction={"row"}
      alignItems={"baseline"}
      spacing={1}
      sx={{ flexWrap: "wrap" }}
    >
      {discountedPrice.afterDiscount ? (
        <ProductPrice
          prodctPriceInt={getPrice(discountedPrice.afterDiscount).int}
          productPriceDec={getPrice(discountedPrice.afterDiscount).dec}
        />
      ) : (
        <ProductPrice
          prodctPriceInt={getPrice(price).int}
          productPriceDec={getPrice(price).dec}
        />
      )}

      {discountedPrice.afterDiscount ? (
        <Typography
          sx={{
            textDecoration: "line-through",
            color: "text.blurred",
            fontSize: ".8rem",
          }}
        >
          ETB{getPrice(price).int}.{getPrice(price).dec}
        </Typography>
      ) : (
        <></>
      )}
    </Stack>
  );
}
