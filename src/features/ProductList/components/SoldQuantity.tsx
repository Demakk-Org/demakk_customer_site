import { Typography } from '@mui/material';
import React from 'react';

interface numberOfSoldProps {
  numOfSold: number | undefined;
}

export default function SoldQuantity({ numOfSold }: numberOfSoldProps) {
  return (
    <>
      {numOfSold && (
        <Typography minWidth={'max-content'} fontSize={'.75rem'}>
          {numOfSold} sold
        </Typography>
      )}
    </>
  );
}
