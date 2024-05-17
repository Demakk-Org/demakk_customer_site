import React from "react";
import DescriptionDetail from "../../components/DescriptionDetail";
import { Box, Stack, Typography } from "@mui/material";

export default function DescriptionAndRatingDetail() {
  return (
    <div>
      <Stack
        width={1}
        height={"84px"}
        direction={"row"}
        position={"sticky"}
        spacing={3}
        alignItems={"center"}
      >
        <Typography >Description</Typography>
        <Typography>Specification</Typography>
        <Typography>Customer Reviews</Typography>
        <Typography>You may also like</Typography>
      </Stack>
      <Box>
        <DescriptionDetail />
      </Box>
    </div>
  );
}
