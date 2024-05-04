import useProductStore from '@/store/product';
import { Box, Typography } from '@mui/material';
import React from 'react';

export default function ColorChoice() {
  const { product } = useProductStore();
  return (
    <Box>
      <Typography sx={{ fontWeight: 'bold', fontSize: '.75rem', ml: '.5rem' }}>
        Color:{''}
      </Typography>
      <Box display={'flex'} gap={'.5rem'}>
        {product?.images.imageUrls.map((image) => (
          <Box key={image} sx={{}}>
            <Box
              component={'img'}
              src={image}
              width={'100px'}
              height={'100px'}
              sx={{}}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
