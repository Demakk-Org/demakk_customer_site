import { Box, Typography } from "@mui/material";

function SmallDeviceAdvertProduct({ title, first }) {
  return (
    <Box
      width={1}
      height={1}
      p={{ xs: "0.125rem", sm: "0.5rem" }}
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
          p={{ xs: "0 0.5rem", sm: "0.25rem 1rem" }}
          borderRadius={"1.5rem"}
          color={"white.main"}
          bgcolor={"red"}
          fontSize={{ xs: "0.8rem", sm: "1.2rem" }}
          mb={{ xs: "0.25rem", sm: "0.75rem" }}
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
        p={{ xs: "0.25rem", sm: "0.75rem" }}
      >
        <Typography
          fontSize={{ xs: "0.7rem", sm: "1.4rem" }}
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
