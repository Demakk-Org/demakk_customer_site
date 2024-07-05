import Head from "next/head";
import { Alert, Box, Snackbar } from "@mui/material";
import styles from "@/styles/Home.module.css";
import CheckOutNavBar from "@/features/Navbar/containers/CheckOutNavBar";
import CheckOutDisplaySection from "../../features/CheckOut/CheckOutDisplaySection";
import usePageStore from "@/store/page";
import Loading from "@/component/Loading";
import Footer from "@/features/Footer";
import useCheckOutStore from "@/store/checkOut";

function CheckOutPage() {
  const { loading, setSnackBar, snackBar } = usePageStore();
  const { checkOut } = useCheckOutStore();

  if (!checkOut) return <></>;

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
        {loading && <Loading />}
        <Snackbar
          autoHideDuration={2500}
          open={snackBar?.open}
          onClose={() => setSnackBar(null)}
          anchorOrigin={{ horizontal: "center", vertical: "top" }}
        >
          <Alert
            onClose={() => setSnackBar(null)}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {snackBar?.message}
          </Alert>
        </Snackbar>
      </main>
    </>
  );
}

export default CheckOutPage;
