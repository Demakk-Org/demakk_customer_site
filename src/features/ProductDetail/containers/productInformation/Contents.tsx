import React from "react";
import Deal from "../../components/Deal";
import { Box, Divider, Stack } from "@mui/material";
import ItemPrice from "../../components/ItemPrice";
import FreeshipingChoice from "../../components/FreeshipingChoice";
import ItemDescription from "../../components/ItemDescription";
import RatingAndReview from "../../components/RatingAndReview";
import ProductVariant from "../../components/ProductVariant";
import { GetProductForPage } from "../../../../model/productModel";

interface VariantProps {
  previewImage: string;
  setPreviewImage: Function;
  itemSize: string;
  setItemSize: Function;
  product: GetProductForPage | null;
}

export default function Contents({
  previewImage,
  setPreviewImage,
  itemSize,
  setItemSize,
  product,
}: VariantProps) {
  // const { product } = useProductStore();
  return (
    <Box position={"relative"} zIndex={5}>
      <Stack>
        <Deal />
      </Stack>
      <ItemPrice
        previewImage={previewImage}
        setPreviewImage={setPreviewImage}
        itemSize={itemSize}
        setItemSize={setItemSize}
      />
      {/* choice and freeshipping */}
      <FreeshipingChoice />
      {/* product description */}
      <ItemDescription />
      {/* Rating and reviws */}
      <RatingAndReview />
      <Divider sx={{ m: "1rem 0rem" }} />
      <ProductVariant
        previewImage={previewImage}
        setPreviewImage={setPreviewImage}
        itemSize={itemSize}
        setItemSize={setItemSize}
      />
      <Divider sx={{ m: "1rem 0rem" }} />
    </Box>
  );
}
