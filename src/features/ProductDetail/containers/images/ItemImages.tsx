import React from 'react';
import ItemImage from '../../components/ItemImage';
import MoreItemImages from '../../components/MoreItemImages';
import { Box } from '@mui/material';

export default function ItemImages({ data }: any) {
  return (
    <>
      <Box width={1} sx={{ direction: '1tr' }}>
        <ItemImage data={data} />
        <MoreItemImages data={data} />
      </Box>
    </>
  );
}
