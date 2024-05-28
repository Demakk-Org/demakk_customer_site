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
      <Stack direction={{ xs: "column-reverse", sm: "column" }}>
        <DescriptionDetail />
        <Divider />
        <ProductSpecification />
        <Divider
          variant="fullWidth"
          sx={{
            my: 2, // Margin top and bottom
            borderBottomWidth: 8, // Custom thickness
            borderColor: "demakk.dark", // Custom color
          }}
        />
        <CustomerReviewDetail />
      </Stack>
    </div>
  );
}
