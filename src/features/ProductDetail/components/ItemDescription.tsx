import { Stack, Typography } from '@mui/material';
import React from 'react';

export default function ItemDescription({ data }: any) {
  return (
    <div>
      <Stack>
        <Typography>{data.description}</Typography>
      </Stack>
    </div>
  );
}
