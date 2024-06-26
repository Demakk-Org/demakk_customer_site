import { Box, Typography } from "@mui/material";
import advertProductList from "@/data/advertProductList";
import CarouselContainer from "@/component/CarouselContainer";
import useUserStore from "@/store/user";
import getLanguage from "@/utils/getLanguage";
import { Breakpoints } from "@/data/carouselBreakPoints";
import getPrice from "@/utils/getPrice";

function DealsInCarousel() {
  const { lang } = useUserStore();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      p={"1.5rem"}
      bgcolor={"action.hover"}
      borderRadius={"1rem"}
      height={1}
    >
      <Typography
        fontSize={"1.5rem"}
        fontWeight={"bold"}
        color={"primary.main"}
      >
        {getLanguage("welcomeDeal", lang)}
      </Typography>
      <Typography fontSize={"1.1rem"} mb={3} color={"text.primary"}>
        {getLanguage("yourExclusivePrice", lang)}
      </Typography>
      <Box width={1} className="carousel--container" mt={"auto"}>
        <CarouselContainer
          type={Breakpoints.small}
          infinite={true}
          animate={true}
        >
          {advertProductList.map((item, index) => (
            <Box
              key={index}
              display={"flex"}
              flexDirection={"column"}
              gap={"0.5rem"}
            >
              <Box
                borderRadius={2}
                width={1}
                component={"img"}
                src={item.list[0].image}
                sx={{ backgroundSize: "cover", aspectRatio: 1 }}
              />
              <Box
                width={1}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"flex-end"}
                gap={"0.5rem"}
              >
                <Typography
                  fontSize={"1.1rem"}
                  fontWeight={"bold"}
                  color={"text.price"}
                >
                  US ${getPrice(item.list[0].price).int}.
                  {getPrice(item.list[0].price).dec}
                </Typography>
                <Typography
                  fontSize={"0.95rem"}
                  color={"text.secondary"}
                  sx={{ textDecoration: "line-through" }}
                >
                  US ${getPrice(item.list[0].discountValue).int}.
                  {getPrice(item.list[0].discountValue).dec}
                </Typography>
              </Box>
            </Box>
          ))}
        </CarouselContainer>
      </Box>
    </Box>
  );
}

export default DealsInCarousel;
