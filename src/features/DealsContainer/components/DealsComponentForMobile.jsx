import { Box, Typography } from "@mui/material";

function DealsComponentForMobile({
  imgUrl,
  price,
  discountPrice,
  ordersNumber,
}) {
  return (
    <Box
      width={1}
      p={{ xs: "0 0.25rem", sm: "0 1rem" }}
      sx={{ userSelect: "none" }}
    >
      <Box
        width={1}
        display={"flex"}
        flexDirection={"column"}
        bgcolor={"background.lighter"}
        p={"0.5rem"}
        borderRadius={"0.75rem"}
      >
        <Box
          component={"img"}
          width={1}
          sx={{ aspectRatio: 1, borderRadius: "0.5rem" }}
          src={imgUrl || "/assets/images/product5.webp"}
        />
        <Typography
          fontSize={{ xs: "0.8rem", sm: "1.4rem" }}
          fontWeight={"bold"}
          color={"text.price"}
          mt={1}
          sx={{ textWrap: "nowrap" }}
        >
          US $
          <Typography
            component={"span"}
            fontSize={{ xs: "1.2rem", sm: "1.8rem" }}
          >
            {price || "18"}
          </Typography>
          .55
        </Typography>
        <Typography
          fontSize={{ xs: "0.8rem", sm: "1.2rem" }}
          color={"text.secondary"}
          sx={{ textDecoration: "line-through" }}
        >
          US ${discountPrice || "36"}.56
        </Typography>
        <Typography
          fontSize={{ xs: "0.8rem", sm: "1.2rem" }}
          color={"text.primary"}
        >
          {ordersNumber || "596"} orders
        </Typography>
      </Box>
    </Box>
  );
}

export default DealsComponentForMobile;
