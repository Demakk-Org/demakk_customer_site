import React from 'react';
import { Typography, Stack } from '@mui/material';
import getPrice from '@/utils/getPrice';
import useProductStore from '@/store/product';
import useDiscountStore from '@/store/discount';
import { GetDiscount } from '@/model/discountModel';
import { IAfterDiscountAndPercent } from '@/model/productModel';

interface PriceProps {
  discountedPrice: (discounts: GetDiscount[]) => IAfterDiscountAndPercent;
  price: number;
}

export default function SellingPrice({ price, discountedPrice }: PriceProps) {
  const { discount, setDiscount } = useDiscountStore();
  // const { product } = useProductStore();
  // const { discount } = useDiscountStore();
  // const item = product?.getProductforCard();

  return (
    <>
      <Stack
        direction={'row'}
        // spacing={0.5}
        alignItems={'baseline'}
        sx={{ flexWrap: 'wrap' }}
      >
        {price ? (
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
              {getPrice(discountedPrice(discount).afterDiscount).int}
            </span>
            <span className="price-dec">
              .{getPrice(discountedPrice(discount).afterDiscount).dec}
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
            <span className="price-int">{getPrice(price).int}</span>
            <span className="price-dec">.{getPrice(price).dec}</span>
          </Typography>
        )}

        {discountedPrice(discount).afterDiscount ? (
          <Typography
            // fontSize={'1rem'}
            fontWeight={'bold'}
            sx={{
              textDecoration: 'line-through',
              color: 'text.oldPrice',
              fontSize: '.875rem',
            }}
          >
            ETB{getPrice(price).int}.{getPrice(price).dec}
          </Typography>
        ) : (
          <></>
        )}
      </Stack>
    </>
  );
}
