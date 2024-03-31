import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import BottomNavbar from "@/components/Navbar/components/bottomNavbar";
import DiscountSale from "@/components/DiscountSale";
import PinLocation from "@/components/Home/PinLocation";
import Recommendation from "@/components/Recommendation";
import Footer from "@/components/Footer";
import DealsContainer from "@/components/DealsContainer";
import useThemeProvider from "@/store/theme";
import { Box } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { darkMode } = useThemeProvider();

  return (
    <>
      <Head>
        <title>Demakk Ecommerce site</title>
        <meta
          name="description"
          content="The best ecommerce to shop with custom design"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Box width={"100vw"} minHeight={"100vh"} bgcolor={"background.paper"}>
          {/* <Navbar /> */}
          {/* <BottomNavbar /> */}
          <PinLocation />
          <Recommendation />
          {/* <DiscountSale /> */}
          {/* <DealsContainer /> */}
          <Footer />
        </Box>
      </main>
    </>
  );
}
