import React, { useEffect, useState } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

import useProductStore from "@/store/product";
import { LANG } from "@/store/user";
import useDiscountStore from "@/store/discount";
import Link from "next/link";
import { useRouter } from "next/router";
import RelatedItemCard from "./RelatedItemCard";

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
      <Typography sx={{ m: "1rem" }} fontWeight={"bold"} fontSize={"1.5rem"}>
        Related items
      </Typography>
      <Grid item container direction={"row"} spacing={"1rem"}>
        {products?.slice(0, 6).map((productData) => {
          const product = productData.getProductForCard();
          return (
            <Grid
              item
              width={1}
              height={"375px"}
              overflow={"hidden"}
              xs={6}
              sm={4}
              md={2}
              key={product.id.toString()}
            >
              <RelatedItemCard />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}