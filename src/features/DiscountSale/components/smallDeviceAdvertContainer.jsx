import { ArrowForward } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

import advertProductList from "@/data/advertProductList";
import CarouselContainer from "@/component/CarouselContainer";
import SmallDeviceAdvertProduct from "./smallDeviceAdvertProduct";

function SmallDeviceAdvertContainer() {
  return (
    <Box
      width={1}
      pb={"1rem"}
      display={"flex"}
      sx={{ display: { md: "none" } }}
    >
      <Box
        width={1}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        p={{ xs: "0.5rem 1rem 1rem 1rem", sm: "1rem 2rem 2rem 2rem" }}
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
          <Typography
            color={"inherit"}
            fontSize={"inherit"}
            fontWeight={"bold"}
          >
            Anniversary Sale
          </Typography>
          <ArrowForward fontSize="inherit" />
        </Box>
        <Typography
          id="count-down"
          color={"bright.main"}
          fontSize={{ xs: "0.9rem", sm: "1.4rem" }}
        >
          Sale ends: 2d 12 : 30 : 06
        </Typography>
      </Box>

      <Box minHeight={100} p={"0 0.75rem"}>
        <CarouselContainer type={"large"}>
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
