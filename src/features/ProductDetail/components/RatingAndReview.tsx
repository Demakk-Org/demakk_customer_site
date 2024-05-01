import useProductStore from '@/store/product';
import { Rating, Stack, Typography } from '@mui/material';
import React from 'react';

export default function RatingAndReview() {
  const { product } = useProductStore();
  return (
    <div>
      <Stack direction={'row'} spacing={2}>
        {product?.getProductforCard().rating ? (
          <Stack direction={'row'} spacing={1}>
            <Rating
              size="small"
              value={product?.getProductforCard().rating}
              // defaultValue={2.5}
              precision={0.5}
              readOnly
            />
            <Typography fontSize={'.75rem'} fontWeight={'bold'}>
              {product?.getProductforCard().rating}
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
