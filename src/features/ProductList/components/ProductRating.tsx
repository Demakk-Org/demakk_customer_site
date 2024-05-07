import { Typography, Rating, Stack } from "@mui/material";

interface RatingProps {
  ratingValue: number;
}
export default function ProductRating({ ratingValue }: RatingProps) {
  return (
    <>
      {ratingValue ? (
        <Rating
          max={5}
          value={ratingValue}
          precision={0.5}
          readOnly
          sx={{
            display: { xs: "none", sm: "inline-flex" },
            fontSize: "1rem",
          }}
        />
      ) : (
        <></>
      )}
      <Stack
        direction={"row"}
        spacing={0.25}
        alignItems={"center"}
        display={{ xs: "inline-flex", sm: "none" }}
      >
        <Rating
          max={1}
          value={ratingValue}
          precision={0.1}
          readOnly
          sx={{
            fontSize: ".8rem",
          }}
        />
        <Typography fontSize={".75rem"}>{ratingValue}</Typography>
      </Stack>
    </>
  );
}
