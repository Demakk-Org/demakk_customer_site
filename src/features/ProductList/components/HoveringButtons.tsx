import { Box, Button, Grid, Stack } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

export default function HoveringButtons() {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const buttonContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const buttonContainer = buttonContainerRef.current;
    const checkOverflow = () => {
      if (
        buttonContainer &&
        buttonContainer.scrollWidth > buttonContainer.clientWidth
      ) {
        setIsOverflowing(true);
      } else {
        setIsOverflowing(false);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  return (
    <Box
      className="buttons"
      ref={buttonContainerRef}
      // container
      // spacing={1}
      // direction={"row"}
      // useFlexGap

      // display={"flex"}
      // flexDirection={isOverflowing ? "column" : "row"}
      width={1}
      gap={2}
      display="none"
      // justifyContent="space-between"
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
