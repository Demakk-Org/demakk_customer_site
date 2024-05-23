import React from "react";
import DescriptionDetail from "../../components/DescriptionDetail";
import { Box, Divider, Stack, Typography } from "@mui/material";
import ProductSpecification from "../../components/ProductSpecification";
import CustomerReviewDetail from "../../components/CustomerReviewDetail";

export default function DescriptionAndRatingDetail() {
  return (
    <div>
      <Stack
        display={{ xs: "none", sm: "flex" }}
        width={1}
        height={"84px"}
        direction={"row"}
        position={"sticky"}
        spacing={3}
        alignItems={"center"}
      >
        <Typography color={"text.primary"}>Description</Typography>
        <Typography color={"text.primary"}>Specification</Typography>
        <Typography color={"text.primary"}>Customer Reviews</Typography>
        <Typography color={"text.primary"}>You may also like</Typography>
      </Stack>
      <Box display={{ xs: "none", sm: "flex" }}>
        <DescriptionDetail />
        <Divider />
        <ProductSpecification />
        <Divider />
        <CustomerReviewDetail />
      </Box>
    </div>
  );
}
