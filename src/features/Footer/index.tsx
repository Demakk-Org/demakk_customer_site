import { Box, Grid, List } from "@mui/material";
import FooterLink from "./components/FooterLinks";
import FooterLinksTitle from "./components/FooterLinksTitle";
import PaymentCard from "./components/PaymentCard";
import {
  Facebook,
  Google,
  Instagram,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import FooterSocialLinks from "./components/FooterSocialLinks";
import getLanguage from "@/utils/getLanguage";
import useUserStore from "@/store/user";

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
            <FooterLinksTitle name={getLanguage("customerServices", lang)} />
            <List disablePadding>
              <FooterLink name={getLanguage("helpCenter", lang)} url={"#"} />
              <FooterLink
                name={getLanguage("transactionServicesAgreement", lang)}
                url={"#"}
              />
              <FooterLink
                name={getLanguage("tearmsAndConditions", lang)}
                url={"#"}
              />
              <FooterLink url={"#"} name={getLanguage("helpCenter", lang)} />
            </List>
          </Box>
          <Box flex={1} display={"flex"} flexDirection={"column"}>
            <Box
              flex={1}
              display={"flex"}
              flexDirection={"column"}
              mb={"0.5rem"}
            >
              <FooterLinksTitle name={getLanguage("shoppingWithUs", lang)} />
              <List disablePadding>
                <FooterLink
                  name={getLanguage("makingPayments", lang)}
                  url={"#"}
                />
                <FooterLink
                  name={getLanguage("deliveryOptions", lang)}
                  url={"#"}
                />
                <FooterLink
                  name={getLanguage("buyerProtection", lang)}
                  url={"#"}
                />
              </List>
            </Box>
            <Box flex={1} display={"flex"} flexDirection={"column"}>
              <FooterLinksTitle name={getLanguage("collaborateWithUs", lang)} />
              <List disablePadding>
                <FooterLink
                  name={getLanguage("partnerships", lang)}
                  url={"#"}
                />
                <FooterLink
                  name={getLanguage("affiliatePrograms", lang)}
                  url={"#"}
                />
                <FooterLink name={getLanguage("dsCenter", lang)} url={"#"} />
                <FooterLink name={getLanguage("sellerLogin", lang)} url={"#"} />
                <FooterLink
                  name={getLanguage("nonChineseSellerRegistration", lang)}
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
            <FooterLinksTitle name={getLanguage("payWith", lang)} />
            <Grid
              container
              spacing={0.5}
              justifyContent={{ xs: "center", sm: "unset" }}
            >
              <PaymentCard url={"/assets/images/pay.png"} />
              <PaymentCard url={"/assets/images/pay3.webp"} />
              <PaymentCard url={"/assets/images/pay2.webp"} />
              <PaymentCard url={"/assets/images/pay4.webp"} />
              <PaymentCard url={"/assets/images/pay5.webp"} />
              <PaymentCard url={"/assets/images/pay6.webp"} />
              <PaymentCard url={"/assets/images/pay11.webp"} />
              <PaymentCard url={"/assets/images/pay8.webp"} />
              <PaymentCard url={"/assets/images/pay9.webp"} />
              <PaymentCard url={"/assets/images/pay10.webp"} />
            </Grid>
          </Box>
          <Box
            flex={2}
            display={"flex"}
            flexDirection={"column"}
            alignItems={{ xs: "center", sm: "unset" }}
          >
            <FooterLinksTitle name={getLanguage("stayConnected", lang)} />
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
