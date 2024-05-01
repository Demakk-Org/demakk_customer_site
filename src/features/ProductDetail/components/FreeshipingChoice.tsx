import React from 'react';
import { Stack, Typography } from '@mui/material';

export default function FreeshipingChoice({ data }: any) {
  return (
    <div>
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
          <Typography component={'span'} className="choice" mr={'.25rem'}>
            Choice
          </Typography>
          Free shipping
          {data.freeShippingPrice ? (
            <Typography component={'span'}>
              {' '}
              over ETB{data.freeShippingPrice}
            </Typography>
          ) : (
            <></>
          )}
        </Typography>
      </Stack>
    </div>
  );
}
