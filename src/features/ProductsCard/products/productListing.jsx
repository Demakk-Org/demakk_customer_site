import React from 'react';
import { Container, Grid } from '@mui/material';
import MoreProductsCard from './moreProductsCard';

export default function ProductListing({ products }) {
  return (
    <Container maxWidth="lg">
      <Grid Container spacing={5} sx={{ marginTop: '20px' }}>
        {products.map((result, index) => {
          <Grid item xs={12} ms={4} key={index}>
            <MoreProductsCard result={result} />
          </Grid>;
        })}
      </Grid>
    </Container>
  );
}
