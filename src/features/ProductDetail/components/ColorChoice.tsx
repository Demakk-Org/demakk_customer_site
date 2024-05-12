import useProductStore from "@/store/product";
import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

interface MainVariantListProps {
  previewImage: string;
  setPreviewImage: Function;
}

export default function ColorChoice({
  previewImage,
  setPreviewImage,
}: MainVariantListProps) {
  const { product } = useProductStore();
  const [variantName, setVariantName] = useState("");
  // const [coloredImage, setColoredImage] = useState("");
  console.log("from page", product);

  return (
    <>
      {product?.getProductForPage().productVariants ? (
        <Box>
          <Box>
            <Typography
              sx={{ fontWeight: "bold", fontSize: ".75rem", ml: ".5rem" }}
            >
              Color:{variantName}
            </Typography>
          </Box>
          <Grid container gap={".5rem"}>
            {product?.getProductForPage().productVariants?.map((variant) => (
              <Grid item key={variant}>
                <Box
                  component={"img"}
                  src={variant.imageUrl}
                  width={"75px"}
                  height={"75px"}
                  sx={{
                    "&:hover": {
                      border: ".1rem solid",
                      borderColor: "dark.main",
                    },
                  }}
                  onClick={() => {
                    setVariantName(variant.stockVarieties[0].value[0]);
                    setPreviewImage(
                      product.images.imageUrls[variant.imageIndex]
                    );
                  }}
                />
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
