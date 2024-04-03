import { Box, Typography } from "@mui/material";
import { Montserrat } from "next/font/google";
import { CiCreditCard1, CiDeliveryTruck } from "react-icons/ci";
import { GoShieldCheck } from "react-icons/go";
import { PiUsers } from "react-icons/pi";

import BenefitListCard from "./components/BenefitListCard";
import language from "@/data/dictionary";

const font = Montserrat({ subsets: ["cyrillic"] });
function Recommendation() {
  return (
    <Box
      className="recommendation--section"
      display={{ xs: "none", md: "flex" }}
      p={{ md: "2rem 4rem 0.5rem 4rem", xl: "2rem 12rem 0.5rem 12rem" }}
      justifyContent={"space-between"}
      alignItems={"baseline"}
      bgcolor={"background.paper"}
    >
      <Typography
        fontSize={"1.5rem "}
        lineHeight={1.2}
        fontWeight={"bolder"}
        maxWidth={"250px"}
        className={font.className}
        color={"text.primary"}
      >
        {language.en.betterChoicesBetterPrices}
      </Typography>
      <Box display={"flex"} gap={"1rem"}>
        <BenefitListCard />
        <BenefitListCard
          title={language.en.shoppersWorldwide}
          desc={language.en.shoppersWorldwideDescription}
          icon={<PiUsers />}
        />
        <BenefitListCard
          title={language.en.fastDelivery}
          desc={language.en.fastDeliveryDescription}
          icon={<CiDeliveryTruck />}
        />
        <BenefitListCard
          title={language.en.safePayments}
          desc={language.en.safePaymentsDescription}
          icon={<CiCreditCard1 />}
        />
        <BenefitListCard
          title={language.en.buyerProtection}
          desc={language.en.buyerProtectionDescription}
          icon={<GoShieldCheck />}
        />
      </Box>
    </Box>
  );
}

export default Recommendation;
