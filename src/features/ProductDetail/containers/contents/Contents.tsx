import React from "react";
import Deal from "../../components/Deal";
import { Box, Divider, Stack } from "@mui/material";
import ItemPrice from "../../components/ItemPrice";
import ExtraDiscount from "../../components/ExtraDiscount";
import FreeshipingChoice from "../../components/FreeshipingChoice";
import ItemDescription from "../../components/ItemDescription";
import RatingAndReview from "../../components/RatingAndReview";
import ColorChoice from "../../components/ColorChoice";
import Size from "../../components/Size";

interface MainVariantProps {
  previewImage: string;
  setPreviewImage: Function;
}

export default function Contents({
  previewImage,
  setPreviewImage,
}: MainVariantProps) {
  return (
    <Box>
      <Stack>
        <Deal />
      </Stack>
      {/* price and discount */}
      {/* <Stack
        direction={"row"}
        alignItems={"baseline"}
        m={{ xs: "none", sm: ".75rem 0rem 0rem 0rem" }}
        sx={{
          p: { xs: ".2rem, .5rem, .2rem, .5rem", sm: "none" },
          flexWrap: "wrap",
        }}
      > */}
      <ItemPrice />
      {/* </Stack> */}
      {/* extra discount */}
      <ExtraDiscount />
      {/* choice and freeshipping */}
      <FreeshipingChoice />
      {/* product description */}
      <ItemDescription />
      {/* Rating and reviws */}
      <RatingAndReview />
      <Divider sx={{ m: "1rem 0rem" }} />
      <ColorChoice
        previewImage={previewImage}
        setPreviewImage={setPreviewImage}
      />
      <Size />
      <Divider sx={{ m: "1rem 0rem" }} />
    </Box>
  );
}
