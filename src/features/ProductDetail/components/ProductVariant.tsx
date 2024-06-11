import useProductStore from "@/store/product";
import { Box, Button, Grid, Stack, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { IProductVariant } from "../../../model/productModel";
import ImageFromCloudinary from "@/component/ImageFromCloudinary";

interface VariantListProps {
  previewImage: string;
  setPreviewImage: Function;
  itemSize: string;
  setItemSize: Function;
}

export default function ProductVariant({
  setPreviewImage,
  previewImage,
  itemSize,
  setItemSize,
}: VariantListProps) {
  const { product } = useProductStore();
  const [variantName, setVariantName] = useState("");

  const theme = useTheme();

  //grouping productVarinants using reduce
  const productVariantGroupedByImageUrls = () => {
    return (
      product
        ?.getProductForPage()
        .productVariants.reduce<Record<string, IProductVariant[]>>(
          (acc, productVariant) => {
            const imageUrl = productVariant.imageUrl;
            if (!acc[imageUrl]) acc[imageUrl] = [];
            acc[imageUrl].push({
              _id: productVariant._id,
              stockVarieties: productVariant.stockVarieties,
              imageIndex: productVariant.imageIndex,
              price: productVariant.price,
              numberOfAvailable: productVariant.numberOfAvailable,
              imageUrl: productVariant.imageUrl,
            });
            return acc;
          },
          {} as Record<string, IProductVariant[]>
        ) ?? {}
    );
  };

  //converting reduced groups to array of arrays for manipulation
  let arrayOfGroupedVariants: IProductVariant[][] | undefined;
  if (productVariantGroupedByImageUrls()) {
    arrayOfGroupedVariants = Object.values(productVariantGroupedByImageUrls());
  }
  console.log("array of arrays", arrayOfGroupedVariants);

  //for main variant title ectract single value using map ant flat map over arryes of arrays
  let mainVariantTypes = arrayOfGroupedVariants?.map((groupedVariants) =>
    groupedVariants.map((groupedVariant) => {
      return groupedVariant.stockVarieties.map((stockVariety) => {
        if (stockVariety.class == "Main") {
          return stockVariety.type;
        }
      });
    })
  );

  const mainVariantType = Array.from(
    new Set(
      mainVariantTypes?.flatMap((mainVariant) =>
        mainVariant.flatMap((main) => main)
      )
    )
  );

  let subVariantTypes = arrayOfGroupedVariants?.map((groupedVariants) =>
    groupedVariants.map((groupedVariant) => {
      return groupedVariant.stockVarieties.map((stockVariety) => {
        if (stockVariety.class == "Sub") {
          return stockVariety.type;
        }
      });
    })
  );

  const subVariantType = Array.from(
    new Set(
      subVariantTypes?.flatMap((subVariant) => subVariant.flatMap((sub) => sub))
    )
  );

  return (
    <>
      {mainVariantType && (
        <Box m={{ xs: "0 0 .5rem 0", sm: "0 0 1rem 0" }}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={"2px"}
            m={{ xs: "0 4px 5px .5rem ", sm: "0 0 5px 0" }}
          >
            <Typography
              sx={{
                color: { xs: "text.oldPrice", sm: "text.primary" },
                fontWeight: { xs: "", sm: "bold" },
                fontSize: ".8rem",
              }}
            >
              {mainVariantType.map((main) => {
                return main;
              })}
            </Typography>
            <Typography
              sx={{
                color: "text.primary",
                fontWeight: { xs: "", sm: "bold" },
                fontSize: ".75rem",
              }}
            >
              {variantName}
            </Typography>
          </Stack>
          <Grid
            container
            spacing={2}
            sx={{ p: { xs: "0 0 0 .5rem", sm: "0" } }}
          >
            {arrayOfGroupedVariants?.map((groupedVariants) => {
              return (
                <Grid item key={""}>
                  {groupedVariants.slice(-1).map((groupedVariant) => (
                    <Box
                      key={groupedVariant._id.toString()}
                      width={{ xs: "40px", sm: "70px" }}
                      height={{ xs: "40px", sm: "70px" }}
                      overflow={"hidden"}
                      borderRadius={{ xs: "50%", sm: "4px" }}
                      position={"relative"}
                      sx={{
                        "&:hover": {
                          border: "2px solid",
                          borderColor: "dark.main",
                        },
                      }}
                      onClick={() => {
                        setVariantName(
                          groupedVariant.stockVarieties
                            .map((stockVariant) => {
                              if (stockVariant.class == "Main") {
                                return stockVariant.value;
                              }
                            })
                            .join("")
                        );
                        setPreviewImage(groupedVariant.imageUrl);
                      }}
                    >
                      <ImageFromCloudinary
                        publicId={groupedVariant.imageUrl}
                        width={1}
                        qualityWidth={70}
                        borderRadius={2}
                        height={1}
                      />

                      <Box
                        position={"absolute"}
                        width={1}
                        height={1}
                        borderRadius={{ xs: "50%", sm: "4px" }}
                        top={0}
                        left={0}
                        sx={{ bgcolor: "background.productBg" }}
                      ></Box>
                    </Box>
                  ))}
                </Grid>
              );
            })}
          </Grid>
        </Box>
      )}
      {arrayOfGroupedVariants ? (
        <Box>
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={"2px"}
            m={{ xs: "0 4px 5px .5rem ", sm: "0 0 5px 0" }}
          >
            <Typography
              sx={{
                color: { xs: "text.blurred", sm: "text.primary" },
                fontWeight: { xs: "", sm: "bold" },
                fontSize: ".8rem",
              }}
            >
              {subVariantType.map((sub) => {
                return sub;
              })}
            </Typography>
            <Typography
              sx={{
                color: "text.primary",
                fontWeight: { xs: "", sm: "bold" },
                fontSize: ".75rem",
              }}
            >
              {itemSize}
            </Typography>
          </Stack>

          <Stack
            direction={"row"}
            spacing={2}
            sx={{ p: { xs: "0 0 0 .5rem", sm: "0" } }}
          >
            {arrayOfGroupedVariants?.map((groupedVariants) =>
              groupedVariants.map((groupedVariant) =>
                groupedVariant.stockVarieties.map((sub) => {
                  if (
                    sub.class === "Sub" &&
                    groupedVariant.imageUrl === previewImage
                  ) {
                    return (
                      <Button
                        key={groupedVariant._id.toString()}
                        variant={
                          theme.breakpoints.up("sm") ? "outlined" : "contained"
                        }
                        onClick={() => {
                          setItemSize(sub.value.toString());
                        }}
                        sx={{
                          color: "text.primary",
                          padding: ".5rem 1rem",
                          border: {
                            xs: "none",
                            sm: "1px solid  ",
                          },
                          borderRadius: ".5rem",
                          bgcolor: {
                            xs: "background.productBg",
                            sm: "background.paper",
                          },
                          boxShadow: "none",
                        }}
                      >
                        {sub.value}
                      </Button>
                    );
                  }
                })
              )
            )}
          </Stack>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
}
