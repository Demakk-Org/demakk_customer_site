import { ArrowForward } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import SmallDeviceAdvertProduct from "./smallDeviceAdvertProduct";
import carouselBreakPoints from "@/data/carouselBreakPoints";
import advertProductList from "@/data/advertProductList";
import { countDown } from "@/utils/countDown";
import { Montserrat } from "next/font/google";

const font = Montserrat({ subsets: ["cyrillic"] });

function SmallDeviceAdvertContainer() {
  useEffect(() => {
    if (document) {
      countDown();
    }
  });
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
          color={"secondaryLight.main"}
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
          color={"white.main"}
          fontSize={{ xs: "0.9rem", sm: "1.4rem" }}
          className={font.className}
        >
          Sale ends: 2d 12 : 30 : 06
        </Typography>
      </Box>

      <Box minHeight={100} p={"0 0.75rem"} bgcolor={"#FF2251"}>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={carouselBreakPoints.small}
          ssr={true}
          infinite={false}
          customTransition="all 0.5s"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
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
        </Carousel>
      </Box>
    </Box>
  );
}

export default SmallDeviceAdvertContainer;
