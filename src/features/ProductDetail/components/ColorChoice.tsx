import useProductStore from "@/store/product";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

export default function ColorChoice() {
  const { product } = useProductStore();
  const [colorName, setColorName] = useState("");
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
                  width={"100px"}
                  height={"100px"}
                  sx={{}}
                  onClick={() => setColorName(variant.value)}
                />
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </>
  );
}
