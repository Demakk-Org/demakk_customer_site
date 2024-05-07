import useProductStore from "@/store/product";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

interface ColredImageProps {
  singleItemImages: string;
  setMainImage: Function;
}

export default function ColorChoice({
  singleItemImages,
  setMainImage,
}: ColredImageProps) {
  const { product } = useProductStore();
  const [colorName, setColorName] = useState("");
  // const [coloredImage, setColoredImage] = useState("");

  return (
    <>
      {product?.getProductForCard().productVariants && (
        <Box>
          <Box display={"flex"}>
            <Typography
              sx={{ fontWeight: "bold", fontSize: ".75rem", ml: ".5rem" }}
            >
              Color:{colorName}
            </Typography>
          </Box>
          <Box display={"flex"} gap={".5rem"}>
            {product?.getProductForCard().productVariants.map((variant) => (
              <Box key={variant._id.toString()} sx={{}}>
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
                    setColorName(variant.value);
                    setMainImage(product.images.imageUrls[variant.imageIndex]);
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </>
  );
}
