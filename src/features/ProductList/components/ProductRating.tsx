import useProductStore from '@/store/product';
import { Typography, Rating, Stack } from '@mui/material';

// interface RatingProps {
//   ratingValue: number;
// }
export default function ProductRating() {
  const {product} = useProductStore()
  const data = product?.getProductforCard()
  return (
    <>
      <Rating
        max={5}
        value={data?.rating}
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
          value={data?.rating}
          precision={0.1}
          readOnly
          sx={{
            fontSize: '.8rem',
          }}
        />
        <Typography fontSize={'.75rem'}>{data?.rating}</Typography>
      </Stack>
    </>
  );
}
