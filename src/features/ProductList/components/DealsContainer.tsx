import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

interface dealProps {
  deal: string | undefined;
  extraDiscount: number | undefined;
  discountPercent: number | undefined;
}

export default function DealsContainer({
  deal,
  extraDiscount,
  discountPercent,
}: dealProps) {
  return (
    <>
      <Typography
        minWidth={'max-content'}
        fontSize={'.6rem'}
        fontWeight={'bold'}
        color={'white'}
        p={'0rem .4rem '}
        borderRadius={'.2rem'}
        sx={{ backgroundColor: 'brown' }}
      >
        {deal}
      </Typography>
      {extraDiscount && deal && (
        <Box
          height={'.3rem'}
          minWidth={'.3rem'}
          borderRadius={'50%'}
          sx={{ backgroundColor: 'brown' }}
        ></Box>
      )}
      {extraDiscount && (
        <Typography
          title="Extra 2% off with discont"
          noWrap
          color={'brown'}
          fontSize={'.7rem'}
          fontWeight={'bold'}
        >
          Extra {extraDiscount}% off with discont
        </Typography>
      )}
      {extraDiscount && discountPercent && (
        <Box
          height={'.3rem'}
          minWidth={'.3rem'}
          borderRadius={'50%'}
          sx={{ backgroundColor: 'brown' }}
        ></Box>
      )}
      {discountPercent && (
        <Typography color={'brown'} fontSize={'.7rem'} fontWeight={'bold'}>
          -{discountPercent}%
        </Typography>
      )}
    </>
  );
}
