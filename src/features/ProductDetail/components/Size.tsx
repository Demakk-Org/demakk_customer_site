import Pdata from "@/data/Pdata";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Size() {
  const [itemSize, setItemSize] = useState("");
  return (
    <Box>
      <Typography sx={{ fontWeight: "bold", fontSize: ".75rem", mb: ".5rem" }}>
        Size: {itemSize}
      </Typography>
      <Box position={"relative"} display={"flex"} gap={".5rem"}>
        {Pdata.sizes.map((size) => (
          <Box
            key={size}
            // direction={'row'}
            sx={{}}
          >
            <Button
              variant="outlined"
              onClick={() => setItemSize(size.toString())}
            >
              {size}
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
