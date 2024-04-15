import { Rating, Stack, Typography } from '@mui/material';
import React from 'react';
import TopSellingCard from './TopSellingCard';

export default function RatingAndTopSeling() {
  return (
    <>
      <Rating
        defaultValue={2.5}
        precision={0.5}
        readOnly
        sx={{
          fontSize: '.875rem',
        }}
      />
      <Typography minWidth={'max-content'} fontSize={'.75rem'}>
        352 sold
      </Typography>
      <TopSellingCard days={'7days'} />
    </>
  );
}
