import { Box, Typography } from "@mui/material";
import React from "react";

function SmallDeviceAdvertProduct({ title, first }) {
  return (
    <Box
      width={1}
      height={1}
      p={"0.125rem"}
      borderRadius={"0.5rem"}
      sx={{ bgcolor: "Background", userSelect: "none", cursor: "pointer" }}
      display={"flex"}
      flexDirection={"column"}
    >
      <Box
        width={1}
        display={"flex"}
        alignItems="flex-end"
        justifyContent={"center"}
        sx={{
          backgroundImage: `url(${first.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          aspectRatio: 1,
          borderRadius: "0.5rem",
          border: "1px solid gray",
        }}
      >
        <Typography
          p={"0 0.5rem"}
          borderRadius={"1.5rem"}
          color={"white.main"}
          bgcolor={"red"}
          fontSize={"0.8rem"}
          mb={"0.25rem"}
          fontWeight={"bold"}
        >
          {first.discountValue}%
        </Typography>
      </Box>
      <Box
        display={"flex"}
        flex={1}
        alignItems={"center"}
        justifyContent={"center"}
        p={"0.25rem"}
      >
        <Typography
          fontSize={"0.7rem"}
          textAlign={"center"}
          fontWeight={"bold"}
        >
          {title || "Wonderful women"}
        </Typography>
      </Box>
    </Box>
  );
}

export default SmallDeviceAdvertProduct;
