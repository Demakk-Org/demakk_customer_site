import React, { useEffect } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import useProductStore from "@/store/product";
import { LANG } from "@/store/user";
import useDiscountStore from "@/store/discount";
import Link from "next/link";

export default function ProductListing() {
  const { products, setProducts, page, limit, nextPage, prevPage } =
    useProductStore();
  const { discount, setDiscount } = useDiscountStore();

  useEffect(() => {
    setProducts({ limit, lang: LANG.en, page });
    setDiscount();
  }, [page]);

  return (
    <Grid
      container
      direction={"column"}
      spacing={2}
      padding={{ xs: ".6rem .75rem", sm: "1.5rem 3rem", md: "1rem 9rem" }}
      mb={"2.5rem"}
    >
      <Stack>
        <Typography
          color={"text.primary"}
          fontSize={"1.5rem"}
          fontWeight={"bold"}
          padding={"1rem 0 0 1rem"}
        >
          More to love
        </Typography>
      </Stack>
      <Grid item container spacing={2}>
        {products?.map((productData) => {
          const product = productData.getProductForCard();

          return (
            <Grid
              item
              height={{ md: "375px" }}
              xs={6}
              sm={4}
              md={2.4}
              key={product.id.toString()}
            >
              <Link
                href={`/item/${product.id}`}
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <ProductCard product={product} />
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
