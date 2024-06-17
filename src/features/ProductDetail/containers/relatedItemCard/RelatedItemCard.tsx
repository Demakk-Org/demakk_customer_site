import AddToCartButton from "@/features/ProductList/components/AddToCartButton";
import { Card, CardMedia, Typography, Box, Stack } from "@mui/material";
import SellingPriceOfItem from "../../components/fromProductCard/SellingPriceOfItem";
import useProductStore from "@/store/product";
import HoveringButtons from "@/features/ProductList/components/ProductCardActionButtons";

export default function RelatedItemCard() {
  const { product } = useProductStore();
  const item = product?.getProductForPage();

  return (
    <Box position="relative">
      <Box
        display="flex"
        width={1}
        sx={{
          "&:hover .buttons": {
            display: { xs: "none", sm: "inline" },
          },
          "&:hover div .hovered-container": {
            display: { xs: "none", sm: "block" },
          },
          "&:hover > div > div": { zIndex: 4 },
          "&:hover > div": { zIndex: 5 },
          "&:hover": {
            position: "absolute",
            top: 0,
            left: 0,
          },
        }}
      >
        <Card
          sx={{
            width: "100%",
            position: "relative",
            boxShadow: "none",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            zIndex: 2,
            overflow: "visible",
            background: "none",
          }}
        >
          <Box width={1} position={"relative"} zIndex={2}>
            <CardMedia
              component="img"
              width={1}
              image={item?.images.imageUrls[item.images.primary]}
              sx={{ borderRadius: ".5rem", aspectRatio: 1 }}
            />
            <Box
              position="absolute"
              top="0px"
              left="0px"
              right="0px"
              bottom="0px"
              sx={{
                borderRadius: ".5rem",
                backgroundColor: "background.productbg",
              }}
            ></Box>
            <AddToCartButton id="add to cart" />
          </Box>
          <Stack
            display="flex"
            flexDirection="column"
            width={1}
            mt={"8px"}
            zIndex={2}
          >
            <Stack direction={{ xs: "column-reverse", sm: "column" }}>
              <Typography
                sx={{ lineHeight: "1.5" }}
                noWrap
                title={""}
                fontSize={".875rem"}
              >
                product spec
              </Typography>
              <Stack direction={{ xs: "column-reverse", sm: "column" }}>
                <Stack
                  direction={"row"}
                  spacing={0.5}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Stack
                    direction={{ xs: "row-reverse", sm: "row" }}
                    spacing={1}
                    alignItems={"center"}
                  >
                    {/* {product.numberOfSold ? (
                      <SoldQuantity numOfSold={product.numberOfSold || 50} />
                    ) : (
                      <></>
                    )} */}
                  </Stack>
                  {/* {!product.topSelling?.status && (
                    <TopSellingCard
                      // topSoldItem={product.topSoldItem}
                      days={product.topSelling?.days}
                      // numOfSold={product.numberOfSold}
                    />
                  )} */}
                </Stack>

                <Stack
                  direction={"row"}
                  spacing={1}
                  alignItems={"baseline"}
                  justifyContent={"flex-start"}
                >
                  <SellingPriceOfItem />
                </Stack>
              </Stack>
            </Stack>
            <Stack
              direction={"row"}
              spacing={0.5}
              alignItems={"center"}
            ></Stack>
            <Stack></Stack>
          </Stack>

          <HoveringButtons />
          <Box
            className="hovered-container"
            display="none"
            position="absolute"
            sx={{
              height: "calc(100% + 2rem)",
              width: "calc(100% + 2rem)",
              top: "-1rem",
              left: "-1rem",
              backgroundColor: "background.paper",
              boxShadow: (theme) => theme.shadows[2],
              zIndex: "3 !important",
              borderRadius: "1rem",
            }}
          ></Box>
        </Card>
      </Box>
    </Box>
  );
}
