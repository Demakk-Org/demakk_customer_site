import { Box, Stack } from '@mui/material';
import React from 'react';
import useProductStore from '@/store/product';
import Pdata from '@/data/Pdata';

export default function MoreItemImages() {
  const { product } = useProductStore();
  return (
    <></>
    // <Box
    //   mt={'1rem'}
    //   overflow-x={'auto'}
    //   gap={'.5rem'}
    //   display={{ xs: 'none', sm: 'flex' }}
    // >
    //   {Pdata.map((images) => (
    //     <Box
    //       component="img"
    //       src={images}
    //       height={'50px'}
    //       width={'50px'}
    //       key={images}
    //     />
    //     //   {images}
    //     // </Stack>
    //   ))}
    // </Box>
  );
}
