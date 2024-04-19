import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import Pdata from '@/data/Pdata';
import ProductCard from './ProductCard';
import useProductStore from '@/store/product';

export default function ProductListing() {
  const { products, setProducts } = useProductStore();

  return (
    <Grid
      container
      spacing={2}
      padding={{ md: '3rem 3rem', xs: '.6rem .6rem', sm: '1.5rem 3rem' }}
      mt="1.5rem"
    >
      {Pdata.products.map((productData) => (
        <Grid item xs={6} sm={4} md={2.4} key={productData.name}>
          <ProductCard product={productData} />
        </Grid>
      ))}
    </Grid>
  );
}
