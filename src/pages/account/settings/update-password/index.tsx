import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Box } from "@mui/material";
import NavBarContainer from "@/features/Navbar/containers/NavBarContainer";
import TopNavbar from "@/features/Navbar/containers/TopNavBar";
import { InferGetServerSidePropsType } from "next";
import { useEffect } from "react";
import useTokenStore from "@/store/token";
import PasswordUpdateComponent from "@/features/AccountPage/components/PasswordUpdateComponent";

export default function EmailUpdatePage(
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { setToken } = useTokenStore();

  useEffect(() => {
    setToken(_props.token);
  }, []);

  return (
    <>
      <Head>
        <title>Account Info</title>
        <meta
          name="description"
          content="The best e-commerce website in ethiopia"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <Box
          width={1}
          height={1}
          bgcolor={"background.paper"}
          overflow={"auto"}
          position={"relative"}
          pb={{ xs: "8rem", md: "0rem" }}
        >
          <NavBarContainer>
            <TopNavbar noSearchBar />
          </NavBarContainer>
          <PasswordUpdateComponent />
        </Box>
      </main>
    </>
  );
}

export const getServerSideProps = async ({
  locale,
  query,
}: {
  locale: string;
  query: { token: string };
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "auth",
        "response",
        "account",
        "modal",
        "actions",
        "order",
        "common",
        "policies",
        "footer",
        "locationNames",
        "saleTerms",
        "deal",
      ])),
      token: query.token,
    },
  };
};
