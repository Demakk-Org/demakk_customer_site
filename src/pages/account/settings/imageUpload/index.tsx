import Head from "next/head";
import { ReactElement, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import { useTranslation } from "next-i18next";
import { LocalProp } from "@/pages/checkout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { InferGetServerSidePropsType } from "next";
import NavBarContainer from "@/features/Navbar/containers/NavBarContainer";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Circle, Info } from "@mui/icons-material";
import {
  handleImageUpload,
  ImageType,
  VisuallyHiddenInput,
} from "@/component/FirebaseImageUploadComponent";
import useUserStore from "@/store/user";
import useTokenStore from "@/store/token";
import ImageFromFirebase from "@/component/ImageFromFirebase";

export default function ImageUpload(
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
): ReactElement {
  const { t } = useTranslation();
  const { user, setUser } = useUserStore();
  const { token, setToken } = useTokenStore();

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
            py={"1rem"}
            spacing={2}
          >
            <Typography fontSize={"1.3rem"} color={"text.primary"}>
              {t("uploadMyPhoto", { ns: "account" })}
            </Typography>

            <Stack spacing={3} pb={4}>
              <Stack
                p={1}
                width={1}
                direction={"row"}
                border={"2px solid"}
                borderRadius={1}
                borderColor={"info.main"}
                spacing={2}
              >
                <Info color="info" />
                <Typography color={"text.primary"}>
                  {t("imageStays24Hours", { ns: "policies" })}
                </Typography>
              </Stack>

              <Stack width={1}>
                <Grid container spacing={2} width={1} alignItems={"flex-start"}>
                  <Grid item xs={12} md={8}>
                    <Stack
                      border={"1px dashed"}
                      borderColor={"text.primary"}
                      borderRadius={2}
                      p={3}
                    >
                      <Stack
                        spacing={4}
                        alignSelf={{ xs: "center", md: "flex-start" }}
                        alignItems={"flex-start"}
                        justifyContent={"flex-start"}
                      >
                        <ImageFromFirebase
                          aspectRatio={"8/9"}
                          shape="square"
                          quality="240p"
                          name={user?.getUser().image.imageUrls[0] || ""}
                          width={"100px"}
                          type={ImageType.user}
                        />
                        <Button
                          component="label"
                          variant="contained"
                          size="small"
                          sx={{ width: "100%" }}
                          role={undefined}
                          tabIndex={-1}
                        >
                          {t("modifyPhoto", { ns: "actions" })}
                          <VisuallyHiddenInput
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={({ target }) => {
                              if (!token) return;

                              handleImageUpload({
                                e: target,
                                type: ImageType.user,
                                prefix: user?.getUser().id.toString(),
                                token,
                                setUser,
                              });
                            }}
                          />
                        </Button>
                      </Stack>
                    </Stack>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Stack
                      border={"1px dashed"}
                      borderRadius={2}
                      borderColor={"text.primary"}
                      p={2}
                      color={"text.primary"}
                      width={1}
                      spacing={2}
                      position={"relative"}
                    >
                      <Stack width={1} alignItems={"center"} pt={2}>
                        <Avatar
                          variant="square"
                          src="/assets/images/portraits.jpeg"
                          sx={{ width: "80%", height: "auto", margin: "auto" }}
                        />
                      </Stack>

                      <List>
                        <ListItem
                          disablePadding
                          sx={{ alignItems: "flex-start" }}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: "unset",
                              pr: "1rem",
                              pt: "0.75rem",
                            }}
                          >
                            <Circle sx={{ fontSize: "0.6rem" }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography fontSize={"0.8rem"}>
                                {t("imageUploadRule1", { ns: "policies" })}
                              </Typography>
                            }
                          />
                        </ListItem>

                        <ListItem
                          disablePadding
                          sx={{ alignItems: "flex-start" }}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: "unset",
                              pr: "1rem",
                              pt: "0.75rem",
                            }}
                          >
                            <Circle sx={{ fontSize: "0.6rem" }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography fontSize={"0.8rem"}>
                                {t("imageUploadRule2", { ns: "policies" })}
                              </Typography>
                            }
                          />
                        </ListItem>

                        <ListItem
                          disablePadding
                          sx={{ alignItems: "flex-start" }}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: "unset",
                              pr: "1rem",
                              pt: "0.75rem",
                            }}
                          >
                            <Circle sx={{ fontSize: "0.6rem" }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography fontSize={"0.8rem"}>
                                {t("imageUploadRule3", { ns: "policies" })}
                              </Typography>
                            }
                          />
                        </ListItem>
                      </List>

                      <Typography
                        sx={{
                          position: "absolute",
                          top: "-30px",
                          left: "2rem",
                          mt: "0",
                          p: "0 1rem",
                          bgcolor: "background.paper",
                          height: "40px",
                        }}
                      >
                        {t("uploadingRules", { ns: "account" })}
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </Stack>
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
      ])),
      token: query.token,
    },
  };
};
