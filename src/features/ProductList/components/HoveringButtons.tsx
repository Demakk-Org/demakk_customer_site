import { Button, Grid } from "@mui/material";
import React from "react";

export default function HoveringButtons() {
  return (
    <Grid
      container
      className="buttons"
      spacing={1}
      direction={"row"}
      width={1}
      display="none"
      justifyContent="space-between"
      alignItems={"center"}
      mt={"1rem"}
      zIndex={2}
    >
      <Grid item xs={6} width={1} height={1}>
        <Button
          variant="contained"
          color="primaryButton"
          sx={{
            fontSize: ".75rem",
            fontWeight: "bold",
            borderRadius: "24px",
            width: 1,
            height: 1,
          }}
        >
          See preview
        </Button>
      </Grid>
      <Grid item xs={6} width={1} height={1}>
        <Button
          variant="contained"
          color="primaryButton"
          sx={{
            fontSize: ".8rem",
            fontWeight: "bold",
            borderRadius: "24px",
            height: 1,
            lineHeight: 1,
          }}
        >
          Similar items
        </Button>
      </Grid>
    </Grid>
  );
}
