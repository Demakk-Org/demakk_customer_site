import { Box, Button, Typography } from "@mui/material";
import React, { RefObject } from "react";

interface ButtonProps {
  buttonContainerRef: RefObject<HTMLDivElement>;
}
export default function HoveringButtons({ buttonContainerRef }: ButtonProps) {
  return (
    <Box
      className="buttons"
      ref={buttonContainerRef}
      gap={1}
      display="none"
      alignItems={"center"}
      mt={"1rem"}
      zIndex={2}
    >
      <Button
        variant="contained"
        color="primaryButton"
        sx={{
          fontSize: ".75rem",
          fontWeight: "bold",
          borderRadius: "24px",
          minWidth: "max-content",
          width: 1,
        }}
      >
        <Typography
          fontSize={".8rem"}
          fontWeight={"bold"}
          sx={{
            "&:hover": {
              opacity: 0.8,
            },
          }}
        >
          See preview
        </Typography>
      </Button>

      <Box width={1}>
        <Button
          variant="contained"
          color="primaryButton"
          sx={{
            fontSize: ".8rem",
            fontWeight: "bold",
            borderRadius: "24px",
            width: 1,
            minWidth: "max-content",
          }}
        >
          <Typography
            fontSize={".8rem"}
            fontWeight={"bold"}
            sx={{
              "&:hover": {
                opacity: 0.7,
              },
            }}
          >
            Similar items
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}
