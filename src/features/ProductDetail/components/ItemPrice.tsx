import useDiscountStore from "@/store/discount";
import useProductStore from "@/store/product";
import getPrice from "@/utils/getPrice";
import { Stack, Typography } from "@mui/material";
import React from "react";

export default function ItemPrice() {
  const { product } = useProductStore();
  const { discount } = useDiscountStore();
  const item = product?.getProductForCard();

  return (
    <Stack
      direction={"row"}
      alignItems={"baseline"}
      m={".75rem 0rem 0rem 0rem"}
    >
      {item?.discountedPrice(discount).afterDiscount ? (
        <Typography
          mr={".5rem"}
          sx={{
            display: "flex",
            alignItems: "baseline",
            color: "text.price",
            ".currency": {
              fontSize: "1.4rem",
              fontWeight: "bold",
            },
            ".price-int": {
              fontFamily:
                "Open Sans, Roboto, Arial, Helvetica, sans-serif, SimSun",
              fontSize: "2.3rem",
              fontWeight: "bold",
            },
            ".price-dec": {
              fontSize: "1.4rem",
              fontWeight: "bold",
            },
          }}
        >
          <span className="currency">ETB</span>
          <span className="price-int">
            {getPrice(item?.discountedPrice(discount).afterDiscount).int}
          </span>
          <span className="price-dec">
            .{getPrice(item?.discountedPrice(discount).afterDiscount).dec}
          </span>
        </Typography>
      ) : (
        <Typography
          mr={".5rem"}
          sx={{
            display: "flex",
            alignItems: "baseline",
            color: "text.price",
            ".currency": {
              fontSize: "1.5rem",
              fontWeight: "bold",
            },
            ".price-int": {
              fontSize: "3rem",
              fontWeight: "bold",
            },
            ".price-dec": {
              fontSize: "1.5rem",
              fontWeight: "bold",
            },
          }}
        >
          <span className="currency">ETB</span>
          <span className="price-int">
            {getPrice(item ? item.price : 0).int}
          </span>
          <span className="price-dec">
            .{getPrice(item ? item.price : 0).dec}
          </span>
        </Typography>
      )}

      {item?.discountedPrice(discount).afterDiscount ? (
        <Typography
          sx={{
            textDecoration: "line-through",
            color: "text.primary",
            fontSize: ".875rem",
            fontWeight: "bold",
          }}
        >
          ETB{getPrice(item.price).int}.{getPrice(item.price).dec}
        </Typography>
      ) : (
        <></>
      )}
      {item?.discountedPrice(discount).discountPercent ? (
        <Typography color={"error.main"} m={"0rem 0rem 0rem .75rem"}>
          -{item?.discountedPrice(discount).discountPercent}%
        </Typography>
      ) : (
        <></>
      )}
    </Stack>
  );
}
