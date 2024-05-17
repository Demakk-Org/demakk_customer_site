import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import useProductStore from "@/store/product";
import { IProductVariant } from "@/model/productModel";

export default function Size() {
  const [itemSize, setItemSize] = useState("");
  const { product } = useProductStore();
  // const [variantName, setVariantName] = useState<Set<string>>(new Set());

  function uniqueVariant(): IProductVariant[] | undefined {
    return product
      ?.getProductForPage()
      .productVariants.reduce<IProductVariant[]>(
        (uniqueVariant, currentValue) => {
          if (
            !uniqueVariant?.some(
              (variant) => variant.imageUrl === currentValue.imageUrl
            )
          ) {
            uniqueVariant.push(currentValue);
          }
          return uniqueVariant;
        },
        []
      );
  }

  function colorVariantedImageArray(): string[] | undefined {
    let colorVariantedImageArray: string[] = [];
    uniqueVariant()?.forEach((coloredImageUrls) => {
      let colors = coloredImageUrls.imageUrl;
      colorVariantedImageArray.push(colors);
    });
    return colorVariantedImageArray;
  }

  console.log("variants", uniqueVariant());

  return (
    <Box>
      <Typography
        sx={{
          color: "text.primary",
          fontWeight: "bold",
          fontSize: ".75rem",
          mb: ".5rem",
        }}
      >
        Size: {itemSize}
      </Typography>
      <Box position={"relative"} display={"flex"} gap={".5rem"}>
        {uniqueVariant()?.map((size) => (
          <Box key={size._id.toString()}>
            {/* {colorVariantedImageArray()?.forEach(
              (sizeForOneColorVariant) => sizeForOneColorVariant
            )} */}
            {size.stockVarieties.map((sub) => {
              if (sub.class === "Sub") {
                return (
                  <Button
                    key={""}
                    variant="outlined"
                    onClick={() => setItemSize(sub.value.toString())}
                  >
                    {sub.value}
                  </Button>
                );
              } else {
                <></>;
              }
            })}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
