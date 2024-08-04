import { ReactElement } from "react";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import AccountPageLayout from "@/layout/AccountPageLayout";
import ShippingAddressTabContent from "@/features/AccountPage/components/ShippingAddressTabContent";
import { useTranslation } from "next-i18next";
import { InferGetServerSidePropsType } from "next";
import { LocalProp } from "../checkout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home(
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
): ReactElement {
  const { t } = useTranslation("account");

  return (
    <>
      <Head>
        <title>Address</title>
        <meta
          name="description"
          content="The best e-commerce to shop with custom design"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <AccountPageLayout
          selectedTab={"shippingAddress"}
          pageType={t("address")}
        >
          <ShippingAddressTabContent />
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
        "addressForm",
        "response",
      ])),
    },
  };
};
