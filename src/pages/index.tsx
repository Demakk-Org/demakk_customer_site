import Head from "next/head";
import styles from "@/styles/Home.module.css";

import Navbar from "@/features/Navbar";
import DiscountSale from "@/features/DiscountSale";
import PinLocation from "@/features/Home/PinLocation";
import Recommendation from "@/features/Recommendation";
import Footer from "@/features/Footer";
import DealsContainer from "@/features/DealsContainer";

import { Box } from "@mui/material";
import { ReactElement } from "react";
import RootLayout from "@/layout/RootLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import SearchContainerComponent from "@/features/Search/SearchContainerComponent";
import useParamsForSearch from "@/hooks/useParamsForSearch";
import { useLocalSearchStore } from "@/store/search";
import { InferGetServerSidePropsType } from "next";

export default function Home(
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
): ReactElement {
  const { searchState } = useLocalSearchStore();

  useParamsForSearch(_props.params);

  return (
    <>
      <Head>
        <title>Demakk E-commerce site</title>
        <meta
          name="description"
          content="The best e-commerce to shop with custom design"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <Box width={"100%"} minHeight={"100vh"} bgcolor={"background.paper"}>
          <RootLayout>
            <Navbar />
            {!searchState ? (
              <>
                <PinLocation />
                <Recommendation />
                <DealsContainer />
                <DiscountSale />
                <Footer />
              </>
            ) : (
              <SearchContainerComponent />
            )}
          </RootLayout>
        </Box>
      </main>
    </>
  );
}

export const getServerSideProps = async ({ query, locale }: LocalProp) => {
  const searchText = (query.searchText as string) || "";
  const searchFilter = {
    high: Number(query.lt) || null,
    low: Number(query.gt) || null,
  };

  let params = {
    text: searchText,
    filter: searchFilter,
  };

  return {
    props: {
      params,
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
        "actions",
      ])),
    },
  };
};

interface LocalProp {
  query: {
    searchText: string;
    lt: string | null;
    gt: string | null;
  };
  locale: string;
}
