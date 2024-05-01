import useDiscountStore from '@/store/discount';
import useProductStore from '@/store/product';
import getPrice from '@/utils/getPrice';
import { Stack, Typography } from '@mui/material';
import React from 'react';

export default function ItemPrice() {
  const { product } = useProductStore();
  const { discount } = useDiscountStore();
  const item = product?.getProductforCard();

  return (
    <Stack direction={'row'} alignItems={'baseline'}>
      {item?.discountedPrice(discount) ? (
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
              fontFamily:
                'Open Sans, Roboto, Arial, Helvetica, sans-serif, SimSun',
              fontSize: '2.5rem',
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
            {getPrice(item?.discountedPrice(discount)).int}
          </span>
          <span className="price-dec">
            .{getPrice(item?.discountedPrice(discount)).dec}
          </span>
        </Typography>
      ) : (
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
            {getPrice(item ? item.price : 0).int}
          </span>
          <span className="price-dec">
            .{getPrice(item ? item.price : 0).dec}
          </span>
        </Typography>
      )}

      <Typography
        fontWeight={'bold'}
        sx={{
          textDecoration: 'line-through',
          color: 'text.oldPrice',
          fontSize: '.875rem',
        }}
      >
        ETB4500
      </Typography>

      <Typography></Typography>
    </Stack>
  );
}
