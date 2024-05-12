import React from 'react';
import { Typography, Stack } from '@mui/material';
import getPrice from '@/utils/getPrice';
import useProductStore from '@/store/product';
import useDiscountStore from '@/store/discount';

// interface priceProps {
//   discountedPrice: number | string;
//   price: number;
// }

export default function SellingPriceOfItem() {
  const { product } = useProductStore();
  const { discount } = useDiscountStore();
  const item = product?.getProductForPage();

  return (
    <>
      <Stack
        direction={'row'}
        // spacing={0.5}
        alignItems={'baseline'}
        sx={{ flexWrap: 'wrap' }}
      >
        {item?.discountedPrice(discount).afterDiscount ? (
          <Typography
            mr={'.5rem'}
            sx={{
              display: 'flex',
              alignItems: 'baseline',
              color: 'text.price',
              '.currency': {
                fontSize: '.5rem',
                fontWeight: 'bold',
              },
              '.price-int': {
                fontSize: '1rem',
                fontWeight: 'bold',
              },
              '.price-dec': {
                fontSize: '.5rem',
                fontWeight: 'bold',
              },
            }}
          >
            <span className="currency">ETB</span>
            <span className="price-int">
              {getPrice(item?.discountedPrice(discount).afterDiscount).int}
            </span>
            <span className="price-dec">
              .{getPrice(item?.discountedPrice(discount).afterDiscount).dec}
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
                fontSize: '.5rem',
                fontWeight: 'bold',
              },
              '.price-int': {
                fontSize: '1rem',
                fontWeight: 'bold',
              },
              '.price-dec': {
                fontSize: '.5rem',
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

        {item?.discountedPrice(discount).afterDiscount ? (
          <Typography
            // fontSize={'1rem'}
            fontWeight={'bold'}
            sx={{
              textDecoration: 'line-through',
              color: 'text.oldPrice',
              fontSize: '.875rem',
            }}
          >
            ETB{getPrice(item.price).int}.{getPrice(item.price).dec}
          </Typography>
        ) : (
          <></>
        )}
      </Stack>
    </>
  );
}
