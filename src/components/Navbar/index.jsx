import {
  ExpandLess,
  ExpandMore,
  Language,
  Menu,
  Search,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import AllCategories from "./components/allCategories";
import { useState } from "react";
import SelectBotton from "./components/selectButton";
import NavbarButton from "./components/navbarButton";
import SlidingMenu from "./components/slidingMenu";
import useUserStore from "@/store/user";
import UserInfoDropdown from "./components/userInfoDropdown";
import LanguageDropdown from "./components/languageDropdown";
import data from "@/data/library";
import LoginModal from "../Login/loginModal";
import { PiShoppingCartLight } from "react-icons/pi";
import { SlUser } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  const { user, lang, address } = useUserStore();
  console.log(address);

  const [allPropOpen, setAllPropOpen] = useState(false);
  const [openMore, setOpenMore] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);
  const [openUserInfo, setOpenUserInfo] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleOnMouseOver = () => {
    let container = document.getElementById("more-product-container");
    let body = document.querySelector("body");
    let after = document.getElementById("after-container");

    if (container && body) {
      let containerLeft = container.getBoundingClientRect().left;
      let containerWidth = container.getBoundingClientRect().width;
      let bodyWidth = body.clientWidth;

      if (bodyWidth - (containerWidth + containerLeft) < 0) {
        container.style.left = "unset";
        container.style.right = 0;
        after.style.left = "unset";
        after.style.right = "20%";
      }
    }
  };

  return (
    <
      // Box
      // sx={{
      //   p: {
      //     xs: "0 0.75rem 0.5rem 1rem",
      //     sm: "0 2rem 0.75rem 2.5rem",
      //     md: "0 2rem 0.5rem 4rem",
      //     xl: "0 4rem 0.5rem 9rem",
      //   },
      //   bgcolor: {
      //     xs: "white",
      //     md: "dark.main",
      //   },
      //   color: {
      //     xs: "black",
      //     md: "white",
      //   },
      // }}
      // width={1}
    >
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
            xs: "white",
            md: "dark.main",
          },
        }}
      >
        <Grid
          item
          sx={{ display: { md: "none" }, mr: { xs: "0.5rem", sm: "1rem" } }}
        >
          <IconButton onClick={handleOpen}>
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
                xs: "primary.main",
                md: "primaryLight.main",
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
                bgcolor: "white.main",
                color: {
                  xs: "white",
                  md: "black",
                },
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="search"
                    size="small"
                    // onClick={handleSearch}
                    edge="end"
                    color="black"
                    sx={{
                      m: "0",
                      aspectRatio: "initial",
                      borderRadius: "1.5rem",
                      bgcolor: "dark.main",
                      color: {
                        xs: "dark.main",
                        md: "white.main",
                      },
                      p: "0.25rem 1rem",
                      "&:hover": {
                        bgcolor: "dark.main",
                      },
                    }}
                  >
                    <CiSearch color="white" fontSize={"1.5rem"} />
                    {/* <Search color="white" /> */}
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
                color={"white.main"}
                gap={"0.25rem"}
                onClick={() => setOpenLanguage((p) => !p)}
              >
                {!address ? (
                  <IconButton
                    sx={{
                      fontSize: { xs: "small", sm: "medium" },
                      color: {
                        xs: "dark.main",
                        sm: "white.main",
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
                      // p: "0.25rem",
                      border: "1px solid lightgray",
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
                      <ExpandMore fontSize="small" color="white" />
                    ) : (
                      <ExpandLess fontSize="small" color="white" />
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
                    xs: "dark.main",
                    md: "white.main",
                    cursor: "pointer",
                  },
                }}
              >
                <Box
                  sx={{
                    color: {
                      xs: "dark.main",
                      md: "white.main",
                    },
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
                      {user?.name ? `Account` : "Sign in/Register"}
                    </Typography>
                    {!openUserInfo ? (
                      <ExpandMore fontSize="small" color="white" />
                    ) : (
                      <ExpandLess fontSize="small" color="white" />
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
                    xs: "dark.main",
                    md: "white.main",
                  },
                }}
              >
                <IconButton
                  size="medium"
                  sx={{
                    color: {
                      xs: "dark.main",
                      md: "white.main",
                    },
                  }}
                >
                  <Box sx={{ fontSize: { xs: 20, sm: 32.5, md: 37.5 } }}>
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
                      bgcolor: { xs: "dark.main", md: "white.main" },
                      color: { xs: "white.main", md: "dark.main" },
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
      </Grid>

      <Box
        // mt={"1rem"}
        width={1}
        p={"1rem 0"}
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },
          bgcolor: {
            xs: "white",
            md: "dark.main",
          },
          justifyContent: "center",
        }}
      >
        <Box
          position={"relative"}
          onMouseOver={() => setAllPropOpen(true)}
          onMouseLeave={() => setAllPropOpen(false)}
          bgcolor={allPropOpen && "rgba(240, 240, 240, 1)"}
          mr={"1rem"}
          sx={{
            borderRadius: allPropOpen ? "1.5rem 1.5rem 0 0" : "1.5rem",
            "&:hover button": { borderColor: "transparent" },
          }}
        >
          <Button
            color={allPropOpen ? "dark" : "white"}
            variant="outlined"
            startIcon={<Menu />}
            endIcon={allPropOpen ? <ExpandLess /> : <ExpandMore />}
            sx={{
              borderRadius: allPropOpen ? "1.5rem 1.5rem 0 0" : "1.5rem",
              p: "0.5rem 1.5rem",
              display: "flex",
              alignItems: "center",
              "&:hover": {
                borderColor: "transparent",
              },
            }}
          >
            <Typography textTransform={"capitalize"} mr={6}>
              All Categories
            </Typography>
          </Button>
          <Box
            position={"absolute"}
            width={1}
            maxHeight={"70vh"}
            top={"100%"}
            borderRadius={"0 0 1.5rem 1.5rem"}
            left={0}
            bgcolor={"rgba(240, 240, 240, 1)"}
          >
            {allPropOpen && <AllCategories />}
          </Box>
        </Box>
        <NavbarButton name={"NN"} />
        <NavbarButton name={" Best Sellers"} />
        <NavbarButton name={"Top Brands"} />
        <NavbarButton name={"Consumer Electronics"} />
        <NavbarButton name={"Home Improvement & Lighting"} />
        <Box
          position={"relative"}
          onMouseEnter={() => {
            setOpenMore(true);
          }}
          onMouseOver={() => {
            handleOnMouseOver();
          }}
          onMouseLeave={() => {
            setOpenMore(false);
          }}
        >
          <Button
            variant="contained"
            endIcon={openMore ? <ExpandLess /> : <ExpandMore />}
            sx={{
              borderRadius: "1.5rem",
              fontSize: "1rem",

              p: "0.5rem 1.5rem",
              bgcolor: "transparent",
              "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
            }}
          >
            <Typography textTransform={"capitalize"}>More</Typography>
          </Button>
          {openMore && (
            <Box
              id="more-product-container"
              position={"absolute"}
              width={"auto"}
              minWidth={200}
              top={"100%"}
              left={0}
              pt={"0.5rem"}
              zIndex={1000}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                bgcolor={"rgba(240, 240, 240, 1)"}
                width={"max-content"}
                borderRadius={"1.5rem"}
                overflow={"hidden"}
              >
                <SelectBotton name={"Home Improvement & Lighting"} />
                <SelectBotton name={"Men's Clothing"} />
                <SelectBotton name={"Furniture"} />
                <SelectBotton name={"Accessories"} />
                <SelectBotton name={"Hair Extainsions and Wigs"} />
                <SelectBotton name={"Automotive and Motorcycles"} />
              </Box>
              <Box
                id={"after-container"}
                sx={{
                  position: "absolute",
                  width: "12px",
                  height: "12px",
                  transform: "rotate(45deg)",
                  left: "25%",
                  top: 2,
                  background: "rgba(240, 240, 240, 1)",
                }}
              />
            </Box>
          )}
        </Box>
      </Box>

      {openLogin && (
        <LoginModal open={openLogin} handleClose={() => setOpenLogin(false)} />
      )}

      <SlidingMenu open={open} handleClose={handleClose} />
    </>
  );
}

export default Navbar;
