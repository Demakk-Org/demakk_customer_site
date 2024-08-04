import Head from "next/head";
import { ReactElement, useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import { useTranslation } from "next-i18next";
import { LocalProp } from "@/pages/checkout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { InferGetServerSidePropsType } from "next";
import NavBarContainer from "@/features/Navbar/containers/NavBarContainer";
import { Box, Divider, Stack, Typography } from "@mui/material";
import UserProfileDisplayComponent from "@/features/AccountPage/components/UserProfileDisplayComponent";
import UserProfileEditComponent from "@/features/AccountPage/components/UserProfileEditComponent";
import useTokenStore from "@/store/token";

export default function ImageUpload(
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
): ReactElement {
  const { t } = useTranslation(["account"]);
  const { setToken } = useTokenStore();

  const [editProfile, setEditProfile] = useState(false);

  useEffect(() => {
    setToken(_props.token);
  }, []);

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
        <Box
          width={1}
          height={1}
          bgcolor={"background.paper"}
          position={"relative"}
          overflow={"auto"}
        >
          <NavBarContainer />
          <Stack
            margin={"auto"}
            divider={<Divider sx={{ borderColor: "text.secondary" }} />}
            maxWidth={"70%"}
            height={1}
            spacing={2}
            py={"1rem"}
          >
            <Typography fontSize={"1.3rem"} color={"text.primary"} px={4}>
              {t("editProfile")}
            </Typography>

            <Stack spacing={3} px={8} pb={4}>
              {!editProfile ? (
                <UserProfileDisplayComponent
                  setEditProfile={() => setEditProfile(true)}
                />
              ) : (
                <UserProfileEditComponent
                  setEditProfile={() => setEditProfile(false)}
                />
              )}
            </Stack>
          </Stack>
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
        "actions",
        "common",
        "policies",
        "account",
        "addressForm",
      ])),
      token: query.token || null,
    },
  };
};
