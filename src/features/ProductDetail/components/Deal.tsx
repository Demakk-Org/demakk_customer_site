import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

export default function Deal({ data }: any) {
  return (
    <Box
      borderRadius={'.2rem'}
      sx={{ backgroundColor: 'error.main' }}
      height={'2rem'}
    >
      <Stack direction={'row'} p={'0 1rem'}>
        <Typography
          fontSize={'1rem'}
          fontWeight={'bold'}
          color={'white'}
          p={'0rem .4rem '}
        >
          {data.dealType || 'Welcome Deal'}
        </Typography>
        <Box></Box>
      </Stack>
    </Box>
  );
}
