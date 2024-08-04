import Head from "next/head";
import { ReactElement } from "react";
import styles from "@/styles/Home.module.css";
import AccountPageLayout from "@/layout/AccountPageLayout";
import OrderDetailTabContent from "@/features/AccountPage/components/OrderDetailTabContent";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home(
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
): ReactElement {
  const { t } = useTranslation("order");
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
          <OrderDetailTabContent orderId={_props.orderId} />
        </AccountPageLayout>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  locale,
}) => {
  return {
    props: {
      orderId: params?.orderId,
      ...(await serverSideTranslations(locale ?? "en", [
        "common",
        "policies",
        "footer",
        "locationNames",
        "modal",
        "saleTerms",
        "deal",
        "auth",
        "account",
        "response",
        "order",
      ])),
    },
  };
};
