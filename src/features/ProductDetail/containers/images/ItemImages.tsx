import React from "react";
import ItemImage from "../../components/ItemImage";
import { Box } from "@mui/material";

interface ColredImageProps {
  singleItemImages: string;
  setMainImage: Function;
}
export default function ItemImages({
  singleItemImages,
  setMainImage,
}: ColredImageProps) {
  return (
    <>
      <Box width={1} sx={{ direction: "1tr" }}>
        <ItemImage
          singleItemImages={singleItemImages}
          setMainImage={setMainImage}
        />
      </Box>
    </>
  );
}
