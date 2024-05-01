import { Typography } from '@mui/material';
import React from 'react';
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
