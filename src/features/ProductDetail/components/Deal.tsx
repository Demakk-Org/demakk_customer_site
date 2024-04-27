import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

export default function Deal() {
  return (
    <Box
      borderRadius={'.5rem'}
      sx={{ backgroundColor: 'error.main' }}
      // height={'2rem'}
    >
      <Stack direction={'row'} p={'0 1rem'}>
        <Typography
          fontSize={'.875rem'}
          fontWeight={'bold'}
          // color={'white'}
          p={'.25rem .4rem '}
        >
          {'Welcome Deal'}
        </Typography>
        <Box></Box>
      </Stack>
    </Box>
  );
}
