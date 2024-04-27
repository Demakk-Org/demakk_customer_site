import React from 'react';
import ItemImage from '../../components/ItemImage';
import MoreItemImages from '../../components/MoreItemImages';
import { Box } from '@mui/material';

export default function ItemImages() {
  return (
    <>
      <Box width={1} sx={{ direction: '1tr' }}>
        <ItemImage />
        <MoreItemImages />
      </Box>
    </>
  );
}
