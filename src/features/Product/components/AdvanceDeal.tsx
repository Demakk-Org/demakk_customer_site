import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

export default function AdvanceDeal() {
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
        Welcome deal
      </Typography>
      <Box
        height={'.3rem'}
        minWidth={'.3rem'}
        borderRadius={'50%'}
        sx={{ backgroundColor: 'brown' }}
      ></Box>
      <Typography
        title="Extra 2% off with discont"
        noWrap
        color={'brown'}
        fontSize={'.7rem'}
        fontWeight={'bold'}
      >
        Extra 2% off with discont
      </Typography>
      <Box
        height={'.3rem'}
        minWidth={'.3rem'}
        borderRadius={'50%'}
        sx={{ backgroundColor: 'brown' }}
      ></Box>
      <Typography color={'brown'} fontSize={'.7rem'} fontWeight={'bold'}>
        -50%
      </Typography>
    </>
  );
}
