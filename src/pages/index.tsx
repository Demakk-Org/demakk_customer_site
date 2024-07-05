import Head from "next/head";
import styles from "@/styles/Home.module.css";

import Navbar from "@/features/Navbar";
import DiscountSale from "@/features/DiscountSale";
import PinLocation from "@/features/Home/PinLocation";
import Recommendation from "@/features/Recommendation";
import Footer from "@/features/Footer";
import DealsContainer from "@/features/DealsContainer";

import { Box } from "@mui/material";
import { ReactElement } from "react";
import RootLayout from "@/layout/RootLayout";
import Loading from "@/component/Loading";
import useCartStore from "@/store/cart";

export default function Home(): ReactElement {
  const { loading } = useCartStore();
  return (
    <>
      <Head>
        <title>Demakk E-commerce site</title>
        <meta
          name="description"
          content="The best e-commerce to shop with custom design"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${styles.main}`}
        style={{ overflow: loading ? "hidden" : "auto" }}
      >
        <Box width={"100%"} minHeight={"100vh"} bgcolor={"background.paper"}>
          <RootLayout>
            <Navbar />
            <PinLocation />
            <Recommendation />
            {/* <DealsContainer /> */}
            <DiscountSale />
            <Footer />
          </RootLayout>
          {loading && <Loading />}
        </Box>
      </main>
    </>
  );
}
