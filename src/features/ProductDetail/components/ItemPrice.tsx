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
      position={"relative"}
      // justifyContent={{ xs: "center", sm: "none" }}
      m={{ xs: "-.5rem 0rem", sm: ".75rem 0rem 0rem 0rem" }}
      sx={{
        pl: { xs: ".5rem", sm: "none" },
        bgcolor: "background.paper",
        borderTopLeftRadius: { xs: ".4rem", sm: "none" },
        borderTopRightRadius: { xs: ".4rem", sm: "none" },
      }}
      zIndex={{ xs: 3, sm: 0 }}
    >
      {item?.discountedPrice(discount).afterDiscount ? (
        <Typography
          mr={".5rem"}
          sx={{
            display: "flex",
            alignItems: "baseline",
            color: { xs: "text.primary", sm: "text.price" },
            ".currency": {
              fontSize: { xs: "1rem", sm: "1.4rem" },
              fontWeight: "bold",
            },
            ".price-int": {
              fontSize: { xs: "2rem", sm: "3rem" },
              fontWeight: "bold",
            },
            ".price-dec": {
              fontSize: { xs: "1rem", sm: "1.4rem" },
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
            color: { xs: "text.primary", sm: "text.price" },
            ".currency": {
              fontSize: { xs: "1rem", sm: "1.4rem" },
              fontWeight: "bold",
            },
            ".price-int": {
              fontSize: { xs: "2rem", sm: "3rem" },
              fontWeight: "bold",
            },
            ".price-dec": {
              fontSize: { xs: "1rem", sm: "1.4rem" },
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
            color: { xs: "text.oldPrice", sm: "text.primary" },
            fontSize: ".875rem",
            fontWeight: { xs: "none", sm: "bold" },
          }}
        >
          ETB{getPrice(item.price).int}.{getPrice(item.price).dec}
        </Typography>
      ) : (
        <></>
      )}
      {item?.discountedPrice(discount).discountPercent ? (
        <Typography color={"text.price"} m={"0rem 0rem 0rem .75rem"}>
          -{item?.discountedPrice(discount).discountPercent}%
        </Typography>
      ) : (
        <></>
      )}
    </Stack>
  );
}
