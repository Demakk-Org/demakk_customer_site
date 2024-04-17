import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import Pdata from '@/data/Pdata';
import ProductCard from './ProductCard';

export default function ProductListing() {
  return (
    <Grid
      container
      spacing={2}
      padding={{ md: '3rem 6rem', xs: '1rem 2rem', sm: '1.5rem 3rem' }}
      mt="1.5rem"
    >
      {Pdata.products.map((productData) => (
        <Grid item xs={6} sm={4} md={2.4} key={productData.name}>
          <Box position="relative">
            <Box
              display="flex"
              width={1}
              sx={{
                '&:hover .buttons': {
                  display: 'flex',
                },
                '&:hover div .hovered-container': {
                  display: 'block',
                },
                '&:hover > div > div': { zIndex: 4 },
                '&:hover > div': { zIndex: 5 },
                '&:hover': {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                },
              }}
            >
              <ProductCard product={productData} />
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
