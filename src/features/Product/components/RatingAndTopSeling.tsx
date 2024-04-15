import { Rating, Stack, Typography } from '@mui/material';
import React from 'react';
import TopSellingCard from './TopSellingCard';

interface numberOfSoldProps {
  numOfSold: number | undefined;
}

export default function RatingAndTopSeling({ numOfSold }: numberOfSoldProps) {
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
        {numOfSold} sold
      </Typography>
      <TopSellingCard days={'7days'} />
    </>
  );
}
