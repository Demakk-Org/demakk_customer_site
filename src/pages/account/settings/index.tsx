import Head from "next/head";
import { ReactElement } from "react";
import styles from "@/styles/Home.module.css";
import AccountPageLayout from "@/layout/AccountPageLayout";
import SettingTabContent from "@/features/AccountPage/components/SettingTabContent";
import { useTranslation } from "next-i18next";
import { LocalProp } from "@/pages/checkout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { InferGetServerSidePropsType } from "next";

export default function Home(
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
): ReactElement {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Settings</title>
        <meta
          name="description"
          content="The best e-commerce to shop with custom design"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <AccountPageLayout selectedTab={"settings"} pageType={t("settings")}>
          <SettingTabContent />
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
