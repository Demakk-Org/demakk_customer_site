import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import getPrice from '@/utils/getPrice';

interface priceProps {
  price: number | string;
  oldPrice: number;
}

export default function Pricing({ price, oldPrice }: priceProps) {
  const { int, dec } = getPrice(price);

  return (
    <>
      <Typography
        sx={{
          display: 'flex',
          alignItems: 'baseline',
          '.currency': {
            fontSize: '.75rem',
            fontWeight: 'bold',
          },
          '.price': {
            fontSize: '1.75rem',
            fontWeight: 'bold',
          },
          '.price-dec': {
            fontSize: '.75rem',
            fontWeight: 'bold',
          },
        }}
      >
        <span className="currency">ETB</span>
        <span className="price">{int}</span>
        <span className="price-dec">.{dec}</span>
      </Typography>

      <Typography
        fontSize={'.75rem'}
        marginLeft={1}
        sx={{
          textDecoration: 'line-through',
          color: 'hsl(0, 0%, 60%)',
          fontSize: '.75rem',
        }}
      >
        ETB{oldPrice}
      </Typography>
    </>
  );
}
