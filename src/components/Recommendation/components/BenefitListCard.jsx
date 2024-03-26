// import { MonetizationOnOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

function BenefitListCard({ icon, title, desc }) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      width={{ md: 150, xl: 175 }}
    >
      <Box display={"flex"} fontSize={"2rem"} pb={"0.5rem"}>
        {icon || <RiMoneyDollarCircleLine fontSize={"inherit"} />}
      </Box>
      <Typography fontSize={"0.7rem"} fontWeight={"bold"}>
        {title || "Value-for-money"}
      </Typography>
      <Typography fontSize={"0.6rem"} color={"gray"} textAlign={"center"}>
        {desc || "We offer competitive prices on millions of items"}
      </Typography>
    </Box>
  );
}

export default BenefitListCard;
