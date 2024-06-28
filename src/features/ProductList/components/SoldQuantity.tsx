import { Typography } from "@mui/material";

interface numberOfSoldProps {
  numOfSold?: number;
}

export default function SoldQuantity({ numOfSold = 0 }: numberOfSoldProps) {
  return (
    <Typography minWidth={"max-content"} fontSize={".75rem"}>
      {numOfSold > 100
        ? `${Math.floor(numOfSold / 100) * 100}+ sold`
        : `${numOfSold} sold`}
    </Typography>
  );
}
