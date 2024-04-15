import { Divider, Stack, Typography } from '@mui/material';
import React from 'react';

interface SellingDays {
  days: string;
}

export default function TopSellingCard({ days }: SellingDays) {
  return (
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
      <Typography
        minWidth={'max-content'}
        fontSize={'.5rem'}
        fontWeight={'bold'}
      >
        Top selling
      </Typography>
      {days && <Typography fontSize={'.6rem'}>{days}</Typography>}
      {/* <Typography fontSize={'.6rem'}>{days}</Typography> */}
    </Stack>
  );
}
