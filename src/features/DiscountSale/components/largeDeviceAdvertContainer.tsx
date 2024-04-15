import { ArrowForward } from "@mui/icons-material";
import { Avatar, Box, Grid, IconButton, Typography } from "@mui/material";

import CarouselContainer from "@/component/CarouselContainer";
import LargeDeviceAdvertProduct from "./largeDeviceAdvertProduct";
import advertProductList from "@/data/advertProductList";
import { Breakpoints } from "@/data/carouselBreakPoints";
import getLanguage from "@/utils/getLanguage";
import useUserStore from "@/store/user";

function LargeDeviceAdvertContainer() {
  const { lang } = useUserStore();
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
          <Box display={"flex"} gap={"0.5rem"}>
            <Typography
              className="count-down-container"
              fontSize={"1.5rem"}
              color={"text.primary"}
            ></Typography>
            <Typography
              fontSize={"1.5rem"}
              color={"text.primary"}
              className="count-down"
            ></Typography>
          </Box>

          <Box width={1} p={"1rem 0"}>
            <Typography
              fontSize={"5rem"}
              fontWeight={"bold"}
              color={"text.primary"}
              width={1}
              lineHeight={1.2}
            >
              {getLanguage("upto", lang)} 70% {getLanguage("off", lang)}
            </Typography>
            <Typography
              fontSize={"2.3rem"}
              fontWeight={"bold"}
              color={"text.primary"}
              width={1}
            >
              {getLanguage("exploreYourFaveDealsNow", lang)}
            </Typography>
          </Box>

          <Box
            display="flex"
            sx={{
              bgcolor: "background.lighter",
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
              borderRadius={"5rem"}
              sx={{
                "&:hover": {
                  bgcolor: "action.hover",
                },
              }}
            >
              <Typography
                fontSize={"2rem"}
                fontWeight={"bold"}
                color={"secondary.light"}
              >
                {getLanguage("shopNow", lang)}
              </Typography>
              <ArrowForward
                sx={{ fontSize: "5rem", color: "secondary.light" }}
              />
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
            <CarouselContainer type={Breakpoints.large}>
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
            </CarouselContainer>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default LargeDeviceAdvertContainer;
