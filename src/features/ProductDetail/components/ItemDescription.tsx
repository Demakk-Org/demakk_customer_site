import useDiscountStore from '@/store/discount';
import { Stack, Typography } from '@mui/material';
import React from 'react';
import { product1 } from '../../../../product';
import useProductStore from '@/store/product';

export default function ItemDescription() {
  const { product } = useProductStore();
  return (
    <Typography
      variant="body1"
      fontWeight={'bold'}
      sx={{ m: '.5rem 0', lineHeight: 1.25 }}
    >
      {product?.getProductforCard().description}
    </Typography>
  );
}
