import { Box, Grid, List } from "@mui/material";
import {
  Facebook,
  Google,
  Instagram,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import FooterLink from "./components/FooterLinks";
import FooterLinksTitle from "./components/FooterLinksTitle";
import PaymentCard from "./components/PaymentCard";
import FooterSocialLinks from "./components/FooterSocialLinks";
import useUserStore from "@/store/user";
import "@/language/translation";
import { t } from "i18next";

function Footer() {
  const { lang } = useUserStore();

  return (
    <Box width={1} bgcolor={"background.lighter"}>
      <Box
        display={"flex"}
        gap={{ xs: 2, sm: 4, md: 6 }}
        p={{ xs: "1rem 0", sm: "1.5rem 0", lg: "3rem 0" }}
        margin={"auto"}
        width={{ xs: "90%", md: 800, lg: 1100, xl: 1200 }}
        flexDirection={{ xs: "column", sm: "row" }}
      >
        <Box flex={1} display={"flex"} gap={"1rem"} alignItems={"baseline"}>
          <Box flex={1} display={"flex"} flexDirection={"column"}>
            <FooterLinksTitle name={t("customerServices")} />
            <List disablePadding>
              <FooterLink name={t("helpCenter")} url={"#"} />
              <FooterLink name={t("transactionServicesAgreement")} url={"#"} />
              <FooterLink name={t("termsAndConditions")} url={"#"} />
              <FooterLink url={"#"} name={t("helpCenter")} />
            </List>
          </Box>
          <Box flex={1} display={"flex"} flexDirection={"column"}>
            <Box
              flex={1}
              display={"flex"}
              flexDirection={"column"}
              mb={"0.5rem"}
            >
              <FooterLinksTitle name={t("shoppingWithUs")} />
              <List disablePadding>
                <FooterLink name={t("makingPayments")} url={"#"} />
                <FooterLink name={t("deliveryOptions")} url={"#"} />
                <FooterLink name={t("buyerProtection")} url={"#"} />
              </List>
            </Box>
            <Box flex={1} display={"flex"} flexDirection={"column"}>
              <FooterLinksTitle name={t("collaborateWithUs")} />
              <List disablePadding>
                <FooterLink name={t("partnerships")} url={"#"} />
                <FooterLink name={t("affiliatePrograms")} url={"#"} />
                <FooterLink name={t("dsCenter")} url={"#"} />
                <FooterLink name={t("sellerLogin")} url={"#"} />
                <FooterLink
                  name={t("nonChineseSellerRegistration")}
                  url={"#"}
                />
              </List>
            </Box>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flex={1}
          gap={{ sm: "1rem", md: "2rem" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <Box
            flex={3}
            display={"flex"}
            alignItems={{ xs: "center", sm: "baseline" }}
            flexDirection={"column"}
            justifyContent={{ xs: "center", sm: "unset" }}
          >
            <FooterLinksTitle name={t("payWith")} />
            <Grid
              container
              spacing={0.5}
              justifyContent={{ xs: "center", sm: "unset" }}
            >
              <PaymentCard url={"/assets/images/paymentCards/pay.png"} />
              <PaymentCard url={"/assets/images/paymentCards/pay3.webp"} />
              <PaymentCard url={"/assets/images/paymentCards/pay2.webp"} />
              <PaymentCard url={"/assets/images/paymentCards/pay4.webp"} />
              <PaymentCard url={"/assets/images/paymentCards/pay5.webp"} />
              <PaymentCard url={"/assets/images/paymentCards/pay6.webp"} />
              <PaymentCard url={"/assets/images/paymentCards/pay11.webp"} />
              <PaymentCard url={"/assets/images/paymentCards/pay8.webp"} />
              <PaymentCard url={"/assets/images/paymentCards/pay9.webp"} />
              <PaymentCard url={"/assets/images/paymentCards/pay10.webp"} />
            </Grid>
          </Box>
          <Box
            flex={2}
            display={"flex"}
            flexDirection={"column"}
            alignItems={{ xs: "center", sm: "unset" }}
          >
            <FooterLinksTitle name={t("stayConnected")} />
            <Grid
              container
              columnSpacing={2.5}
              justifyContent={{ xs: "center", sm: "unset" }}
            >
              <FooterSocialLinks icon={<Facebook />} url={"#facebook"} />
              <FooterSocialLinks icon={<Google />} url={"#google"} />
              <FooterSocialLinks icon={<Twitter />} url={"#twitter"} />
              <FooterSocialLinks icon={<Instagram />} url={"#instagram"} />
              <FooterSocialLinks icon={<WhatsApp />} url={"#whatsup"} />
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
