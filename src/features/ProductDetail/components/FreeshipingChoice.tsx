import React from 'react';
import { Stack, Typography } from '@mui/material';
import useProductStore from '@/store/product';
import useDiscountStore from '@/store/discount';

export default function FreeshipingChoice() {
  const { product } = useProductStore();
  const { discount } = useDiscountStore();
  return (
    <div>
      <Stack>
        <Typography
          sx={{
            '.choice': {
              minWidth: 'max-content',
              p: '0rem .4rem ',
              fontSize: '.65rem',
              fontWeight: 'bold',
              backgroundColor: 'demakkSecondary.main',
              borderRadius: '.2rem',
            },
            minWidth: 'max-content',
            fontSize: '.875rem',
          }}
        >
          <Typography component={'span'} className="choice" mr={'.25rem'}>
            Choice
          </Typography>
          {product?.getProductforCard().shipping(discount).status && (
            <Typography color={'text.primary'}>
              Free shipping{' '}
              {product?.getProductforCard().shipping(discount).above > 0 &&
                ` over $${
                  product?.getProductforCard().shipping(discount).above
                }`}
            </Typography>
          )}
        </Typography>
      </Stack>
    </div>
  );
}
