import data from "@/data/library";
import useUserStore from "@/store/user";
import { Box, Typography } from "@mui/material";
import { LuMapPin } from "react-icons/lu";

function PinLocation() {
  const { address } = useUserStore();
  return (
    <Box
      display={{ xs: "flex", md: "none" }}
      gap={"0.75rem"}
      p={{ xs: "0.75rem 1rem", sm: "1rem 1.5rem" }}
      alignItems={"center"}
      // sx={{ bgcolor: "primaryBg.light" }}
      bgcolor={"background.paperBackground"}
    >
      <Box
        fontSize={{ xs: "1rem", sm: "2rem" }}
        display={"flex"}
        alignItems={"center"}
      >
        <LuMapPin fontSize={"inherit"} />
      </Box>
      <Typography
        // sx={{ color: "primaryBg.contrastText" }}
        color={"text.primary"}
        fontWeight={"bold"}
        fontSize={{ xs: "0.9rem", sm: "1.5rem" }}
      >
        Deliver to {data.region[address].name}
      </Typography>
    </Box>
  );
}

export default PinLocation;
