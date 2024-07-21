import { Divider, Stack, Typography } from "@mui/material";

interface SellingDaysProps {
  days?: number;
}

export default function TopSellingCard({ days }: SellingDaysProps) {
  return (
    <Stack display={{ xs: "none", sm: "flex" }}>
      <Stack
        direction={"row"}
        divider={<Divider orientation="vertical" flexItem />}
        spacing={0.25}
        p={"0rem .3rem"}
        border={".05rem solid"}
        borderRadius={".2rem"}
        sx={{ backgroundColor: "background.lighter" }}
        alignItems={"center"}
      >
        <Typography
          minWidth={"max-content"}
          fontSize={".5rem"}
          fontWeight={"bold"}
        >
          Top selling
        </Typography>

        {days && (
          <Typography minWidth={"max-content"} fontSize={".6rem"}>
            {days} days
          </Typography>
        )}
      </Stack>
    </Stack>
  );
}
