import { Box, Typography } from "@mui/material";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

function BenefitListCard({ icon, title, desc }) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      width={{ md: 150 }}
    >
      <Box
        display={"flex"}
        fontSize={"2rem"}
        pb={"0.5rem"}
        color={"text.primary"}
      >
        {icon || (
          <RiMoneyDollarCircleLine color="inherit" fontSize={"inherit"} />
        )}
      </Box>
      <Typography
        color={"text.primary"}
        fontSize={"0.7rem"}
        fontWeight={"bold"}
      >
        {title || "Value-for-money"}
      </Typography>
      <Typography
        fontSize={"0.6rem"}
        color={"text.secondary"}
        textAlign={"center"}
      >
        {desc || "We offer competitive prices on millions of items"}
      </Typography>
    </Box>
  );
}

export default BenefitListCard;
