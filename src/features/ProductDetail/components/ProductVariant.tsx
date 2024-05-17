import useProductStore from "@/store/product";
import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { IProductVariant } from "../../../model/productModel";

interface MainVariantListProps {
  previewImage: string;
  setPreviewImage: Function;
}

export default function ProductVariant({
  setPreviewImage,
}: MainVariantListProps) {
  const { product } = useProductStore();
  const [variantName, setVariantName] = useState("");

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

  return (
    <>
      {uniqueVariant() ? (
        <Box>
          <Box>
            <Typography
              sx={{
                color: "text.primary",
                fontWeight: "bold",
                fontSize: ".75rem",
                ml: ".5rem",
              }}
            >
              Color:{variantName}
            </Typography>
          </Box>
          <Grid container gap={".5rem"}>
            {uniqueVariant()?.map((colorVariant) => (
              <Grid item key={colorVariant._id.toString()}>
                {colorVariant.stockVarieties.map((main) => {
                  if (main.class === "Main") {
                    return (
                      <Box
                        key={""}
                        component={"img"}
                        src={colorVariant.imageUrl}
                        width={"75px"}
                        height={"75px"}
                        sx={{
                          "&:hover": {
                            border: "4px solid",
                            borderColor: "dark.main",
                          },
                        }}
                        onClick={() => {
                          setVariantName(main.value.toString());
                          setPreviewImage(colorVariant.imageUrl);
                        }}
                      />
                    );
                  }
                })}
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
}
