import Head from "next/head";
import { Box } from "@mui/material";
import styles from "@/styles/Home.module.css";
import CheckOutNavBar from "@/features/Navbar/containers/CheckOutNavBar";
import CheckOutDisplaySection from "../../features/CheckOut/CheckOutDisplaySection";
import Footer from "@/features/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { InferGetServerSidePropsType } from "next";

function CheckOutPage(
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <>
      <Head>
        <title>Checkout</title>
        <meta
          name="description"
          content="The best e-commerce website in ethiopia"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${styles.main}`}
        style={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          width={1}
          height={1}
          bgcolor={"background.paper"}
          overflow={"auto"}
          position={"relative"}
        >
          <CheckOutNavBar />
          <CheckOutDisplaySection />
          <Footer />
        </Box>
      </main>
    </>
  );
}

export default CheckOutPage;

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
      ])),
    },
  };
};

export interface LocalProp {
  locale: string;
}
