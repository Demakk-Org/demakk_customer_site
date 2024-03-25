import { ArrowForward } from "@mui/icons-material";
import { Avatar, Box, Grid, IconButton, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import LargeDeviceAdvertProduct from "./largeDeviceAdvertProduct";
import advertProductList from "@/data/advertProductList";
import "react-multi-carousel/lib/styles.css";
import carouselBreakPoints from "@/data/carouselBreakPoints";

function LargeDeviceAdvertContainer() {
  return (
    <Grid container spacing={2} sx={{ display: { xs: "none", md: "flex" } }}>
      <Grid item md={6}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={2}
          justifyContent={"space-between"}
          height={1}
        >
          <Typography fontSize={"1.5rem"} color={"white.main"}>
            Sale ends: Mar 28, 09:59 (GMT+3)
          </Typography>

          <Box width={1} p={"1rem 0"}>
            <Typography
              fontSize={"5rem"}
              fontWeight={"bold"}
              sx={{ color: "secondaryLight.main" }}
              width={1}
              lineHeight={1.2}
            >
              Up to 70% off
            </Typography>
            <Typography
              fontSize={"2.3rem"}
              fontWeight={"bold"}
              color={"white.main"}
              width={1}
            >
              Explore your fave deals now
            </Typography>
          </Box>

          <Box
            display="flex"
            sx={{
              bgcolor: "secondaryLight.main",
              borderRadius: "10rem",
              cursor: "pointer",
            }}
            p={2}
            gap={1}
          >
            <IconButton sx={{ width: 90, height: 90, p: 0 }}>
              <Avatar
                sx={{ width: 1, height: 1 }}
                src="/assets/images/product.webp"
              />
            </IconButton>

            <IconButton
              sx={{
                width: 90,
                height: 90,
                border: "4px solid white",
                p: 0,
              }}
            >
              <Avatar
                sx={{ width: 1, height: 1 }}
                src="/assets/images/product1.webp"
              />
            </IconButton>

            <Box
              flex={1}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-around"}
            >
              <Typography
                fontSize={"2rem"}
                fontWeight={"bold"}
                color={"primary"}
              >
                Shop now
              </Typography>
              <ArrowForward color="primary" sx={{ fontSize: "5rem" }} />
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item md={6}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={4}
          position={"relative"}
          height={1}
        >
          <Box
            position={"absolute"}
            top={-30}
            left={0}
            component={"img"}
            width={1}
            src="/assets/images/animated-image-white.gif"
            alt="advert-animated-image"
          />
          <Box mt={20} className="advert-carousel-preview" flex={1}>
            <Carousel
              swipeable={false}
              draggable={true}
              showDots={false}
              responsive={carouselBreakPoints}
              ssr={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              customTransition="all 0.5s"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {advertProductList.map((item, index) => {
                return (
                  <Box key={index} m={"0 0.5rem"}>
                    <LargeDeviceAdvertProduct
                      title={item.title}
                      first={item.list[0]}
                      second={item.list[1]}
                    />
                  </Box>
                );
              })}
            </Carousel>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default LargeDeviceAdvertContainer;
