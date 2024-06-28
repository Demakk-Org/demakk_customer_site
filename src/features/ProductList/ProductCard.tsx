import { Card, Typography, Box, Stack } from "@mui/material";
import SoldQuantity from "./components/SoldQuantity";
import ProductRating from "./components/ProductRating";
import AddToCartButton from "./components/AddToCartButton";
import DealsContainer from "./containers/DealsContainer";
import SellingPrice from "./components/ProductSellingPrice";
import ProductCardActionButtons from "./components/ProductCardActionButtons";
import useDiscountStore from "@/store/discount";
import { IReturnedProductForCard } from "@/model/productModel";
import ShippingChoice from "./components/ShippingChoice";
import { useEffect, useRef, useState } from "react";
import ImageFromFirebase from "@/component/ImageFromFirebase";

interface ProductCardProps {
  product: IReturnedProductForCard;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { discount } = useDiscountStore();

  const [isOverflowing, setIsOverflowing] = useState(false);
  const buttonContainerRef = useRef<HTMLDivElement>(null);

  const handleCheckOverflow = () => {
    const buttonContainer = buttonContainerRef.current;

    if (buttonContainer) {
      const isContentOverflowing =
        buttonContainer.scrollWidth > buttonContainer.clientWidth;
      if (!isOverflowing) {
        setIsOverflowing(isContentOverflowing);
      }
    }
  };

  useEffect(() => {
    handleCheckOverflow();
    window.addEventListener("resize", handleCheckOverflow);
  }, []);

  return (
    <Box
      width={1}
      position="relative"
      onMouseEnter={handleCheckOverflow}
      sx={{
        "&:hover": {
          position: "ralative",
          zIndex: 5,
        },
        "&:hover .buttons": {
          display: { xs: "none", sm: "flex" },
          flexDirection: isOverflowing ? "column" : "row",
        },
      }}
    >
      <Box
        className="wrapper-box"
        display="flex"
        width={1}
        sx={{
          "&:hover div .hovered-container": {
            display: { xs: "none", sm: "block" },
            bgcolor: "background.cardBg",
          },
          "&:hover > div > div": { zIndex: { sm: 4 } },
          "&:hover > div": {
            zIndex: { sm: 5 },
          },
          "&:hover": { sm: { position: "absolute", top: 0, left: 0 } },
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
            <ImageFromFirebase
              name={product?.images?.imageUrls[0]}
              width={1}
              borderRadius={"1rem"}
            />
            <Box
              width={1}
              height={1}
              position="absolute"
              top="0px"
              left="0px"
              sx={{
                borderRadius: "1rem",
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
              <Typography noWrap title={product.name} fontSize={"1rem"}>
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
                    {product.rating.average > 0 && (
                      <ProductRating ratingValue={product.rating.average} />
                    )}
                    {product.sold > 0 && (
                      <SoldQuantity numOfSold={product.sold} />
                    )}
                  </Stack>
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

          <ProductCardActionButtons buttonContainerRef={buttonContainerRef} />

          <Box
            className="hovered-container"
            display="none"
            position="absolute"
            width={1}
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
          />
        </Card>
      </Box>
    </Box>
  );
}
