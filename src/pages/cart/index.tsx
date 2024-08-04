import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Box } from "@mui/material";
import TopNavbar from "@/features/Navbar/containers/TopNavBar";
import CartDisplaySection from "@/features/Cart/CartDisplaySection";

import Footer from "@/features/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { InferGetServerSidePropsType } from "next";
import NavBarContainer from "@/features/Navbar/containers/NavBarContainer";

function CartPage(
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <>
      <Head>
        <title>Cart</title>
        <meta
          name="description"
          content="The best e-commerce website in ethiopia"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <Box
          width={1}
          height={1}
          bgcolor={"background.paper"}
          overflow={"auto"}
          position={"relative"}
          pb={{ xs: "8rem", md: "0rem" }}
        >
          <NavBarContainer>
            <TopNavbar />
          </NavBarContainer>
          <CartDisplaySection />
          <Footer />
        </Box>
      </main>
    </>
  );
}

export default CartPage;

export const getServerSideProps = async ({ locale }: LocalProp) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "order",
        "actions",
        "auth",
        "common",
        "policies",
        "footer",
        "locationNames",
        "modal",
        "saleTerms",
        "deal",
        "account",
        "response",
      ])),
    },
  };
};

interface LocalProp {
  locale: string;
}
