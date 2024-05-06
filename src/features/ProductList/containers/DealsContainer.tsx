import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import useProductStore from "../../../store/product";
import useDiscountStore from "@/store/discount";

interface DealProps {
  deal: string;
}

export default function DealsContainer({ deal }: DealProps) {
  const { product } = useProductStore();
  const { discount } = useDiscountStore();
  // let item = product.getProductForCard()()
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      alignItems={"center"}
      divider={
        <Box
          height={".3rem"}
          minWidth={".3rem"}
          m={"0 .25rem 0 .25rem"}
          borderRadius={"50%"}
          sx={{ backgroundColor: "error.loght" }}
        ></Box>
      }
    >
      <Typography
        minWidth={"max-content"}
        fontSize={".6rem"}
        fontWeight={"bold"}
        color={"bright.main"}
        p={"0rem .4rem .2rem .4rem "}
        borderRadius={".2rem"}
        sx={{ backgroundColor: "error.light" }}
      >
        {deal}
      </Typography>

      {/* {extraDiscount && (
        <Typography
          title="Extra 2% off with discont"
          noWrap
          color={"text.price"}
          fontSize={".7rem"}
          fontWeight={"bold"}
        >
          Extra {extraDiscount}% off with discont
        </Typography>
      )}
      {discountPercent && (
        <Typography color={"text.price"} fontSize={".7rem"} fontWeight={"bold"}>
          -{discountPercent}%
        </Typography>
      )} */}
    </Stack>
  );
}
