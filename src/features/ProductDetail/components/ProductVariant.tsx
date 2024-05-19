import useProductStore from "@/store/product";
import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { IProductVariant } from "../../../model/productModel";

interface MainVariantListProps {
  previewImage: string;
  setPreviewImage: Function;
}

export default function ProductVariant({
  setPreviewImage,
}: MainVariantListProps) {
  const { product } = useProductStore();
  const [itemSize, setItemSize] = useState("");

  // function uniqueVariant(): IProductVariant[] | undefined {
  //   return product
  //     ?.getProductForPage()
  //     .productVariants.reduce<IProductVariant[]>(
  //       (uniqueVariant, currentValue) => {
  //         if (
  //           !uniqueVariant?.some(
  //             (variant) => variant.imageUrl === currentValue.imageUrl
  //           )
  //         ) {
  //           uniqueVariant.push(currentValue);
  //         }
  //         return uniqueVariant;
  //       },
  //       []
  //     );
  // }

  const uniqueProductVariantBasedOnImageUrls: Set<string> = new Set();
  const uniqueProductVariants = product
    ?.getProductForPage()
    .productVariants.filter((productVariant) => {
      if (uniqueProductVariantBasedOnImageUrls.has(productVariant.imageUrl)) {
        return false;
      } else {
        uniqueProductVariantBasedOnImageUrls.add(productVariant.imageUrl);
        return true;
      }
    });

  console.log("unique product variant array ", uniqueProductVariants);

  // let colorListing: string[] = [];
  // let colors = uniqueProductVariants?.filter((uniqueVariant) => {
  //   if (!colorListing.includes(uniqueVariant.imageUrl)) {
  //     colorListing.push(uniqueVariant.imageUrl);
  //     return uniqueVariant;
  //   }
  // });

  // console.log("new colors", colors);
  // console.log("new color listing", colorListing);

  let colors: string[] = uniqueProductVariants
    ?.flatMap((uniqueProductVariant) => {
      return [uniqueProductVariant.imageUrl] as string[];
    })
    .filter(Boolean) as string[];

  // console.log("colorList", colors);

  let chosenVariant = Array(product?.stockVarietyTypeList.length).fill(1);
  // console.log("chosen variant", chosenVariant);

  let chosenColor: string | undefined;
  if (uniqueProductVariants) {
    chosenColor = uniqueProductVariants[chosenVariant[1]].stockVarieties
      .filter((stockVariety) => stockVariety.type == "Color")[0]
      .value.toString();
  }
  const [variantName, setVariantName] = useState("");

  // console.log("chosen color", chosenColor);

  let chosenSizeList: IProductVariant[] | undefined =
    uniqueProductVariants?.filter(
      (uniqueVariant) =>
        uniqueVariant.stockVarieties.filter(
          (stockvariety) => stockvariety.type == "Color"
        )[0].value == chosenColor
    );

  console.log("size listing", chosenSizeList);

  // if (chosenSizeList && chosenSizeList.length > 0) {
  //   console.log(
  //     "chosen variant ",
  //     chosenSizeList[chosenVariant[1]].stockVarieties[0].value.toString(),
  //     chosenSizeList[chosenVariant[1]].stockVarieties[1].value.toString()
  //   );
  // } else {
  //   console.log("chosenSizeList is undefined or empty");
  // }

  return (
    <>
      {uniqueProductVariants ? (
        <Box>
          <Box>
            <Typography
              sx={{
                color: "text.primary",
                fontWeight: "bold",
                fontSize: ".75rem",
                ml: ".5rem",
              }}
            >
              Color:{variantName}
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {uniqueProductVariants.map((uniqueProductVariant, index) => (
              <Grid item key={index}>
                <Box
                  component={"img"}
                  src={uniqueProductVariant.imageUrl}
                  width={"75px"}
                  height={"75px"}
                  sx={{
                    "&:hover": {
                      border: "1px solid",
                      borderColor: "dark.main",
                    },
                  }}
                  onClick={() => {
                    setVariantName(
                      uniqueProductVariant.stockVarieties
                        .map((stockVariant) => {
                          if (stockVariant.class == "Main") {
                            return stockVariant.value;
                          }
                        })
                        .join("")
                    );
                    setPreviewImage(uniqueProductVariant.imageUrl);
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : (
        <></>
      )}
      <Box>
        <Typography
          sx={{
            color: "text.primary",
            fontWeight: "bold",
            fontSize: ".75rem",
            mb: ".5rem",
          }}
        >
          Size: {itemSize}
        </Typography>
        <Box position={"relative"} display={"flex"} gap={".5rem"}>
          {chosenSizeList?.map((size) => (
            <Box key={size._id.toString()}>
              {/* {colorVariantedImageArray()?.forEach(
              (sizeForOneColorVariant) => sizeForOneColorVariant
            )} */}
              {size.stockVarieties.map((sub) => {
                if (sub.class === "Sub") {
                  return (
                    <Button
                      key={""}
                      variant="outlined"
                      onClick={() => setItemSize(sub.value.toString())}
                    >
                      {sub.value}
                    </Button>
                  );
                } else {
                  <></>;
                }
              })}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
