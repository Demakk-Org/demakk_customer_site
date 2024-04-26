import { Rating, Stack, Typography } from '@mui/material';
import React from 'react';

export default function RatingAndReview({ data }: any) {
  return (
    <div>
      <Stack direction={'row'} spacing={2}>
        <Stack direction={'row'} spacing={1}>
          <Rating
            size="small"
            value={data.rating?.average}
            // defaultValue={2.5}
            precision={0.5}
            readOnly
          />
          <Typography fontSize={'.75rem'} fontWeight={'bold'}>
            {data.rating?.average}
          </Typography>
        </Stack>

        <Typography fontSize={'.75rem'}>{45} Reviews</Typography>
      </Stack>
    </div>
  );
}
