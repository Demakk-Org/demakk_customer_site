import useUserStore from "@/store/user";
import getLanguage from "@/utils/getLanguage";
import getPrice from "@/utils/getPrice";
import { Box, Typography } from "@mui/material";

interface DealsComponentForMobileProps {
  imgUrl: string;
  price: number;
  discountPrice: number;
  ordersNumber: number;
}

function DealsComponentForMobile({
  imgUrl,
  price,
  discountPrice,
  ordersNumber,
}: DealsComponentForMobileProps) {
  const { lang } = useUserStore();
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
          src={imgUrl}
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
            {getPrice(price).int}
          </Typography>
          .{getPrice(price).dec}
        </Typography>
        <Typography
          fontSize={{ xs: "0.8rem", sm: "1.2rem" }}
          color={"text.secondary"}
          sx={{ textDecoration: "line-through" }}
        >
          US ${getPrice(discountPrice).int}.{getPrice(discountPrice).dec}
        </Typography>
        <Typography
          fontSize={{ xs: "0.8rem", sm: "1.2rem" }}
          color={"text.primary"}
        >
          {ordersNumber} {getLanguage("orders", lang)}
        </Typography>
      </Box>
    </Box>
  );
}

export default DealsComponentForMobile;
