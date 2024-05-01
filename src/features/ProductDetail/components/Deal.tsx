import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

export default function Deal() {
  return (
    <Box borderRadius={'.5rem'} sx={{ backgroundColor: 'error.main' }}>
      <Stack direction={'row'} p={'0 1rem'}>
        <Typography
          fontSize={'.875rem'}
          fontWeight={'bold'}
          p={'.25rem .4rem '}
        >
          {'Welcome Deal'}
        </Typography>
      </Stack>
    </Box>
  );
}
