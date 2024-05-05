import useDiscountStore from "@/store/discount";
import useProductStore from "@/store/product";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Account from "../../../pages/account/index";

export default function Deal() {
  const { product } = useProductStore();
  const { discount } = useDiscountStore();
  const item = product?.getProductForCard();
  console.log("from deal", item?.deals(discount));
  return (
    <Box borderRadius={".5rem"} sx={{ backgroundColor: "error.light" }}>
      {item?.discountedPrice(discount).afterDiscount ? (
        <Stack direction={"row"}>
          <Typography
            fontSize={".85rem"}
            color="bright.main"
            fontWeight={"bold"}
            p={".5rem 1rem "}
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
