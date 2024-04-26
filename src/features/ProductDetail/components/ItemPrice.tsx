import useDiscountStore from '@/store/discount';
import getPrice from '@/utils/getPrice';
import { Typography } from '@mui/material';
import React from 'react';

export default function ItemPrice({ data }: any) {
  const { discount } = useDiscountStore();

  return (
    <div>
      <Typography
        mr={'.5rem'}
        sx={{
          display: 'flex',
          alignItems: 'baseline',
          color: 'text.price',
          '.currency': {
            fontSize: '1.5rem',
            fontWeight: 'bold',
          },
          '.price-int': {
            fontSize: '3rem',
            fontWeight: 'bold',
          },
          '.price-dec': {
            fontSize: '1.5rem',
            fontWeight: 'bold',
          },
        }}
      >
        <span className="currency">ETB</span>
        <span className="price-int">
          {getPrice(data.discountedPrice || data.price).int}
        </span>
        <span className="price-dec">
          .{getPrice(data.discountedPrice || data.price).dec}
        </span>
      </Typography>

      {data.discountedPrice ? (
        <Typography
          fontSize={'.75rem'}
          sx={{
            textDecoration: 'line-through',
            color: 'text.oldPrice',
            fontSize: '.75rem',
          }}
        >
          ETB{getPrice(data.price).int}.{getPrice(data.price).dec}
        </Typography>
      ) : (
        <></>
      )}
    </div>
  );
}
