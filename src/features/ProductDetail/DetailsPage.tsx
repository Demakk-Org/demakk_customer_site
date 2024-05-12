import { Box, Divider, Grid, Typography } from "@mui/material";
import Contents from "./containers/contents/Contents";
import RelatedItemListing from "./containers/relatedItemCard/RelatedItemListing";
import { useState } from "react";
import SideNav from "./components/SideNav";
import ItemImages from "./components/ItemImages";

export default function DetailsPage() {
  const [previewImage, setPreviewImage] = useState("");

  return (
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
        <Grid item xs={12} sm={9} container direction={"column"}>
          {/* image, related images and  description */}

          <Grid item direction={"row"} container spacing={2}>
            <Grid item xs={12} sm={5}>
              <ItemImages
                previewImage={previewImage}
                setPreviewImage={setPreviewImage}
              />
            </Grid>
            <Grid item xs={12} sm={7}>
              <Contents
                previewImage={previewImage}
                setPreviewImage={setPreviewImage}
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
  );
}
