import { Stack, Typography } from '@mui/material';
import React from 'react';

export default function ShippingChoice() {
  return (
    <>
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
        }}
      >
        <span className="choice">Choice</span> Free shipping over
      </Typography>
      <Typography>ETB5,644.64</Typography>
    </>
  );
}
