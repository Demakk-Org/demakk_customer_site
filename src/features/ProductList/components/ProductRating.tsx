import { Typography, Rating, Stack } from '@mui/material';

interface RatingProps {
  value: number;
}
export default function ProductRating({ value }: RatingProps) {
  return (
    <>
      <Rating
        max={5}
        value={value}
        precision={0.5}
        readOnly
        sx={{
          display: { xs: 'none', sm: 'inline-flex' },
          fontSize: '.8rem',
        }}
      />
      <Stack
        direction={'row'}
        spacing={0.25}
        alignItems={'center'}
        display={{ xs: 'inline-flex', sm: 'none' }}
      >
        <Rating
          max={1}
          value={value / 5}
          precision={0.1}
          readOnly
          sx={{
            fontSize: '.8rem',
          }}
        />
        <Typography fontSize={'.75rem'}>{value}</Typography>
      </Stack>
    </>
  );
}
