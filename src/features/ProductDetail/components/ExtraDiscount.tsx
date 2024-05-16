import useDiscountStore from "@/store/discount";
import useProductStore from "@/store/product";
import { Stack, Typography } from "@mui/material";
import React from "react";

export default function ExtraDiscount() {
  return (
    <>
      <Stack>
        <Typography
          title="Extra 2% off with discont"
          m={{ xs: ".5rem", sm: "5rem 0rem 0rem 0rem 0rem" }}
          color={{ xs: "text.main", sm: "text.price" }}
          fontSize={".7rem"}
          fontWeight={{ xs: "none", sm: "bold" }}
        >
          Extra % off with discont
        </Typography>
      </Stack>
    </>
  );
}
