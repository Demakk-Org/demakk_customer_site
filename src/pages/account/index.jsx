import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import useUserStore from "@/store/user";
import { Typography } from "@mui/material";
import SmallDeviceLogin from "@/features/Login/smallDeviceLogin";

const inter = Inter({ subsets: ["latin"] });

function Account() {
  const { user } = useUserStore();
  const [openAccountModal, setOpenAccountModal] = useState(false);

  useEffect(() => {
    if (!user?.name) {
      setOpenAccountModal(true);
    }
  }, []);

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
        <Typography>Hi</Typography>
        {openAccountModal && (
          <SmallDeviceLogin
            open={openAccountModal}
            handleClose={() => setOpenAccountModal(false)}
          />
        )}
      </main>
    </>
  );
}

export default Account;
