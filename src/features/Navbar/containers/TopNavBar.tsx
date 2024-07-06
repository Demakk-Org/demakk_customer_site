import {
  DarkMode,
  ExpandLess,
  ExpandMore,
  Language,
  Menu,
} from "@mui/icons-material";
import { Avatar, Box, Grid, IconButton, Typography } from "@mui/material";

import { PiShoppingCartLight } from "react-icons/pi";
import { SlUser } from "react-icons/sl";

import { useEffect, useState } from "react";
import useUserStore from "@/store/user";
import useThemeProvider from "@/store/theme";
import data from "@/data/library";

import SlidingMenu from "../components/slidingMenu";
import UserInfoDropdown from "../components/userInfoDropdown";
import LanguageDropdown from "../components/languageDropdown";
import LoginModal from "@/features/Login/loginModal";
import SearchBar from "../components/SearchBar";
import useTokenStore from "@/store/token";
import useCartStore from "@/store/cart";
import { useRouter } from "next/router";
import { t } from "i18next";

function TopNavbar() {
  const router = useRouter();

  const { darkMode, switchTheme } = useThemeProvider();
  const { user, setUser, lang, address } = useUserStore();
  const { cart, setCart } = useCartStore();
  const { token } = useTokenStore();

  const [openLanguage, setOpenLanguage] = useState(false);
  const [openUserInfo, setOpenUserInfo] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (token) {
      setUser(token);
      setCart({ token });
    } else {
      setCart({ token });
    }
  }, [token, setUser, setCart]);

  return (
    <>
      <Grid
        zIndex={1000}
        position={"relative"}
        top={0}
        left={0}
        container
        alignItems={"center"}
        width={"100%"}
        p={{ xs: "0.5rem 1rem", sm: "0.75rem 2rem", md: "0.5rem 6rem" }}
        sx={{
          bgcolor: {
            xs: "background.lightOpaque",
          },
        }}
      >
        <Grid
          item
          sx={{ display: { md: "none" }, mr: { xs: "0.5rem", sm: "1rem" } }}
        >
          <IconButton onClick={handleOpen} color={"primaryButton"}>
            <Menu sx={{ fontSize: { xs: 25, sm: 37.5 } }} />
          </IconButton>
        </Grid>

        <Grid item>
          <Typography
            fontWeight={"bold"}
            pr={"1rem"}
            onClick={() => router.push("/")}
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
            {t("demakk")}
          </Typography>
        </Grid>

        <Grid
          className="search--container"
          item
          md
          sx={{
            m: "0 2rem",
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        >
          <SearchBar />
        </Grid>

        <Grid item display={"flex"} ml={"auto"}>
          <Grid container alignItems={"center"} spacing={{ xs: 0, md: 2 }}>
            <Grid className="language--container" item position={"relative"}>
              <Box
                display={"flex"}
                alignItems={"center"}
                sx={{ display: { xs: "none", md: "flex" }, cursor: "pointer" }}
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
                    {t(data.langs[lang])}/
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
                  <SlUser style={{ fontSize: "inherit" }} />
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  fontSize={"0.5rem"}
                >
                  <Typography
                    fontSize={"0.75rem"}
                    sx={{ display: { xs: "none", xl: "flex" } }}
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
                      sx={{ display: { xs: "none", xl: "inline" } }}
                    >
                      {user ? t("account") : `${t("signIn")}/${t("register")}`}
                    </Typography>
                    {!openUserInfo ? (
                      <ExpandMore
                        fontSize="small"
                        sx={{ display: { xs: "none", xl: "inline" } }}
                      />
                    ) : (
                      <ExpandLess
                        fontSize="small"
                        sx={{ display: { xs: "none", xl: "inline" } }}
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

        <Grid
          className="search--container"
          item
          xs={12}
          flex={1}
          sx={{
            display: {
              xs: "flex",
              md: "none",
            },
            mt: {
              xs: "0.5rem",
              sm: "1rem",
            },
          }}
        >
          <SearchBar />
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
            color: "text.primary",
          }}
          onClick={() => switchTheme()}
        >
          <DarkMode color={darkMode ? "dark" : "bright"} />
        </IconButton>
      </Grid>

      {openLogin && (
        <LoginModal open={openLogin} handleClose={() => setOpenLogin(false)} />
      )}

      <SlidingMenu open={open} handleClose={handleClose} />
    </>
  );
}

export default TopNavbar;
