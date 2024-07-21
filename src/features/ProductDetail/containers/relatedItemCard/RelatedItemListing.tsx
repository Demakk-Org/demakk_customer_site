import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import useProductStore from "@/store/product";
import { LANG } from "@/store/user";
import useDiscountStore from "@/store/discount";
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
              xs={6}
              sm={4}
              md={2}
              key={product.id.toString()}
            >
              <ProductCard product={product} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
