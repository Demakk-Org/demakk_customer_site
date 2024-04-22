import React from 'react';
import { Typography, Stack } from '@mui/material';
import getPrice from '@/utils/getPrice';

interface priceProps {
  price: number | string;
  oldPrice: number;
}

export default function SellingPrice({ price, oldPrice }: priceProps) {
  // const { int, dec } = getPrice();

  return (
    <>
      <Stack
        direction={'row'}
        // spacing={0.5}
        alignItems={'baseline'}
        sx={{ flexWrap: 'wrap' }}
      >
        <Typography
          mr={'.5rem'}
          sx={{
            display: 'flex',
            alignItems: 'baseline',
            '.currency': {
              fontSize: '.75rem',
              fontWeight: 'bold',
            },
            '.price-int': {
              fontSize: '1.5rem',
              fontWeight: 'bold',
            },
            '.price-dec': {
              fontSize: '.75rem',
              fontWeight: 'bold',
            },
          }}
        >
          <span className="currency">ETB</span>
          <span className="price-int">{getPrice(oldPrice || price).int}</span>
          <span className="price-dec">.{getPrice(oldPrice || price).dec}</span>
        </Typography>

        <Typography
          fontSize={'.75rem'}
          sx={{
            textDecoration: 'line-through',
            color: 'text.oldPrice',
            fontSize: '.75rem',
          }}
        >
          ETB{getPrice(price).int}.{getPrice(price).dec}
        </Typography>
      </Stack>
    </>
  );
}
