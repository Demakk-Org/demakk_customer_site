import { Box, Divider, Grid, Typography } from "@mui/material";
import Image from "./containers/images/ItemImages";
import Contents from "./containers/contents/Contents";
import RelatedItemListing from "./containers/relatedItemCard/RelatedItemListing";
import { useState } from "react";
import SideNav from "./components/SideNav";

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
          p={{ sm: "0rem 3rem" }}
          mt={{ sm: "1rem" }}
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
              <Grid item sm={5}>
                <Image
                  singleItemImages={singleItemImages}
                  setMainImage={setMainImage}
                />
              </Grid>
              <Grid item sm={7}>
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
            <Divider />
            <Typography>product description</Typography>
            <Typography color={"error.main"}>
              description for the product{" "}
            </Typography>
            <Typography color={"error.main"}>ratings and reviews </Typography>
            <Typography color={"error.main"}>
              and other technical specifications
            </Typography>
          </Grid>
          {/* for side scrollable nav */}
          <Grid
            position={"sticky"}
            item
            display={{ xs: "none", sm: "flex" }}
            xs
            // sx={{ bgcolor: 'blue' }}
          >
            <SideNav />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
