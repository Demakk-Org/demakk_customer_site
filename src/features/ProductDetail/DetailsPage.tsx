import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShareIcon from "@mui/icons-material/Share";
import Image from "./containers/images/ItemImages";
import Contents from "./containers/contents/Contents";
import RelatedItemListing from "./containers/relatedItemCard/RelatedItemListing";
import { useState } from "react";

interface ColoredImageChoiseProps {}

export default function DetailsPage() {
  const [singleItemImages, setMainImage] = useState("");

  return (
    <>
      <Box>
        {/* container for image description and side nav */}
        <Grid
          container
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          p={"0rem 3rem"}
          mt={"1rem"}
        >
          {/* images related items description along the column */}
          <Grid item xs={9} container direction={"column"}>
            {/* image, related images and  description */}

            <Grid
              item
              direction={{ xs: "column", sm: "row" }}
              container
              spacing={2}
            >
              <Grid item xs={5}>
                <Image
                  singleItemImages={singleItemImages}
                  setMainImage={setMainImage}
                />
              </Grid>
              <Grid item xs={7}>
                <Contents
                  singleItemImages={singleItemImages}
                  setMainImage={setMainImage}
                />
              </Grid>
            </Grid>
            <Divider
              sx={{ mt: "1rem", fontSize: "bold" }}
              orientation="horizontal"
            />
            <RelatedItemListing />
          </Grid>
          {/* for side scrollable nav */}
          <Grid
            position={"sticky"}
            item
            display={{ xs: "none", sm: "flex" }}
            xs
            // sx={{ bgcolor: 'blue' }}
          >
            <Box width={1}>
              <Paper
                elevation={1}
                sx={{
                  p: "1rem 1rem 0",
                  // height: '100vh',
                  maxHeight: "calc(100vh - 112px)",
                  overflow: "hidden",
                  overflowY: " auto",
                }}
              >
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  // p={'0 1rem'}
                >
                  <Typography fontWeight={"bold"}>Ship to</Typography>
                  <Stack direction={"row"}>
                    <LocationOnIcon />
                    <Typography>Ethiopia</Typography>
                  </Stack>
                </Stack>
                <Divider sx={{ margin: ".5rem" }} />
                <Box>
                  <Typography>shipping status</Typography>
                  <Typography>select another produc</Typography>
                </Box>
                <Divider sx={{ margin: ".5rem" }} />
                <Box>
                  <Typography fontWeight={"bold"}>Quantity</Typography>
                  <Stack direction={"row"} alignItems={"center"} spacing={2}>
                    <Box
                      component={"button"}
                      height={"2rem"}
                      minWidth={"2rem"}
                      borderRadius={"50%"}
                      border={"none"}
                      sx={{ borderRadius: "50%" }}
                    >
                      -
                    </Box>

                    <Typography>num</Typography>
                    <Box
                      component={"button"}
                      height={"2rem"}
                      minWidth={"2rem"}
                      borderRadius={"50%"}
                      border={"none"}
                      sx={{ borderRadius: "50%" }}
                    >
                      +
                    </Box>
                  </Stack>
                  <Typography color={"error.main"}>only 5 left</Typography>
                </Box>
                <Box position={"sticky"}>
                  <Stack spacing={2} m={"1rem 0"}>
                    <Button
                      variant="contained"
                      sx={{
                        borderRadius: "1.5rem",
                        p: ".625rem .75rem",
                      }}
                    >
                      Buy now
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        borderRadius: "1.5rem",
                        mt: "1rem",
                        p: ".625rem .75rem",
                      }}
                    >
                      Add to cart
                    </Button>
                    <Stack direction={"row"} spacing={2}>
                      <Button
                        variant="outlined"
                        startIcon={<ShareIcon />}
                        sx={{
                          borderRadius: "1.5rem",
                          width: "60%",
                          color: "black",
                        }}
                      >
                        share
                      </Button>
                      <Button
                        variant="outlined"
                        sx={{ borderRadius: "1.5rem", padding: "0 2rem" }}
                      >
                        fav
                      </Button>
                    </Stack>
                  </Stack>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
