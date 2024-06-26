import { ArrowForward } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

import advertProductList from "@/data/advertProductList";
import CarouselContainer from "@/component/CarouselContainer";
import SmallDeviceAdvertProduct from "./smallDeviceAdvertProduct";
import getLanguage from "@/utils/getLanguage";
import useUserStore from "@/store/user";
import { Breakpoints } from "@/data/carouselBreakPoints";

function SmallDeviceAdvertContainer() {
  const { lang } = useUserStore();
  return (
    <Box
      width={1}
      pb={"1rem"}
      display={"flex"}
      sx={{ display: { md: "none" } }}
      color={"text.primary"}
    >
      <Box
        width={1}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        p={{ xs: "0.5rem 1rem 1rem 1rem", sm: "1rem 2rem 2rem 2rem" }}
        color={"bright"}
        sx={{
          backgroundSize: "cover",
          backgroundImage: "url(/assets/images/advert-image.webp)",
          backgroundPositionX: "100%",
          backgroundPositionY: "50%",
        }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          fontSize={{ xs: "1.2rem", sm: "2rem" }}
          sx={{ cursor: "pointer" }}
        >
          <Typography fontSize={"inherit"} fontWeight={"bold"}>
            {getLanguage("anniversarySale", lang)}
          </Typography>
          <ArrowForward fontSize="inherit" />
        </Box>
        <Box display={"flex"} gap={"0.5rem"}>
          <Typography
            className="count-down-container"
            fontSize={{ xs: "0.9rem", sm: "1.4rem" }}
          ></Typography>
          <Typography
            className="count-down"
            fontSize={{ xs: "0.9rem", sm: "1.4rem" }}
          ></Typography>
        </Box>
      </Box>

      <Box minHeight={100} p={"0 0.75rem"}>
        <CarouselContainer type={Breakpoints.large}>
          {[
            ...advertProductList,
            ...advertProductList,
            ...advertProductList,
          ].map((item, index) => {
            return (
              <Box key={index} m={{ xs: "0 0.25rem", sm: "0 1rem" }} height={1}>
                <SmallDeviceAdvertProduct
                  title={item.title}
                  first={item.list[0]}
                />
              </Box>
            );
          })}
        </CarouselContainer>
      </Box>
    </Box>
  );
}

export default SmallDeviceAdvertContainer;
