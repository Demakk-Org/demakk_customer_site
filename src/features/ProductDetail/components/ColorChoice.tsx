import useProductStore from "@/store/product";
import { Box, Typography } from "@mui/material";
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

  return (
    <>
      {product?.getProductForCard().productVariants ? (
        <Box>
          <Box>
            <Typography
              sx={{ fontWeight: "bold", fontSize: ".75rem", ml: ".5rem" }}
            >
              Color:{variantName}
            </Typography>
          </Box>
          <Box display={"flex"} gap={".5rem"}>
            {product?.getProductForCard().productVariants.map((variant) => (
              <Box key={variant._id.toString()}>
                <Box
                  component={"img"}
                  src={product.images.imageUrls[variant.imageIndex]}
                  width={"75px"}
                  height={"75px"}
                  sx={{
                    "&:hover": {
                      border: ".1rem solid",
                      borderColor: "dark.main",
                    },
                  }}
                  onClick={() => {
                    setVariantName(variant.value);
                    setPreviewImage(
                      product.images.imageUrls[variant.imageIndex]
                    );
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
}
