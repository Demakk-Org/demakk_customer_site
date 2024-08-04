import Head from "next/head";
import styles from "@/styles/Home.module.css";
import AccountPageLayout from "@/layout/AccountPageLayout";
import OverviewTabContent from "@/features/AccountPage/components/OverviewTabContent";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { InferGetServerSidePropsType } from "next";

export default function Home(
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { t } = useTranslation(["account"]);
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
        <AccountPageLayout selectedTab={"overview"} pageType={t("account")}>
          <OverviewTabContent />
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

interface LocalProp {
  locale: string;
}
