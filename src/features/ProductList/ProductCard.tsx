import {
  Card,
  CardMedia,
  Typography,
  Box,
  Stack,
  useTheme,
} from "@mui/material";
import SoldQuantity from "./components/SoldQuantity";
import ProductRating from "./components/ProductRating";
import AddToCartButton from "./components/AddToCartButton";
import DealsContainer from "./containers/DealsContainer";
import SellingPrice from "./components/SellingPrice";
import HoveringButtons from "./components/HoveringButtons";
import useDiscountStore from "@/store/discount";
import { IReturnedProductForCard } from "@/model/productModel";
import ShippingChoice from "./components/ShippingChoice";

export default function ProductCard({
  product,
}: {
  product: IReturnedProductForCard;
}) {
  const { discount } = useDiscountStore();
  const theme = useTheme();

  return (
    <Box position="relative">
      <Box
        display="flex"
        width={1}
        sx={{
          "&:hover .buttons": {
            display: { xs: "none", sm: "flex" },
          },
          "&:hover div .hovered-container": {
            display: { xs: "none", sm: "block" },
            bgcolor: (theme) =>
              theme.palette.mode === "dark"
                ? "background.lightOpaque"
                : "background.paper",
          },
          "&:hover > div > div": { zIndex: 4 },
          "&:hover > div": {
            zIndex: 5,
          },
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
              image={product?.images?.imageUrls[0]}
              alt={product.images?.description}
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
                backgroundColor: "background.productBg",
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
                // sx={{ lineHeight: '1.5' }}
                noWrap
                title={product.name}
                fontSize={"1.1rem"}
              >
                {product.name}
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
                    {product.rating.average ? (
                      <ProductRating ratingValue={product.rating.average} />
                    ) : (
                      <></>
                    )}
                    {product.sold ? (
                      <SoldQuantity numOfSold={product.sold} />
                    ) : (
                      <></>
                    )}
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
                  <SellingPrice
                    price={product.price}
                    discountedPrice={product.discountedPrice(discount)}
                  />
                </Stack>
              </Stack>
            </Stack>
            <Stack direction={"row"} spacing={0.5} alignItems={"center"}>
              {product.discountedPrice(discount).afterDiscount ? (
                <DealsContainer deal={product.deals(discount)} />
              ) : (
                <></>
              )}
            </Stack>
            <Stack>
              <ShippingChoice
                choice={product.shipping(discount).status}
                freeShippingPrice={product.shipping(discount).above}
              />
            </Stack>
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
