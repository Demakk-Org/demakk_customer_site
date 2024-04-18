import { Divider, Stack, Typography } from '@mui/material';
import React from 'react';

interface SellingDaysProps {
  days: number | undefined;
  topSoldItem: string | undefined;
  numOfSold: number | undefined;
}

export default function TopSellingCard({
  days,
  topSoldItem,
  numOfSold,
}: SellingDaysProps) {
  if (!topSoldItem || !days) {
    return null;
  }

  if (!numOfSold) {
    return null;
  }

  return (
    <Stack display={{ xs: 'none', sm: 'flex' }}>
      <Stack
        direction={'row'}
        divider={<Divider orientation="vertical" flexItem />}
        spacing={0.25}
        p={'0rem .3rem'}
        border={'.05rem solid'}
        borderRadius={'.2rem'}
        sx={{ backgroundColor: 'lightBlue' }}
        alignItems={'center'}
      >
        {topSoldItem && (
          <Typography
            minWidth={'max-content'}
            fontSize={'.5rem'}
            fontWeight={'bold'}
          >
            {topSoldItem}
          </Typography>
        )}
        {days && (
          <Typography minWidth={'max-content'} fontSize={'.6rem'}>
            {days} days
          </Typography>
        )}
      </Stack>
    </Stack>
  );
}
