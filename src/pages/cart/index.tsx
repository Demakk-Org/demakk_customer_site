import Head from "next/head";
import { useEffect } from "react";
import styles from "@/styles/Home.module.css";
import { Box } from "@mui/material";
import TopNavbar from "@/features/Navbar/containers/TopNavBar";
import CartDisplaySection from "@/features/Cart/CartDisplaySection";
import Loading from "@/component/Loading";

import useCartStore from "@/store/cart";
import useTokenStore from "@/store/token";
import Footer from "@/features/Footer";
import usePageStore from "@/store/page";

function CartPage() {
  const { loading } = usePageStore();
  const { setCart } = useCartStore();
  const { token } = useTokenStore();

  useEffect(() => {
    setCart({ token });
  }, [token, setCart]);

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
          pb={{ xs: "8rem", md: "0rem" }}
        >
          <TopNavbar />
          <CartDisplaySection />
          <Footer />
        </Box>
        {loading && <Loading />}
      </main>
    </>
  );
}

export default CartPage;
