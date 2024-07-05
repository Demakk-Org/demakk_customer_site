import styles from "@/styles/Home.module.css";
import Head from "next/head";
import AccountPageLayout from "@/layout/AccountPageLayout";
import OverviewTabContent from "@/features/AccountPage/components/OverviewTabContent";

export default function Home() {
  return (
    <>
      <Head>
        <title>Account</title>
        <meta
          name="description"
          content="The best e-commerce to shop with custom design"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <AccountPageLayout selectedTab={0} pageType="account">
          <OverviewTabContent />
        </AccountPageLayout>
      </main>
    </>
  );
}
