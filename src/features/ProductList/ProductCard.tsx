import { Card, CardMedia, Typography, Box, Stack, Button } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import SoldQuantity from "./components/SoldQuantity";
import ProductRating from "./components/ProductRating";
import AddToCartButton from "./components/AddToCartButton";
import DealsContainer from "./containers/DealsContainer";
import SellingPrice from "./components/SellingPrice";
import HoveringButtons from "./components/HoveringButtons";
import useDiscountStore from "@/store/discount";
import { IReturnedProductForCard } from "@/model/productModel";
import ShippingChoice from "./components/ShippingChoice";
import ImageFromCloudinary from "@/component/ImageFromCloudinary";

export default function ProductCard({
  product,
}: {
  product: IReturnedProductForCard;
}) {
  const { discount } = useDiscountStore();

  const [isOverflowing, setIsOverflowing] = useState(false);
  const buttonContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const buttonContainer = buttonContainerRef.current;
    const checkOverflow = () => {
      if (
        buttonContainer &&
        buttonContainer.scrollWidth > buttonContainer.clientWidth
      ) {
        setIsOverflowing(true);
      } else {
        setIsOverflowing(false);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  return (
    <Box width={1} position="relative">
      <Box
        display="flex"
        width={1}
        sx={{
          "&:hover .buttons": {
            display: { xs: "none", sm: "flex" },
            flexDirection: { xs: "none", sm: isOverflowing ? "column" : "row" },
          },
          "&:hover div .hovered-container": {
            display: { xs: "none", sm: "block" },
            bgcolor: (theme) =>
              theme.palette.mode === "dark"
                ? "background.lightOpaque"
                : "background.paper",
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
            <ImageFromCloudinary
              publicId={product?.images?.imageUrls[0]}
              qualityWidth={500}
              borderRadius={8}
              width={1}
              height={1}
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
              <Typography noWrap title={product.name} fontSize={"1.1rem"}>
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

          {/* <HoveringButtons /> */}
          <Box
            ref={buttonContainerRef}
            // container
            className="buttons"
            // spacing={1}
            // direction={"row"}
            // useFlexGap

            // display={"flex"}
            // flexDirection={isOverflowing ? "column" : "row"}
            width={1}
            gap={2}
            display="none"
            // justifyContent="space-between"
            alignItems={"center"}
            mt={"1rem"}
            zIndex={2}
          >
            <Button
              variant="contained"
              color="primaryButton"
              sx={{
                fontSize: ".75rem",
                fontWeight: "bold",
                borderRadius: "24px",
                minWidth: "max-content",
                width: 1,
              }}
            >
              See preview
            </Button>

            <Box width={1}>
              <Button
                variant="contained"
                color="primaryButton"
                sx={{
                  fontSize: ".8rem",
                  fontWeight: "bold",
                  borderRadius: "24px",
                  width: 1,
                  minWidth: "max-content",
                }}
              >
                Similar items
              </Button>
            </Box>
          </Box>
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
          ></Box>
        </Card>
      </Box>
    </Box>
  );
}
