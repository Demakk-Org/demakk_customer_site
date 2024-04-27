import useDiscountStore from '@/store/discount';
import useProductStore from '@/store/product';
import { Stack, Typography } from '@mui/material';
import React from 'react';

export default function ExtraDiscount() {
  const { product } = useProductStore();
  const { discount } = useDiscountStore();
  return (
    <div>
      <Stack>
        <Typography
          title="Extra 2% off with discont"
          mt={'.5rem'}
          color={'text.price'}
          fontSize={'.7rem'}
          fontWeight={'bold'}
        >
          Extra {product?.getProductforCard().discountedPrice(discount)}% off
          with discont
        </Typography>
      </Stack>
    </div>
  );
}
