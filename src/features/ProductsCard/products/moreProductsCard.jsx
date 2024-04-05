import React, { useState } from "react";
import {
  Card,
  CardMedia,
  Box,
  Typography,
  Button,
  Rating,
  Grid,
  Container,
} from "@mui/material";
// import from '@mui/material/Rating';
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import data from "../../../../utils/data"; //don't create folder outside src/, move the product data to src/data

//you don't need hovered state
//don't use attributes that doesn't exsits //check the api

export default function MoreProductsCard() {
  const [hovered, setHovered] = useState(false);
  return (
    <Container
      display={"flex"}
      flexDirection={"column"}
      sx={{ marginTop: "32px" }}
    >
      <Box display={"flex"} marginBottom={"8px"}>
        <Typography>more to love</Typography>
      </Box>
      <Grid container>
        {data.products.map((product) => (
          <Grid item md={2.4} xs={6} key={product}>
            <Box
              width={1}
              maxWidth="230px"
              paddingRight={"8px"}
              paddingLeft={"8px"}
              marginBottom={"24px"}
              onMouseEnter={() => setHovered(product)}
              onMouseLeave={() => setHovered(false)}
              sx={{
                position: "relative",
                "&:hover": {
                  transition: "0.1s", // Add smooth transition effect
                  transform: "scale(1.01)",
                  zIndex: 5,
                },
              }}
            >
              <Card //don't use attributes that don't exist
                // width={1}
                // display={"flex"}
                // position={"relative"}
                // flexDirection={"column"}
                // sx={{ borderRadius: '8px' }}
                sx={{
                  boxShadow: "none",
                  borderRadius: "8px", //use rem not px
                }}
              >
                <Box width={1} position={"relative"}>
                  <CardMedia
                    component="img"
                    // width={1}
                    // aspectRatio={1}
                    image={product.image}
                    // alt={product.alt}
                    sx={{ borderRadius: "8px" }} // use rem
                  />
                  <Box
                    width={"3rem"} //responsive sizes in rem
                    height={48} //responsive sizes in rem
                    borderRadius="50%"
                    bottom={"10%"}
                    right={"10%"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    position={"absolute"}
                    backgroundColor="#f5f5dc" //bgcolor
                    sx={{
                      "&:hover": {
                        backgroundColor: "blue", //colors from the theme(primary.main)
                      },
                    }}
                  >
                    {/* <Box fontSize={{xs:"1rem", md:"1.2rem"}}>
                      <AddShoppingCartRoundedIcon fontSize="inherit" />
                    </Box> */}
                    <AddShoppingCartRoundedIcon />
                  </Box>
                </Box>
                <Box width={1} mt={"8px"}>
                  <Typography
                    noWrap
                    title={product.description}
                    fontSize={".85rem"} //use responsive sizes
                  >
                    {product.description}
                  </Typography>
                  {product.numOfReviews > product.numReviewsThreshold && (
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      gap={".5rem"}
                      position={"absolute"}
                    >
                      <Rating
                        name="half-rating" //correct your naming
                        value={product.productRating}
                        precision={0.5}
                        readOnly
                        // size="small"
                        sx={{ fontSize: ".8rem" }}
                      />

                      <Typography fontSize={".7rem"}>
                        {product.numOfReviews} sold
                      </Typography>
                    </Box>
                  )}

                  <Box
                    width={1}
                    display={"flex"}
                    flexDirection={"row"}
                    alignItems={"center"}
                    sx={{ marginTop: "14px" }}
                    // gap={1}
                  >
                    {/* currency from the store */}
                    <Typography fontSize={".6rem"} fontWeight={"bold"}>
                      ETB
                    </Typography>
                    <Typography
                      fontSize={"large"}
                      fontWeight={"bold"}
                      pb={".25rem"}
                    >
                      2,536
                    </Typography>
                    <Typography fontSize={".75rem"} fontWeight={"bold"}>
                      .64
                    </Typography>

                    <Typography
                      fontSize={".75rem"}
                      marginLeft={1}
                      sx={{
                        textDecoration: "line-through",
                        color: "hsl(0, 0%, 60%)", //use colors from the theme
                        fontSize: ".75rem",
                      }}
                    >
                      {product.discount}
                    </Typography>
                  </Box>
                  <Box
                    width={1}
                    display={"flex"}
                    gap={0.5}
                    alignItems={"center"}
                  >
                    <Typography
                      fontSize={".55rem"}
                      backgroundColor={"orange"} //color from theme
                      fontWeight={"bold"}
                      borderRadius={1}
                      color={"main.black"}
                      sx={{ display: "inline" }}
                    >
                      {product.discountType}
                    </Typography>
                    <Typography>.</Typography>
                    <Typography
                      fontSize={".6rem"}
                      backgroundColor={"red"}
                      fontWeight={"bold"}
                      borderRadius={1}
                      sx={{ display: "inline" }}
                    >
                      Welcome deal
                    </Typography>
                    <Typography fontSize={"12px"}>56%</Typography>
                  </Box>
                  <Box width={1} mt={"1px"}>
                    <Typography noWrap fontSize={12} marginTop={"4px"}>
                      Freeshipping over ETB4,633.63
                    </Typography>
                  </Box>
                </Box>

                {hovered == product && (
                  <Box
                    width={1}
                    display={"flex"}
                    justifyContent="flex-start"
                    gap={8}
                    mt={"8px"}
                    style={{
                      position: "absolute",
                      background: "#fff",
                    }}
                  >
                    <Button
                      sx={{
                        fontSize: ".5rem",
                        fontWeight: "bold",
                        borderRadius: "14px",
                        backgroundColor: "black", //color from theme
                      }}
                    >
                      See preview
                    </Button>
                    <Button
                      sx={{
                        fontSize: ".5rem",
                        fontWeight: "bold",
                        borderRadius: "14px",
                        backgroundColor: "black", //color from theme
                      }}
                    >
                      Similar items
                    </Button>
                  </Box>
                )}
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
