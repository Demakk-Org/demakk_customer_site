import useDiscountStore from "@/store/discount";
import useProductStore from "@/store/product";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export default function Deal() {
  const { product } = useProductStore();
  const { discount } = useDiscountStore();
  const item = product?.getProductForPage();
  console.log("from deal", item?.deals(discount));
  return (
    <Box
      borderRadius={".5rem"}
      sx={{ backgroundColor: "error.light" }}
      mt={{ xs: "-2rem", sm: ".1rem" }}
      zIndex={{ xs: 2, sm: "none" }}
    >
      {item?.discountedPrice(discount).afterDiscount ? (
        <Stack direction={"row"}>
          <Typography
            fontSize={".85rem"}
            color="bright.main"
            fontWeight={"bold"}
            p={{ xs: ".5rem 1rem 1rem 1rem", sm: ".5rem 1rem " }}
          >
            {item?.deals(discount)}
          </Typography>
        </Stack>
      ) : (
        <></>
      )}
    </Box>
  );
}
