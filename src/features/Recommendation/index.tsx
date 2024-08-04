import { Box, Typography } from "@mui/material";
import { Montserrat } from "next/font/google";
import { CiCreditCard1, CiDeliveryTruck } from "react-icons/ci";
import { GoShieldCheck } from "react-icons/go";
import { PiUsers } from "react-icons/pi";

import BenefitListCard from "./components/BenefitListCard";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { useTranslation } from "next-i18next";

const font = Montserrat({ subsets: ["cyrillic"] });
function Recommendation() {
  const { t } = useTranslation(["policies", "common"]);

  return (
    <Box width={1}>
      <Box
        className="recommendation--section"
        display={{ xs: "none", md: "flex" }}
        width={{ xs: "90%", md: 800, lg: 1100, xl: 1200 }}
        p={{ xs: "1rem 0", sm: "1.5rem 0", lg: "3rem 0" }}
        justifyContent={"space-between"}
        alignItems={"baseline"}
        bgcolor={"background.paper"}
        margin={"auto"}
      >
        <Typography
          fontSize={"1.5rem "}
          lineHeight={1.2}
          fontWeight={"bolder"}
          maxWidth={"250px"}
          className={font.className}
          color={"text.primary"}
        >
          {t("betterChoicesBetterPrices", { ns: "common" })}
        </Typography>
        <Box display={"flex"} gap={"1rem"}>
          <BenefitListCard
            icon={<RiMoneyDollarCircleLine />}
            title={t("valueForMoney")}
            desc={t("weOfferCompetitivePrices")}
          />
          <BenefitListCard
            title={t("shoppersWorldwide")}
            desc={t("shoppersWorldwideDescription")}
            icon={<PiUsers />}
          />
          <BenefitListCard
            title={t("fastDelivery")}
            desc={t("fastDeliveryDescription")}
            icon={<CiDeliveryTruck />}
          />
          <BenefitListCard
            title={t("safePayments")}
            desc={t("safePaymentsDescription")}
            icon={<CiCreditCard1 />}
          />
          <BenefitListCard
            title={t("buyerProtection", { ns: "common" })}
            desc={t("buyerProtectionDescription")}
            icon={<GoShieldCheck />}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Recommendation;
