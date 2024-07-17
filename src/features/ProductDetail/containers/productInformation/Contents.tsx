import React from "react";
import Deal from "../../components/Deal";
import { Box, Divider, Stack } from "@mui/material";
import ItemPrice from "../../components/ProductItemSellingPrice";
import FreeshipingChoice from "../../components/FreeshipingChoice";
import ItemDescription from "../../components/ItemDescription";
import RatingAndReview from "../../components/RatingAndReview";
import ProductVariant from "../../components/ProductVariant";
import { GetProductForPage } from "../../../../model/productModel";
import ProductItemSellingPrice from "../../components/ProductItemSellingPrice";
import useDiscountStore from "@/store/discount";

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
  const { discount } = useDiscountStore();
  // const { product } = useProductStore();
  return (
    <Box position={"relative"} zIndex={5}>
      <Stack>
        <Deal />
      </Stack>
      <ProductItemSellingPrice
        previewImage={previewImage}
        setPreviewImage={setPreviewImage}
        itemSize={itemSize}
        setItemSize={setItemSize}
        product={product}
        price={product?.price !== undefined ? product?.price : 0}
        discountedPrice={product
          ?.getProductForPage()
          ?.discountedPrice(discount)}
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
