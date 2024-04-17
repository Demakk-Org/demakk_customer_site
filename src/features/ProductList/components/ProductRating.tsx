import { Rating } from '@mui/material';
import React from 'react';

interface numberOfSoldProps {
  numOfSold: number | undefined;
}

export default function ProductRating({ numOfSold }: numberOfSoldProps) {
  if (!numOfSold) {
    return null;
  }
  return (
    <>
      {numOfSold && numOfSold > 5 && (
        <Rating
          value={
            numOfSold > 5 && numOfSold <= 10
              ? 2.5
              : numOfSold > 10 && numOfSold <= 50
              ? 3.5
              : numOfSold > 50
              ? 4.5
              : 0
          }
          precision={0.5}
          readOnly
          sx={{
            fontSize: '.875rem',
          }}
        />
      )}
    </>
  );
}
