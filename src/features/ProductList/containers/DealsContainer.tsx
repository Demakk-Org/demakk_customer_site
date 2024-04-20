import { Box, Divider, Stack, Typography } from '@mui/material';
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
    <Stack
      width={'100%'}
      direction={'row'}
      alignItems={'center'}
      divider={
        <Box
          height={'.3rem'}
          minWidth={'.3rem'}
          m={'0 .25rem 0 .25rem'}
          borderRadius={'50%'}
          sx={{ backgroundColor: 'text.price' }}
        ></Box>
      }
    >
      <Typography
        minWidth={'max-content'}
        fontSize={'.6rem'}
        fontWeight={'bold'}
        color={'white'}
        p={'0rem .4rem '}
        borderRadius={'.2rem'}
        sx={{ backgroundColor: 'background.reddish' }}
      >
        {deal}
      </Typography>
      {extraDiscount && (
        <Typography
          title="Extra 2% off with discont"
          noWrap
          color={'text.price'}
          fontSize={'.7rem'}
          fontWeight={'bold'}
        >
          Extra {extraDiscount}% off with discont
        </Typography>
      )}
      {discountPercent && (
        <Typography color={'text.price'} fontSize={'.7rem'} fontWeight={'bold'}>
          -{discountPercent}%
        </Typography>
      )}
    </Stack>
  );
}
