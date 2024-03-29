import {
  DarkMode,
  ExpandLess,
  ExpandMore,
  Language,
  Menu,
  Search,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { useState } from "react";
import useUserStore from "@/store/user";
import useThemeProvider from "@/store/theme";
import data from "@/data/library";

import SlidingMenu from "./components/slidingMenu";
import LoginModal from "../Login/loginModal";
import { PiShoppingCartLight } from "react-icons/pi";
import { SlUser } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import UserInfoDropdown from "./components/userInfoDropdown";

function Navbar() {
  const { darkMode, switchTheme } = useThemeProvider();
  const { user, lang, address } = useUserStore();

  const [openLanguage, setOpenLanguage] = useState(false);
  const [openUserInfo, setOpenUserInfo] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid
        zIndex={1000}
        position={"sticky"}
        top={0}
        left={0}
        container
        alignItems={"center"}
        width={"100%"}
        p={{ xs: "0.5rem 1rem", sm: "0.75rem 2rem", md: "0.5rem 6rem" }}
        sx={{
          bgcolor: {
            xs: "primaryBg.main",
            // md: "primaryBg.main",
          },
        }}
      >
        <Grid
          item
          sx={{ display: { md: "none" }, mr: { xs: "0.5rem", sm: "1rem" } }}
        >
          <IconButton onClick={handleOpen} color="primaryLight">
            <Menu sx={{ fontSize: { xs: 25, sm: 37.5 } }} />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography
            fontWeight={"bold"}
            pr={"1rem"}
            sx={{
              fontSize: {
                xs: "1.2rem",
                sm: "2rem",
                md: "2.2rem",
              },
              color: {
                xs: "primaryLight.main",
                // md: "primary.main",
              },
            }}
          >
            Demakk
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
          <FormControl
            sx={{
              minWidth: "25ch",
              flex: "1",
              display: "flex",
            }}
            variant="outlined"
            size="small"
          >
            <OutlinedInput
              placeholder="Search for any product..."
              sx={{
                borderRadius: "1.5rem",
                width: "100%",
                pl: "1rem",
                pr: "0.25rem",
                bgcolor: "secondaryBg.main",
                color: {
                  xs: "dark.main",
                  // md: "primaryBg.main",
                },
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="search"
                    size="small"
                    // onClick={handleSearch}
                    edge="end"
                    sx={{
                      m: "0",
                      aspectRatio: "initial",
                      borderRadius: "1.5rem",
                      bgcolor: "primaryBg.main",
                      color: {
                        xs: "contrastBg.main",
                        // md: "secondaryBg.main",
                      },
                      p: "0.25rem 1rem",
                      "&:hover": {
                        bgcolor: "primaryBg.main",
                      },
                    }}
                  >
                    <Box display={"flex"} color={"primaryBg"}>
                      <CiSearch color="inherit" fontSize={"1.5rem"} />
                    </Box>
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item display={"flex"} ml={"auto"}>
          <Grid container alignItems={"center"} spacing={{ xs: 0, md: 2 }}>
            <Grid className="language--container" item position={"relative"}>
              <Box
                display={"flex"}
                alignItems={"center"}
                sx={{ display: { xs: "none", md: "flex" }, cursor: "pointer" }}
                color={"bright.main"}
                gap={"0.25rem"}
                onClick={() => setOpenLanguage((p) => !p)}
              >
                {!address ? (
                  <IconButton
                    sx={{
                      fontSize: { xs: "small", sm: "medium" },
                      color: {
                        xs: "contrastBg.main",
                        // sm: "bright.main",
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
                      borderColor: "secondaryBg.main",
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
                  <Typography fontSize={"0.8rem"}>
                    {data.langs[lang]}/
                  </Typography>
                  <Box display={"flex"} alignItems={"center"}>
                    <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
                      BIRR
                    </Typography>
                    {!openLanguage ? (
                      <ExpandMore fontSize="small" color="bright" />
                    ) : (
                      <ExpandLess fontSize="small" color="bright" />
                    )}
                  </Box>
                </Box>
              </Box>

              {/* {openLanguage && (
                <LanguageDropdown setOpenLanguage={setOpenLanguage} />
              )} */}
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
                    xs: "bright.main",
                  },
                  cursor: "pointer",
                }}
              >
                <Box
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
                    {user?.name ? `Hi, ${user.name}` : "Welcome"}
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
                      {user?.name ? "Account" : "Sign in/Register"}
                    </Typography>
                    {!openUserInfo ? (
                      <ExpandMore fontSize="small" />
                    ) : (
                      <ExpandLess fontSize="small" />
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
                    xs: "bright.main",
                  },
                }}
              >
                <IconButton
                  size="medium"
                  sx={{
                    color: {
                      xs: "bright.main",
                    },
                  }}
                >
                  <Box sx={{ fontSize: { xs: 25, sm: 32.5, md: 37.5 } }}>
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
                        xs: "contrastBg.main",
                      },
                      color: { xs: "dark.main" },
                      borderRadius: "1rem",
                      textAlign: "center",
                    }}
                  >
                    0
                  </Typography>
                  <Box display={"flex"} alignItems={"center"}>
                    <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
                      Cart
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
          <FormControl
            sx={{ minWidth: "25ch", flex: "1", display: "flex" }}
            variant="outlined"
            size="small"
          >
            <OutlinedInput
              placeholder="Search for any product..."
              notched={false}
              sx={{
                borderRadius: "1.5rem",
                width: "100%",
                pl: "1rem",
                letterSpacing: "0.4px",
                bgcolor: "rgba(10,10,10,0.09)",
                color: "black",
                p: {
                  sm: "0.25rem 1.5rem",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderWidth: 0,
                },
              }}
              color="primary"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="search"
                    edge="end"
                    // onClick={handleSearch}
                  >
                    <Search />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>

        <IconButton
          sx={{
            position: "absolute",
            border: "1px solid white",
            top: "5rem",
            left: "1rem",
            zIndex: 10000,
            bgcolor: "primary.main",
            color: "primary.contrastText",
          }}
          onClick={() => switchTheme()}
        >
          <DarkMode color={darkMode ? "dark" : "white"} />
        </IconButton>
      </Grid>

      {openLogin && (
        <LoginModal open={openLogin} handleClose={() => setOpenLogin(false)} />
      )}

      <SlidingMenu open={open} handleClose={handleClose} />
    </>
  );
}

export default Navbar;
