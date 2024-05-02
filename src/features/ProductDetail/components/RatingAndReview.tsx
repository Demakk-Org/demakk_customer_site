import useProductStore from '@/store/product';
import { Rating, Stack, Typography } from '@mui/material';
import React from 'react';

export default function RatingAndReview() {
  const { product } = useProductStore();
  return (
    <div>
      <Stack direction={'row'} spacing={2}>
        {product?.getProductForCard().rating?.average ? (
          <Stack direction={'row'} spacing={1}>
            <Rating
              size="small"
              value={product?.getProductForCard().rating.average}
              // defaultValue={2.5}
              precision={0.5}
              readOnly
            />
            <Typography fontSize={'.75rem'} fontWeight={'bold'}>
              {product?.getProductForCard().rating.average}
            </Typography>
          </Stack>
        ) : (
          <></>
        )}
        <Typography fontSize={'.75rem'}>{45} Reviews</Typography>
      </Stack>
    </div>
  );
}
