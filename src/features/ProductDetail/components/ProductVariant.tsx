import useProductStore from "@/store/product";
import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { IProductVariant } from "../../../model/productModel";

interface MainVariantListProps {
  previewImage: string;
  setPreviewImage: Function;
}

export default function ProductVariant({
  setPreviewImage,
  previewImage,
}: MainVariantListProps) {
  const { product } = useProductStore();
  const [itemSize, setItemSize] = useState("");
  const [variantName, setVariantName] = useState("");

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
      {arrayOfGroupedVariants ? (
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
              {mainVariantType.map((main) => {
                return main;
              })}
              :{variantName}
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {arrayOfGroupedVariants?.map((groupedVariants) => (
              <Grid item key={""}>
                <Box width={"100px"} height={"100px"} position={"relative"}>
                  {groupedVariants.map((groupedVariant) => (
                    <Box
                      component="img"
                      key={""}
                      position="absolute"
                      top={0}
                      left={0}
                      width={1}
                      height={1}
                      src={groupedVariant.imageUrl}
                      sx={{
                        "&:hover": {
                          border: "1px solid",
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
                    />
                  ))}
                </Box>
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
          {subVariantType.map((main) => {
            return main;
          })}
          : {itemSize}
        </Typography>
        <Stack direction={"row"} spacing={2}>
          {arrayOfGroupedVariants?.map((groupedVariants) =>
            groupedVariants.map((groupedVariant) =>
              groupedVariant.stockVarieties.map((sub) => {
                if (
                  sub.class === "Sub" &&
                  groupedVariant.imageUrl === previewImage
                ) {
                  return (
                    <Box
                      key={""}
                      component={"button"}
                      onClick={() => setItemSize(sub.value.toString())}
                    >
                      {sub.value || sub.value[0]}
                    </Box>
                  );
                }
              })
            )
          )}
        </Stack>
      </Box>
    </>
  );
}
