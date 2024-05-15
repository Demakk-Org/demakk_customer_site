import useProductStore from "@/store/product";
import { Rating, Stack, Typography } from "@mui/material";
import React from "react";

export default function RatingAndReview() {
  const { product } = useProductStore();
  return (
    <>
      <Stack direction={"row"} spacing={1} m={{ xs: ".5rem" }}>
        {product?.getProductForPage().rating?.average ? (
          <Stack direction={"row"} spacing={1}>
            <Rating
              size="small"
              value={product?.getProductForPage().rating?.average}
              // defaultValue={2.5}
              precision={0.5}
              readOnly
            />
            <Typography
              color={"text.primary"}
              fontSize={".75rem"}
              fontWeight={"bold"}
            >
              {product?.getProductForPage().rating?.average}
            </Typography>
          </Stack>
        ) : (
          <></>
        )}
        <Typography color={"text.primary"} fontSize={".75rem"}>
          {45} Reviews
        </Typography>
      </Stack>
    </>
  );
}
