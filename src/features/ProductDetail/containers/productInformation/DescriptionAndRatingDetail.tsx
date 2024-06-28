import React from "react";
import DescriptionDetail from "../../components/DescriptionDetail";
import { Divider, Stack, Typography } from "@mui/material";
import ProductSpecification from "../../components/ProductSpecification";
import CustomerReviewDetail from "../../components/CustomerReviewDetail";
import PaymentMethods from "../../components/PaymentMethods";

export default function DescriptionAndRatingDetail() {
  return (
    <>
      <Stack
        display={{ xs: "none", sm: "flex" }}
        width={1}
        height={"84px"}
        direction={"row"}
        position={"sticky"}
        spacing={3}
        alignItems={"center"}
        zIndex={0}
      >
        <Typography color={"text.primary"}>Description</Typography>
        <Typography color={"text.primary"}>Specification</Typography>
        <Typography color={"text.primary"}>Customer Reviews</Typography>
        <Typography color={"text.primary"}>You may also like</Typography>
      </Stack>
      <Stack width={1} direction={{ xs: "column-reverse", sm: "column" }}>
        <DescriptionDetail />
        <Divider />
        <ProductSpecification />
        <Divider
          variant="fullWidth"
          sx={{
            my: 2,
            borderBottomWidth: { xs: 8, sm: 1 },
            borderColor: "demakk.dark",
          }}
        />
        <CustomerReviewDetail />
        <Divider
          variant="fullWidth"
          sx={{
            my: 2,
            borderBottomWidth: { xs: 8, sm: 1 },
            borderColor: "demakk.dark",
          }}
        />
        <PaymentMethods />
      </Stack>
    </>
  );
}
