import { ReactElement } from "react";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import AccountPageLayout from "@/layout/AccoutPageLayout";
import OrdersTabContent from "@/features/AccountPage/components/OrdersTabContent";

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
        <AccountPageLayout selectedTab={1} pageType="order">
          <OrdersTabContent />
        </AccountPageLayout>
      </main>
    </>
  );
}
