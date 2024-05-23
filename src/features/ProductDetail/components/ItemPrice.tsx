import useDiscountStore from "@/store/discount";
import useProductStore from "@/store/product";
import getPrice from "@/utils/getPrice";
import { Stack, Typography } from "@mui/material";
import React from "react";
import { IProductVariant } from "@/model/productModel";

interface VariantProps {
  itemSize: string;
  setItemSize: Function;
  previewImage: string;
  setPreviewImage: Function;
}

export default function ItemPrice({
  itemSize,
  setItemSize,
  previewImage,
}: VariantProps) {
  const { product } = useProductStore();
  const { discount } = useDiscountStore();
  const item = product?.getProductForPage();

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

  let variantPrices = arrayOfGroupedVariants?.map((groupedVariants) =>
    groupedVariants.map((groupedVariant) =>
      groupedVariant.stockVarieties.map((sub) => {
        if (
          sub.value === itemSize &&
          groupedVariant.imageUrl === previewImage
        ) {
          {
            return groupedVariant.price;
          }
        }
      })
    )
  );

  const variantPrice = Array.from(
    new Set(
      variantPrices?.flatMap((arrayOfPrices) =>
        arrayOfPrices.flatMap((arrayOfPrice) => arrayOfPrice)
      )
    )
  ).find((price) => price !== undefined);

  console.log("prices", variantPrices);
  console.log("price", variantPrice);

  return (
    <Stack
      useFlexGap
      flexWrap="wrap"
      direction={"row"}
      alignItems={"baseline"}
      position={"relative"}
      m={{ xs: "-.5rem 0rem", sm: "0rem" }}
      sx={{
        pl: { xs: ".5rem", sm: "none" },
        bgcolor: (theme) =>
          theme.palette.mode === "dark"
            ? "dark.lightOpaque"
            : "background.paper",
        borderTopLeftRadius: { xs: ".4rem", sm: "none" },
        borderTopRightRadius: { xs: ".4rem", sm: "none" },
      }}
      zIndex={{ xs: 3, sm: 0 }}
    >
      {item?.discountedPrice(discount).afterDiscount ? (
        <Typography
          mr={".5rem"}
          sx={{
            display: "flex",
            alignItems: "baseline",
            color: { xs: "text.primary", sm: "text.price" },
            ".currency": {
              fontSize: { xs: "1rem", sm: "1.4rem" },
              fontWeight: "bold",
            },
            ".price-int": {
              fontSize: { xs: "2rem", sm: "3rem" },
              fontWeight: "bold",
            },
            ".price-dec": {
              fontSize: { xs: "1rem", sm: "1.4rem" },
              fontWeight: "bold",
            },
          }}
        >
          <span className="currency">ETB</span>
          <span className="price-int">
            {getPrice(item?.discountedPrice(discount).afterDiscount).int}
          </span>
          <span className="price-dec">
            .{getPrice(item?.discountedPrice(discount).afterDiscount).dec}
          </span>
        </Typography>
      ) : (
        <Typography
          mr={".5rem"}
          sx={{
            display: "flex",
            alignItems: "baseline",
            color: { xs: "text.primary", sm: "text.price" },
            ".currency": {
              fontSize: { xs: "1rem", sm: "1.4rem" },
              fontWeight: "bold",
            },
            ".price-int": {
              fontSize: { xs: "2rem", sm: "3rem" },
              fontWeight: "bold",
            },
            ".price-dec": {
              fontSize: { xs: "1rem", sm: "1.4rem" },
              fontWeight: "bold",
            },
          }}
        >
          <span className="currency">ETB</span>
          <span className="price-int">
            {getPrice(item ? item.price : 0).int}
          </span>
          <span className="price-dec">
            .{getPrice(item ? item.price : 0).dec}
          </span>
        </Typography>
      )}

      {/* {item?.discountedPrice(discount).afterDiscount ? ( */}
      {variantPrice !== undefined && (
        <Typography
          sx={{
            textDecoration: "line-through",
            color: { xs: "text.oldPrice", sm: "text.primary" },
            fontSize: ".875rem",
            fontWeight: { xs: "none", sm: "bold" },
          }}
        >
          ETB{getPrice(variantPrice).int}.{getPrice(variantPrice).dec}
        </Typography>
      )}

      {/* // ) : (
        // <></>
      // )} */}
      {item?.discountedPrice(discount).discountPercent ? (
        <Typography color={"text.price"} m={"0rem 0rem 0rem .75rem"}>
          -{item?.discountedPrice(discount).discountPercent}%
        </Typography>
      ) : (
        <></>
      )}
    </Stack>
  );
}
