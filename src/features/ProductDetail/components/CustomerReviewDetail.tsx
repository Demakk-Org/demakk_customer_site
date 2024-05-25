import { Box, Container, Rating, Stack, Typography } from "@mui/material";
import useProductStore from "@/store/product";
import React from "react";
import LinearProgress from "@mui/material/LinearProgress";

export default function CustomerReviewDetail() {
  const { product } = useProductStore();
  return (
    <>
      <Typography
        variant="h6"
        component={"h1"}
        color={"text.primary"}
        fontWeight={"bold"}
      >
        Customer Reviews
      </Typography>
      <Box>
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
    </>
  );
}