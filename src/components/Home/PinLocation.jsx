import { Box, Typography } from "@mui/material";
import { LuMapPin } from "react-icons/lu";

function PinLocation() {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      gap={"0.75rem"}
      p={"0.5rem 1rem"}
    >
      <Box fontSize={"1rem"}>
        <LuMapPin fontSize={"inherit"} />
      </Box>
      <Typography fontWeight={"bold"} fontSize={"0.9rem"}>
        Deliver to Ethiopia
      </Typography>
    </Box>
  );
}

export default PinLocation;
