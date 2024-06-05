import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import useProductStore from "@/store/product";
import { LANG } from "@/store/user";
import useDiscountStore from "@/store/discount";
import RelatedItemCard from "./RelatedItemCard";
import ProductCard from "../../../ProductList/ProductCard";

export default function RelatedItemListing() {
  const { products, setProducts, page, limit, nextPage, prevPage } =
    useProductStore();
  const { discount, setDiscount } = useDiscountStore();

  useEffect(() => {
    setProducts({ limit, lang: LANG.en, page });
    setDiscount();
  }, [page]);

  return (
    <Grid
      display={{ xs: "none", sm: "grid" }}
      item
      container
      spacing={2}
      sx={{ overflow: "hidden", mt: "3rem" }}
      direction={"column"}
      //   overflow-x={'hidden'}
      //   padding={{ md: '3rem 3rem', xs: '.6rem .6rem', sm: '1.5rem 3rem' }}
      //   mt="1.5rem"
      //   mb={'2.5rem'}
    >
      <Typography
        color="text.primary"
        fontWeight={"bold"}
        fontSize={"1.5rem"}
        sx={{ m: "1rem" }}
      >
        Related items
      </Typography>
      <Grid item container spacing={2}>
        {products?.map((productData) => {
          const product = productData.getProductForCard();
          return (
            <Grid
              item
              width={1}
              height={"500px"}
              // overflow={"hidden"}
              xs={6}
              sm={4}
              md={2}
              key={product.id.toString()}
            >
              {/* <RelatedItemCard /> */}
              <ProductCard product={product} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
