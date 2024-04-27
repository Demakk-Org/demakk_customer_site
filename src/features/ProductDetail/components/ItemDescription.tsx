import useDiscountStore from '@/store/discount';
import { Stack, Typography } from '@mui/material';
import React from 'react';
import { product1 } from '../../../../product';
import useProductStore from '@/store/product';

export default function ItemDescription() {
  const { product } = useProductStore();
  return (
    <div>
      <Stack>
        <Typography>{product?.getProductforCard().description}</Typography>
      </Stack>
    </div>
  );
}
