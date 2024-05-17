import React from "react";
import Deal from "../../components/Deal";
import { Box, Divider, Stack } from "@mui/material";
import ItemPrice from "../../components/ItemPrice";
import FreeshipingChoice from "../../components/FreeshipingChoice";
import ItemDescription from "../../components/ItemDescription";
import RatingAndReview from "../../components/RatingAndReview";
import ColorChoice from "../../components/ProductVariant";
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
      <ItemPrice />
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
