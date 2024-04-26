import { Stack, Typography } from '@mui/material';
import React from 'react';

export default function ExtraDiscount({ data }: any) {
  return (
    <div>
      <Stack>
        <Typography
          title="Extra 2% off with discont"
          mt={'.5rem'}
          color={'text.price'}
          fontSize={'.7rem'}
          fontWeight={'bold'}
        >
          Extra {data.extraDiscount || 5}% off with discont
        </Typography>
      </Stack>
    </div>
  );
}
