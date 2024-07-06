import { Box, Typography } from "@mui/material";
import { Montserrat } from "next/font/google";
import { CiCreditCard1, CiDeliveryTruck } from "react-icons/ci";
import { GoShieldCheck } from "react-icons/go";
import { PiUsers } from "react-icons/pi";

import BenefitListCard from "./components/BenefitListCard";
import useUserStore from "@/store/user";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { t } from "i18next";

const font = Montserrat({ subsets: ["cyrillic"] });
function Recommendation() {
  const { lang } = useUserStore();
  return (
    <Box
      className="recommendation--section"
      display={{ xs: "none", md: "flex" }}
      p={{
        md: "2rem 4rem 0.5rem 4rem",
        xl: "2rem 12rem 0.5rem 12rem",
      }}
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
        {t("betterChoicesBetterPrices")}
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
          title={t("buyerProtection")}
          desc={t("buyerProtectionDescription")}
          icon={<GoShieldCheck />}
        />
      </Box>
    </Box>
  );
}

export default Recommendation;
