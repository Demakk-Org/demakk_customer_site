import {
  Box,
  Container,
  Rating,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import useProductStore from "@/store/product";
import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function CustomerReviewDetail() {
  const { product } = useProductStore();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Container sx={{ padding: { xs: "0 .75rem", sm: "0" } }}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          p={{ xs: ".75rem 0", sm: "0" }}
        >
          <Typography
            color={"text.primary"}
            fontSize={{ xs: ".9rem", sm: "1.25rem" }}
            fontWeight={"bold"}
          >
            {isSmallScreen ? "Reviews" : `Customer Reviews(${2})`}
          </Typography>
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={"4px"}
            display={{ xs: "block", sm: "none" }}
          >
            <Typography>
              {product?.getProductForPage().rating?.average}
            </Typography>
            <Rating
              size="small"
              value={product?.getProductForPage().rating?.average}
              // defaultValue={2.5}
              precision={0.5}
              readOnly
            />
            {/* <Button> */}
            <ArrowForwardIosIcon fontSize="small" />
            {/* </Button> */}
          </Stack>
        </Stack>
        <Box display={{ xs: "none", sm: "block" }}>
          <Box>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              spacing={2}
              margin={"2rem 0 0 0"}
            >
              <Stack>
                <Typography
                  color={"text.primary"}
                  fontSize={"3rem"}
                  fontWeight={"bold"}
                  margin={"0 0 0 .5rem"}
                >
                  {product?.getProductForPage().rating?.average}
                </Typography>
                <Rating
                  sx={{ fontSize: "2rem", color: "black", fontWeight: "bold" }}
                  value={product?.getProductForPage().rating?.average}
                  // defaultValue={2.5}
                  precision={0.5}
                  readOnly
                />
                <Typography color={"text.primary"} margin={"0 0 0 .5rem"}>
                  all from verified purcheases
                </Typography>
              </Stack>
              <Stack>
                <Stack direction={"row"}>
                  <Typography>5 star</Typography>
                  <LinearProgress
                    sx={{
                      display: "block",
                      height: "5px",
                      width: "400px",
                      m: ".8rem  .5rem 0 .5rem",
                    }}
                  />
                  <Typography>50</Typography>
                </Stack>
                <Stack direction={"row"}>
                  <Typography>5 star</Typography>
                  <LinearProgress
                    sx={{
                      display: "block",
                      height: "5px",
                      width: "400px",
                      m: ".8rem  .5rem 0 .5rem",
                    }}
                  />
                  <Typography>50</Typography>
                </Stack>
                <Stack direction={"row"}>
                  <Typography>5 star</Typography>
                  <LinearProgress
                    sx={{
                      display: "block",
                      height: "5px",
                      width: "400px",
                      m: ".8rem  .5rem 0 .5rem",
                    }}
                  />
                  <Typography>50</Typography>
                </Stack>
                <Stack direction={"row"}>
                  <Typography>5 star</Typography>
                  <LinearProgress
                    sx={{
                      display: "block",
                      height: "5px",
                      width: "400px",
                      m: ".8rem  .5rem 0 .5rem",
                    }}
                  />
                  <Typography>50</Typography>
                </Stack>
                <Stack direction={"row"}>
                  <Typography>5 star</Typography>
                  <LinearProgress
                    sx={{
                      display: "block",
                      height: "5px",
                      width: "400px",
                      m: ".8rem  .5rem 0 .5rem",
                    }}
                  />
                  <Typography>50</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Container>
    </>
  );
}
