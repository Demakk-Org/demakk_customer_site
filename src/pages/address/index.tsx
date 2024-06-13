import { ReactElement } from "react";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import AccountPageLayout from "@/layout/AccoutPageLayout";
import ShippingAddressTabContent from "@/features/AccountPage/components/ShippingAddressTabContent";

export default function Home(): ReactElement {
  return (
    <>
      <Head>
        <title>Order</title>
        <meta
          name="description"
          content="The best e-commerce to shop with custom design"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <AccountPageLayout selectedTab={4} pageType="address">
          <ShippingAddressTabContent />
        </AccountPageLayout>
      </main>
    </>
  );
}
