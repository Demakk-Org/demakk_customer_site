import {
  DarkMode,
  ExpandLess,
  ExpandMore,
  Language,
  Menu,
  PersonOutlineOutlined,
} from "@mui/icons-material";
import { Avatar, Box, Grid, IconButton, Typography } from "@mui/material";

import { PiShoppingCartLight } from "react-icons/pi";

import { useState } from "react";
import useUserStore from "@/store/user";
import useThemeProvider from "@/store/theme";
import data from "@/data/library";

import SlidingMenu from "../components/slidingMenu";
import UserInfoDropdown from "../components/userInfoDropdown";
import LanguageDropdown from "../components/languageDropdown";
import LoginModal from "@/features/Login/loginModal";
import SearchBar from "../components/SearchBar";
import useCartStore from "@/store/cart";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";

function TopNavbar({ noSearchBar }: { noSearchBar?: boolean }) {
  const router = useRouter();
  const { t } = useTranslation(["common", "auth", "account"]);

  const { switchTheme } = useThemeProvider();
  const { user, address } = useUserStore();
  const { cart } = useCartStore();

  const [openLanguage, setOpenLanguage] = useState(false);
  const [openUserInfo, setOpenUserInfo] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box width={1} zIndex={1000} bgcolor={"background.lightOpaque"}>
        <Grid
          container
          display={"grid"}
          alignItems={"center"}
          margin={"auto"}
          width={{ xs: "90%", md: 800, lg: 1100, xl: 1200 }}
          px={{ xs: "0.5rem", sm: "0.75rem", md: "0.5rem" }}
          py={"0.5rem"}
          gridTemplateColumns={"repeat(12, 1fr)"}
        >
          <Grid
            item
            sx={{ display: { md: "none" }, mr: { xs: "0.5rem", sm: "1rem" } }}
            gridColumn={{ xs: "1 / 2", md: 0 }}
            gridRow={"1/2"}
          >
            <IconButton onClick={handleOpen} color={"primaryButton"}>
              <Menu sx={{ fontSize: { xs: 25, sm: 37.5 } }} />
            </IconButton>
          </Grid>

          <Grid item gridRow={"1/2"} gridColumn={{ xs: "2/4", md: "1/2" }}>
            <Link href={"/"} style={{ textDecoration: "none" }}>
              <Typography
                fontWeight={"bold"}
                pr={"1rem"}
                sx={{
                  cursor: "pointer",
                  fontSize: {
                    xs: "1.2rem",
                    sm: "2rem",
                    md: "2.2rem",
                  },
                  color: {
                    xs: "text.primary",
                  },
                }}
              >
                {t("demakk", { ns: "common" })}
              </Typography>
            </Link>
          </Grid>

          <Grid
            className="search--container"
            item
            xs={12}
            md
            gridRow={{ xs: "2 / 3", md: "1/2" }}
            gridColumn={{ xs: "1 / -1", md: "2/9" }}
            sx={{
              mt: {
                xs: "0.5rem",
                sm: "1rem",
              },
              m: { md: "0" },
              px: { xs: "0", lg: "2rem" },
            }}
          >
            {!noSearchBar && <SearchBar />}
          </Grid>

          <Grid
            item
            display={"flex"}
            ml={"auto"}
            gridRow={1 / -1}
            gridColumn={{ xs: "5/-1", md: "0/-1" }}
          >
            <Grid container alignItems={"center"} spacing={{ xs: 0, md: 2 }}>
              <Grid className="language--container" item position={"relative"}>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  sx={{
                    display: { xs: "none", md: "flex" },
                    cursor: "pointer",
                  }}
                  color={"text.primary"}
                  gap={"0.25rem"}
                  onClick={() => setOpenLanguage((p) => !p)}
                >
                  {!address ? (
                    <IconButton
                      sx={{
                        fontSize: { xs: "small", sm: "medium" },
                        bgcolor: "background.lighter",
                        color: {
                          xs: "text.primary",
                        },
                      }}
                    >
                      <Language fontSize="large" />
                    </IconButton>
                  ) : (
                    <Avatar
                      sx={{
                        width: 25,
                        height: 20,
                        border: "1px solid",
                        borderColor: "text.primary",
                      }}
                      variant="square"
                      src={data.flags[address]}
                    />
                  )}
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    fontSize={"0.5rem"}
                  >
                    <Typography fontSize={"0.8rem"} color={"text.primary"}>
                      {t("currentLanguage")}/
                    </Typography>
                    <Box display={"flex"} alignItems={"center"}>
                      <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
                        {t("birr")}
                      </Typography>
                      {!openLanguage ? (
                        <ExpandMore fontSize="small" color={"action"} />
                      ) : (
                        <ExpandLess fontSize="small" color={"action"} />
                      )}
                    </Box>
                  </Box>
                </Box>

                {openLanguage && (
                  <LanguageDropdown setOpenLanguage={setOpenLanguage} />
                )}
              </Grid>

              <Grid
                className="userInfo--container"
                item
                position={"relative"}
                onMouseOver={() => setOpenUserInfo(true)}
                onMouseLeave={() => setOpenUserInfo(false)}
              >
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  gap={"0.5rem"}
                  sx={{
                    color: {
                      xs: "text.primary",
                    },
                    cursor: "pointer",
                  }}
                >
                  <Box
                    display={"flex"}
                    sx={{
                      fontSize: {
                        xs: 20,
                        sm: 27.5,
                        md: 32.5,
                      },
                    }}
                  >
                    <IconButton
                      onClick={() => router.push("/account")}
                      sx={{ display: { xs: "flex", md: "none", p: "0" } }}
                    >
                      <Box
                        display={"flex"}
                        sx={{
                          fontSize: { xs: 25, sm: 32.5, md: 37.5 },
                          color: "text.primary",
                        }}
                      >
                        <PersonOutlineOutlined
                          style={{ fontSize: "inherit" }}
                        />
                      </Box>
                    </IconButton>
                    <PersonOutlineOutlined
                      fontSize="inherit"
                      sx={{ display: { xs: "none", md: "inline" } }}
                    />
                  </Box>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    fontSize={"0.5rem"}
                  >
                    <Typography
                      fontSize={"0.75rem"}
                      sx={{ display: { xs: "none", lg: "flex" } }}
                    >
                      {user
                        ? `${t("hi")}, ${user?.getUser().firstName}`
                        : t("welcome")}
                    </Typography>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      sx={{ display: { xs: "none", sm: "flex" } }}
                    >
                      <Typography
                        fontSize={"0.75rem"}
                        fontWeight={"bold"}
                        sx={{ display: { xs: "none", lg: "inline" } }}
                      >
                        {user
                          ? t("account", { ns: "account" })
                          : `${t("signIn", { ns: "auth" })}/${t("register", {
                              ns: "auth",
                            })}`}
                      </Typography>
                      {!openUserInfo ? (
                        <ExpandMore
                          fontSize="small"
                          sx={{ display: { xs: "none", lg: "inline" } }}
                        />
                      ) : (
                        <ExpandLess
                          fontSize="small"
                          sx={{ display: { xs: "none", lg: "inline" } }}
                        />
                      )}
                    </Box>
                  </Box>
                </Box>
                {openUserInfo && (
                  <UserInfoDropdown openLogin={() => setOpenLogin(true)} />
                )}
              </Grid>

              <Grid item className="cart--container">
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  sx={{
                    color: {
                      xs: "text.primary",
                    },
                  }}
                >
                  <IconButton
                    size="medium"
                    sx={{ aspectRatio: 1 }}
                    onClick={() => router.push("/cart")}
                  >
                    <Box
                      display={"flex"}
                      sx={{
                        fontSize: { xs: 25, sm: 32.5, md: 37.5 },
                        color: "text.primary",
                      }}
                    >
                      <PiShoppingCartLight style={{ fontSize: "inherit" }} />
                    </Box>
                  </IconButton>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"0.25rem"}
                    fontSize={"0.5rem"}
                    sx={{ display: { xs: "none", sm: "flex" } }}
                  >
                    <Typography
                      fontSize={"0.6rem"}
                      fontWeight={"bold"}
                      sx={{
                        bgcolor: {
                          xs: "text.primary",
                        },
                        color: { xs: "background.paper" },
                        borderRadius: "1rem",
                        textAlign: "center",
                      }}
                    >
                      {cart?.getCart().orderItems.length}
                    </Typography>
                    <Box display={"flex"} alignItems={"center"}>
                      <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
                        {t("cart")}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <IconButton
            sx={{
              position: "absolute",
              border: "1px solid white",
              top: "12rem",
              left: "1rem",
              zIndex: 10000,
              bgcolor: "background.paper",
              borderColor: "text.primary",
              color: "demakk.contrast",
            }}
            onClick={() => switchTheme()}
          >
            <DarkMode color={"contrast"} />
          </IconButton>
        </Grid>
      </Box>

      {openLogin && (
        <LoginModal open={openLogin} handleClose={() => setOpenLogin(false)} />
      )}

      <SlidingMenu open={open} handleClose={handleClose} />
    </>
  );
}

export default TopNavbar;
