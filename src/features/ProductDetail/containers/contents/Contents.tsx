import React from 'react';
import Deal from '../../components/Deal';
import { Stack } from '@mui/material';
import ItemPrice from '../../components/ItemPrice';
import ExtraDiscount from '../../components/ExtraDiscount';
import FreeshipingChoice from '../../components/FreeshipingChoice';
import ItemDescription from '../../components/ItemDescription';
import RatingAndReview from '../../components/RatingAndReview';

export default function Contents({ data }: any) {
  return (
    <div>
      <Stack>
        <Deal data={data} />
      </Stack>
      {/* price and discount */}
      <Stack
        direction={'row'}
        // spacing={0.5}
        alignItems={'baseline'}
        sx={{ flexWrap: 'wrap' }}
      >
        <ItemPrice data={data} />
      </Stack>
      {/* extra discount */}
      <ExtraDiscount data={data} />
      {/* choice and freeshipping */}
      <FreeshipingChoice data={data} />
      {/* product description */}
      <ItemDescription data={data} />
      {/* Rating and reviws */}
      <RatingAndReview data={data} />
    </div>
  );
}
