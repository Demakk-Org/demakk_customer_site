import Pdata from '@/data/Pdata';
import { Box, Typography } from '@mui/material';
import React from 'react';

export default function ColorChoice() {
  return (
    <Box>
      <Typography sx={{ fontWeight: 'bold', fontSize: '.75rem', ml: '.5rem' }}>
        Color:{''}
      </Typography>
      <Box position={'relative'} display={'flex'} gap={'.5rem'}>
        {Pdata.images.map((image) => (
          <Box key={image} sx={{}}>
            <Box
              component={'img'}
              src={image}
              width={'50px'}
              height={'50px'}
              sx={{}}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
