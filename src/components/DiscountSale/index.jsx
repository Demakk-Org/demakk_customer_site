import { ArrowForward, Whatshot } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { RiCoupon2Fill } from "react-icons/ri";
import Carousel from "react-material-ui-carousel";
import { FcLeftDown2 } from "react-icons/fc";

function DiscountSale() {
  return (
    <Box
      display={"flex"}
      p={"3rem 12rem"}
      sx={{ backgroundImage: "url(/assets/images/background.webp)" }}
      width={1}
    >
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Box display={"flex"} flexDirection={"column"} gap={6}>
            <Typography fontSize={"1.5rem"} color={"white.main"}>
              Sale ends: Mar 28, 09:59 (GMT+3)
            </Typography>

            <Box width={1} p={"1rem 0"}>
              <Typography
                fontSize={"5rem"}
                fontWeight={"bold"}
                // color={"secondary"}
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
                className="SecondExample"
                animation="slide"
                indicators={false}
                height={"auto"}
                sx={{ height: "100%" }}
                duration={600}
                interval={4000}
              >
                {Array(3)
                  .fill(1)
                  .map((item, index) => {
                    return (
                      <Box key={index} height={1} width={1} elevation={10}>
                        <Grid container spacing={2} height={1}>
                          <Grid item md={6} height={1}>
                            <Box
                              display={"flex"}
                              flexDirection={"column"}
                              p={"1rem 0.75rem"}
                              height={1}
                              gap={2}
                              borderRadius={"1rem"}
                              bgcolor={"Background"}
                            >
                              <Box
                                display={"flex"}
                                alignItems={"center"}
                                gap={2}
                                color={"primary.main"}
                              >
                                <RiCoupon2Fill fontSize={"1.4rem"} />
                                <Typography
                                  fontSize={"1.4rem"}
                                  fontWeight={"bold"}
                                >
                                  Big Saves
                                </Typography>
                              </Box>
                              <Box
                                display={"flex"}
                                flexDirection={"column"}
                                flex={1}
                              >
                                <Grid container>
                                  <Grid item md={4}>
                                    <Box
                                      width={1}
                                      component={"img"}
                                      src="/assets/images/product2.webp"
                                      sx={{ objectFit: "cover" }}
                                    />
                                  </Grid>
                                  <Grid item md={8}>
                                    <Box
                                      display={"flex"}
                                      alignItems={"center"}
                                      justifyContent={"center"}
                                      flexDirection="column"
                                      height={1}
                                    >
                                      <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                        // justifyContent={"center"}
                                      >
                                        <Box fontSize={"1.2rem"}>
                                          <FcLeftDown2
                                            fontSize={"inherit"}
                                            color="red"
                                          />
                                        </Box>
                                        <Typography
                                          fontSize={"1.2rem"}
                                          color={"primary"}
                                          fontWeight={"bold"}
                                        >
                                          -79%
                                        </Typography>
                                      </Box>
                                      <Typography
                                        fontSize={"1.2rem"}
                                        color={"primary"}
                                        fontWeight={"bold"}
                                      >
                                        US $16.78
                                      </Typography>
                                    </Box>
                                  </Grid>
                                </Grid>
                              </Box>
                              <Box
                                display={"flex"}
                                flexDirection={"column"}
                                flex={1}
                              >
                                <Grid container>
                                  <Grid item md={4}>
                                    <Box
                                      width={1}
                                      component={"img"}
                                      src="/assets/images/product5.webp"
                                      sx={{ objectFit: "cover" }}
                                    />
                                  </Grid>
                                  <Grid item md={8}>
                                    <Box
                                      display={"flex"}
                                      alignItems={"center"}
                                      justifyContent={"center"}
                                      flexDirection="column"
                                      height={1}
                                    >
                                      <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                        // justifyContent={"center"}
                                      >
                                        <Box fontSize={"1.2rem"}>
                                          <FcLeftDown2
                                            fontSize={"inherit"}
                                            color="red"
                                          />
                                        </Box>
                                        <Typography
                                          fontSize={"1.2rem"}
                                          color={"primary"}
                                          fontWeight={"bold"}
                                        >
                                          -79%
                                        </Typography>
                                      </Box>
                                      <Typography
                                        fontSize={"1.2rem"}
                                        color={"primary"}
                                        fontWeight={"bold"}
                                      >
                                        US $16.78
                                      </Typography>
                                    </Box>
                                  </Grid>
                                </Grid>
                              </Box>
                            </Box>
                          </Grid>
                          <Grid item md={6} height={1}>
                            <Box
                              display={"flex"}
                              flexDirection={"column"}
                              p={"1rem 0.75rem"}
                              height={1}
                              gap={2}
                              borderRadius={"1rem"}
                              bgcolor={"Background"}
                            >
                              <Box
                                display={"flex"}
                                alignItems={"center"}
                                gap={2}
                                color={"primary.main"}
                              >
                                <Whatshot sx={{ fontSize: "1.4rem" }} />
                                <Typography
                                  fontSize={"1.4rem"}
                                  fontWeight={"bold"}
                                >
                                  Choice
                                </Typography>
                              </Box>
                              <Box
                                display={"flex"}
                                flexDirection={"column"}
                                flex={1}
                              >
                                <Grid container>
                                  <Grid item md={4}>
                                    <Box
                                      width={1}
                                      component={"img"}
                                      src="/assets/images/product1.webp"
                                      sx={{ objectFit: "cover" }}
                                    />
                                  </Grid>
                                  <Grid item md={8}>
                                    <Box
                                      display={"flex"}
                                      alignItems={"center"}
                                      justifyContent={"center"}
                                      flexDirection="column"
                                      height={1}
                                    >
                                      <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                        // justifyContent={"center"}
                                      >
                                        <Box fontSize={"1.2rem"}>
                                          <FcLeftDown2
                                            fontSize={"inherit"}
                                            color="red"
                                          />
                                        </Box>
                                        <Typography
                                          fontSize={"1.2rem"}
                                          color={"primary"}
                                          fontWeight={"bold"}
                                        >
                                          -79%
                                        </Typography>
                                      </Box>
                                      <Typography
                                        fontSize={"1.2rem"}
                                        color={"primary"}
                                        fontWeight={"bold"}
                                      >
                                        US $16.78
                                      </Typography>
                                    </Box>
                                  </Grid>
                                </Grid>
                              </Box>
                              <Box
                                display={"flex"}
                                flexDirection={"column"}
                                flex={1}
                              >
                                <Grid container>
                                  <Grid item md={4}>
                                    <Box
                                      width={1}
                                      component={"img"}
                                      src="/assets/images/product3.webp"
                                      sx={{ objectFit: "cover" }}
                                    />
                                  </Grid>
                                  <Grid item md={8}>
                                    <Box
                                      display={"flex"}
                                      alignItems={"center"}
                                      justifyContent={"center"}
                                      flexDirection="column"
                                      height={1}
                                    >
                                      <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                        // justifyContent={"center"}
                                      >
                                        <Box fontSize={"1.2rem"}>
                                          <FcLeftDown2
                                            fontSize={"inherit"}
                                            color="red"
                                          />
                                        </Box>
                                        <Typography
                                          fontSize={"1.2rem"}
                                          color={"primary"}
                                          fontWeight={"bold"}
                                        >
                                          -54%
                                        </Typography>
                                      </Box>
                                      <Typography
                                        fontSize={"1.2rem"}
                                        color={"primary"}
                                        fontWeight={"bold"}
                                      >
                                        US $42.78
                                      </Typography>
                                    </Box>
                                  </Grid>
                                </Grid>
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    );
                  })}
              </Carousel>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DiscountSale;
