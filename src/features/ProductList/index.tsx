import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import ProductCard from './ProductCard';
import useProductStore from '@/store/product';
import { LANG } from '@/store/user';
import useDiscountStore from '@/store/discount';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ProductListing() {
  const { products, setProducts, page, limit, nextPage, prevPage } =
    useProductStore();
  const { discount, setDiscount } = useDiscountStore();

  useEffect(() => {
    setProducts({ limit, lang: LANG.en, page });
    setDiscount();
  }, [page]);
  // console.log(products);

  return (
    <Grid
      container
      spacing={2}
      padding={{ md: '6rem 9rem', xs: '.6rem .6rem', sm: '1.5rem 3rem' }}
      mt="1.5rem"
      mb={'2.5rem'}
    >
      {products?.map((productData) => {
        const product = productData.getProductForCard();
        return (
          <Grid
            item
            height={'375px'}
            xs={6}
            sm={4}
            md={2.4}
            key={product.id.toString()}
          >
            <Link
              href={`/item/${product.id}`}
              style={{ textDecoration: 'none' }}
            >
              <ProductCard product={product} />
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
}
