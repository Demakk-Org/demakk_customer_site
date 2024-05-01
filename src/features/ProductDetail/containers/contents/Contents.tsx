import React from 'react';
import Deal from '../../components/Deal';
import { Box, Divider, Stack } from '@mui/material';
import ItemPrice from '../../components/ItemPrice';
import ExtraDiscount from '../../components/ExtraDiscount';
import FreeshipingChoice from '../../components/FreeshipingChoice';
import ItemDescription from '../../components/ItemDescription';
import RatingAndReview from '../../components/RatingAndReview';
import ColorChoice from '../../components/ColorChoice';
import Size from '../../components/Size';

export default function Contents() {
  return (
    <Box>
      <Stack>
        <Deal />
      </Stack>
      {/* price and discount */}
      <Stack
        direction={'row'}
        // spacing={0.5}
        alignItems={'baseline'}
        sx={{ flexWrap: 'wrap' }}
      >
        <ItemPrice />
      </Stack>
      {/* extra discount */}
      <ExtraDiscount />
      {/* choice and freeshipping */}
      <FreeshipingChoice />
      {/* product description */}
      <ItemDescription />
      {/* Rating and reviws */}
      <RatingAndReview />
      <Divider sx={{ m: '1rem 0rem' }} />
      <ColorChoice />
      <Divider sx={{ m: '1rem 0rem' }} />
      <Size />
    </Box>
  );
}