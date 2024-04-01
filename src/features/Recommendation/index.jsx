import { Box, Typography } from "@mui/material";
import { Montserrat } from "next/font/google";
import { CiCreditCard1, CiDeliveryTruck } from "react-icons/ci";
import { GoShieldCheck } from "react-icons/go";
import { PiUsers } from "react-icons/pi";

import BenefitListCard from "./components/BenefitListCard";

const font = Montserrat({ subsets: ["cyrillic"] });
function Recommendation() {
  return (
    <Box
      className="recommendation--section"
      display={{ xs: "none", md: "flex" }}
      p={{ md: "2rem 4rem 0.5rem 4rem", xl: "2rem 12rem 0.5rem 12rem" }}
      justifyContent={"space-between"}
      alignItems={"baseline"}
      bgcolor={"background.lighter"}
    >
      <Typography
        fontSize={"1.5rem "}
        lineHeight={1.2}
        fontWeight={"bolder"}
        maxWidth={"250px"}
        className={font.className}
        color={"text.primary"}
      >
        Better Choice&apos;s, better prices
      </Typography>
      <Box display={"flex"} gap={"1rem"}>
        <BenefitListCard />
        <BenefitListCard
          title={"Shoppers worldwide"}
          desc="More than 300 millions shoppers from 200+ countries & regions"
          icon={<PiUsers />}
        />
        <BenefitListCard
          title={"Fast delivery"}
          desc={
            "Faster delivery on selected items thanks to our improved logistics"
          }
          icon={<CiDeliveryTruck />}
        />
        <BenefitListCard
          title={"Safe payments"}
          desc={"Safe payment methods preferred by international shoppers"}
          icon={<CiCreditCard1 />}
        />
        <BenefitListCard
          title={"Buyer protection"}
          desc={"Get a refund if items arrive late or not as described"}
          icon={<GoShieldCheck />}
        />
      </Box>
    </Box>
  );
}

export default Recommendation;
