import { Box, Grid, Link, List, ListItem, Typography } from "@mui/material";
import { Montserrat } from "next/font/google";
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

function Footer() {
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
            <FooterLinksTitle name={"Customer Services"} />
            <List disablePadding>
              <ListItem disablePadding disableGutters>
                <FooterLink name={"Help Center"} url={"#"} />
              </ListItem>
              <ListItem disablePadding disableGutters>
                <FooterLink
                  name={
                    "Transaction Services Agreement for non-EU/UK Consumers"
                  }
                  url={"#"}
                />
              </ListItem>
              <ListItem disablePadding disableGutters>
                <FooterLink
                  name={
                    "Terms and Conditions for EU/EEA/UK Consumers (Transactions)"
                  }
                  url={"#"}
                />
              </ListItem>
              <ListItem disablePadding disableGutters>
                <FooterLink url={"#"} name={"Help Center"} />
              </ListItem>
            </List>
          </Box>
          <Box flex={1} display={"flex"} flexDirection={"column"}>
            <Box
              flex={1}
              display={"flex"}
              flexDirection={"column"}
              mb={"0.5rem"}
            >
              <FooterLinksTitle name={"Shopping with us"} />
              <List disablePadding>
                <ListItem disablePadding disableGutters>
                  <FooterLink name={"Making payments"} url={"#"} />
                </ListItem>
                <ListItem disablePadding disableGutters>
                  <FooterLink name={"Delivery options"} url={"#"} />
                </ListItem>
                <ListItem disablePadding disableGutters>
                  <FooterLink name={"Buyer potection"} url={"#"} />
                </ListItem>
              </List>
            </Box>
            <Box flex={1} display={"flex"} flexDirection={"column"}>
              <FooterLinksTitle name={"Collaborate with us"} />
              <List disablePadding>
                <ListItem disablePadding disableGutters>
                  <FooterLink name={"Partnerships"} url={"#"} />
                </ListItem>
                <ListItem disablePadding disableGutters>
                  <FooterLink name={"Affiliate Programs"} url={"#"} />
                </ListItem>
                <ListItem disablePadding disableGutters>
                  <FooterLink name={"DS Center"} url={"#"} />
                </ListItem>
                <ListItem disablePadding disableGutters>
                  <FooterLink name={"Seller Log in"} url={"#"} />
                </ListItem>
                <ListItem disablePadding disableGutters>
                  <FooterLink
                    name={"Non-Chinese Seller Registration"}
                    url={"#"}
                  />
                </ListItem>
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
            alignItems={"baseline"}
            flexDirection={"column"}
          >
            <FooterLinksTitle name={"Pay with"} />
            <Grid container spacing={0.5}>
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
          <Box flex={2} display={"flex"} flexDirection={"column"}>
            <FooterLinksTitle name={"Stay connected"} />
            <Grid container columnSpacing={2.5}>
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
