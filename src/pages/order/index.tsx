import Head from "next/head";
import { ReactElement } from "react";
import styles from "@/styles/Home.module.css";
import AccountPageLayout from "@/layout/AccountPageLayout";
import OrdersTabContent from "@/features/AccountPage/components/OrdersTabContent";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { LocalProp } from "../checkout";
import { InferGetServerSidePropsType } from "next";

export default function Home(
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
): ReactElement {
  const { t } = useTranslation(["order"]);
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
        <AccountPageLayout selectedTab={"orders"} pageType={t("order_one")}>
          <OrdersTabContent />
        </AccountPageLayout>
      </main>
    </>
  );
}

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
