import { Stack, Typography } from '@mui/material';
import React from 'react';

interface shippingChoiceProps {
  choice: string | undefined;
  freeShippingPrice: number | undefined;
}

export default function ShippingChoice({
  choice,
  freeShippingPrice,
}: shippingChoiceProps) {
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
                backgroundColor: 'orange',
                borderRadius: '.2rem',
              },
              minWidth: 'max-content',
            }}
          >
            <span className="choice">{choice}</span> Free shipping over
          </Typography>
          <Typography>ETB{freeShippingPrice}</Typography>
        </Stack>
      )}
    </>
  );
}
