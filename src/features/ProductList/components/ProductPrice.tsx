import React from "react";
import { Typography, Stack } from "@mui/material";
import getPrice from "@/utils/getPrice";
import { IAfterDiscountAndPercent } from "@/model/productModel";

interface PriceProps {
  discountedPrice: IAfterDiscountAndPercent;
  price: number;
}

export default function ProductgPrice({ price, discountedPrice }: PriceProps) {
  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"baseline"}
        spacing={1}
        sx={{ flexWrap: "wrap" }}
      >
        {discountedPrice.afterDiscount ? (
          <Typography
            sx={{
              display: "flex",
              alignItems: "baseline",
              color: "main",
              ".currency": {
                fontSize: ".8rem",
                fontWeight: "bold",
                mr: "4px",
              },
              ".price-int": {
                fontSize: "1.5rem",
                fontWeight: "bold",
              },
              ".price-dec": {
                fontSize: ".8rem",
                fontWeight: "bold",
              },
            }}
          >
            <span className="currency">ETB</span>
            <span className="price-int">
              {getPrice(discountedPrice.afterDiscount).int}
            </span>
            <span className="price-dec">
              .{getPrice(discountedPrice.afterDiscount).dec}
            </span>
          </Typography>
        ) : (
          <Typography
            sx={{
              display: "flex",
              alignItems: "baseline",
              color: "main",
              ".currency": {
                fontSize: ".8rem",
                fontWeight: "bold",
                mr: "4px",
              },
              ".price-int": {
                fontSize: "1.5rem",
                fontWeight: "bold",
              },
              ".price-dec": {
                fontSize: ".8rem",
                fontWeight: "bold",
              },
            }}
          >
            <span className="currency">ETB</span>
            <span className="price-int">{getPrice(price).int}</span>
            <span className="price-dec">.{getPrice(price).dec}</span>
          </Typography>
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
    </>
  );
}
