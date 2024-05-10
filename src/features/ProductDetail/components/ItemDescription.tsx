import { Stack, Typography } from "@mui/material";
import React from "react";
import useProductStore from "@/store/product";

export default function ItemDescription() {
  const { product } = useProductStore();
  return (
    <Stack width={1}>
      <Typography
        variant="body1"
        fontWeight={"bold"}
        sx={{ m: { xs: ".5rem", sm: ".5rem 0" }, lineHeight: 1.25 }}
        // noWrap
      >
        {product?.getProductForCard().description}
      </Typography>
    </Stack>
  );
}
