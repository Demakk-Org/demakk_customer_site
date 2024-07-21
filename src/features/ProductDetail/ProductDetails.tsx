import { Box, Divider, Grid } from "@mui/material";
import Contents from "./containers/productInformation/Contents";
import RelatedItemListing from "./containers/relatedItemCard/RelatedItemListing";
import { useState } from "react";
import SideNav from "./components/SideBar";
import ProductItemImages from "./components/ProductItemImages";
import DescriptionAndRatingDetail from "./containers/productInformation/DescriptionAndRatingDetail";
import { GetProductForPage } from "@/model/productModel";

interface ProductDetailsProps {
  product: GetProductForPage | null;
}
export default function ProductDetails({ product }: ProductDetailsProps) {
  const [previewImage, setPreviewImage] = useState("");
  const [itemSize, setItemSize] = useState("");

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
      }}
    >
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
              <ProductItemImages
                previewImage={previewImage}
                setPreviewImage={setPreviewImage}
                product={product}
              />
            </Grid>
            <Grid item xs={12} sm={7}>
              <Contents
                previewImage={previewImage}
                setPreviewImage={setPreviewImage}
                itemSize={itemSize}
                setItemSize={setItemSize}
                product={product}
              />
            </Grid>
          </Grid>
          <Divider
            sx={{ mt: "1rem", fontSize: "bold", width: 1 }}
            orientation="horizontal"
          />
          <RelatedItemListing />
          {/* <Divider /> */}
          <DescriptionAndRatingDetail />
        </Grid>
        {/* for side scrollable nav */}
        <Grid item display={{ xs: "none", sm: "flex" }} xs>
          <SideNav />
        </Grid>
      </Grid>
    </Box>
  );
}
