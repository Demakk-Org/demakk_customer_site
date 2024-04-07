import { Box, Typography } from "@mui/material";
import { Montserrat } from "next/font/google";
import { CiCreditCard1, CiDeliveryTruck } from "react-icons/ci";
import { GoShieldCheck } from "react-icons/go";
import { PiUsers } from "react-icons/pi";

import BenefitListCard from "./components/BenefitListCard";
import getLanguage from "@/utils/getLanguage";
import useUserStore from "@/store/user";

const font = Montserrat({ subsets: ["cyrillic"] });
function Recommendation() {
  const { lang } = useUserStore();
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
        {getLanguage("betterChoicesBetterPrices", lang)}
      </Typography>
      <Box display={"flex"} gap={"1rem"}>
        <BenefitListCard />
        <BenefitListCard
          title={getLanguage("shoppersWorldwide", lang)}
          desc={getLanguage("shoppersWorldwideDescription", lang)}
          icon={<PiUsers />}
        />
        <BenefitListCard
          title={getLanguage("fastDelivery", lang)}
          desc={getLanguage("fastDeliveryDescription", lang)}
          icon={<CiDeliveryTruck />}
        />
        <BenefitListCard
          title={getLanguage("safePayments", lang)}
          desc={getLanguage("safePaymentsDescription", lang)}
          icon={<CiCreditCard1 />}
        />
        <BenefitListCard
          title={getLanguage("buyerProtection", lang)}
          desc={getLanguage("buyerProtectionDescription", lang)}
          icon={<GoShieldCheck />}
        />
      </Box>
    </Box>
  );
}

export default Recommendation;
