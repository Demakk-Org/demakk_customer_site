import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import Pdata from '@/data/Pdata';
import ProductCard from './ProductCard';
import useProductStore from '@/store/product';
import axios from 'axios';
import { LANG } from '@/store/user';
import { Discount } from '../../../dealsContainerStructure';
import useDiscountStore from '@/store/discount';
import { DiscountOutlined } from '@mui/icons-material';

export default function ProductListing() {
  const { products, setProducts, page, limit, nextPage, prevPage } =
    useProductStore();

  const { discount, setDiscount } = useDiscountStore();

  console.log(products);
  useEffect(() => {
    setProducts({ limit, lang: LANG.en, page });
    setDiscount();
  }, []);

  return (
    <Grid
      container
      spacing={2}
      padding={{ md: '3rem 3rem', xs: '.6rem .6rem', sm: '1.5rem 3rem' }}
      mt="1.5rem"
      mb={'2.5rem'}
    >
      {products.map((productData) => {
        const pro = productData.getProductforCard();
        console.log(pro);
        console.log(pro.discountedPrice(discount));
        return (
          <Grid
            item
            height={'375px'}
            xs={6}
            sm={4}
            md={2.4}
            key={pro.id.toString()}
          >
            <ProductCard product={pro} />
          </Grid>
        );
      })}
    </Grid>
  );
}
