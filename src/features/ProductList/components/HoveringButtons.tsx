import { Box, Button } from "@mui/material";
import React, { MouseEventHandler, RefObject } from "react";

interface ButtonProps {
  checkOverflowOnhover: MouseEventHandler<HTMLDivElement>;
  buttonContainerRef: RefObject<HTMLDivElement>;
}
export default function HoveringButtons({
  checkOverflowOnhover,
  buttonContainerRef,
}: ButtonProps) {
  return (
    <Box
      className="buttons"
      ref={buttonContainerRef}
      onMouseEnter={checkOverflowOnhover}
      gap={2}
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
        See preview
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
          Similar items
        </Button>
      </Box>
    </Box>
  );
}
