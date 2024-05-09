import { Typography } from "@mui/material";
import React from "react";

interface numberOfSoldProps {
  numOfSold?: number;
}

export default function SoldQuantity({ numOfSold }: numberOfSoldProps) {
  return (
    <>
      <Typography minWidth={"max-content"} fontSize={".75rem"}>
        {numOfSold} sold
      </Typography>
    </>
  );
}
