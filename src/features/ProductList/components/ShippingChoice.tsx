import { Stack, Typography } from '@mui/material';
import React from 'react';

interface ShippingChoiceProps {
  choice?: boolean;
  freeShippingPrice?: number;
}

export default function ShippingChoice({
  choice,
  freeShippingPrice,
}: ShippingChoiceProps) {
  return (
    <>
      {choice && (
        <Stack>
          <Typography
            sx={{
              '.choice': {
                minWidth: 'max-content',
                p: '0rem .4rem ',
                fontSize: '.65rem',
                fontWeight: 'bold',
                backgroundColor: 'demakkSecondary.main',
                borderRadius: '.2rem',
              },
              minWidth: 'max-content',
              fontSize: '.875rem',
            }}
          >
            <Typography component={'span'} className="choice">
              {choice}
            </Typography>
            Free shipping
          </Typography>
          <Typography> over ETB{freeShippingPrice}</Typography>
        </Stack>
      )}
    </>
  );
}
