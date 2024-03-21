import {
  ConfirmationNumberOutlined,
  CreditCard,
  ExpandLess,
  ExpandMore,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  Language,
  Menu,
  PersonOutlineOutlined,
  Search,
  ShoppingCart,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import AllCategories from "./allCategories";
import { useState } from "react";
import SelectBotton from "./selectBotton";
import NavbarButton from "./navbarButton";
import SlidingMenu from "./slidingMenu";
import SmallDeviceButton from "./smallDeviceButton";
import { LuClipboardList } from "react-icons/lu";
import { RiCopperCoinLine } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import useUserStore from "@/store/user";

function index() {
  const { user, setUser, signOut } = useUserStore();

  const [allPropOpen, setAllPropOpen] = useState(false);
  const [openMore, setOpenMore] = useState(false);
  const [openUserInfo, setOpenUserInfo] = useState(false);
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
    <Box
      sx={{
        position: "fixed",
        p: {
          xs: "0.5rem 0.75rem 0.5rem 1rem",
          sm: "0.75rem 2rem 0.75rem 2.5rem",
          md: "0.5rem 2rem 0.5rem 4rem",
          xl: "0.5rem 4rem 0.5rem 9rem",
        },
        bgcolor: {
          xs: "white",
          md: "dark.main",
        },
        color: {
          xs: "black",
          md: "white",
        },
      }}
      top={0}
      left={0}
      width={1}
    >
      <Grid container alignItems={"center"} width={"100%"}>
        <Grid item sx={{ display: { md: "none" } }}>
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
                sm: "1.7rem",
                md: "2rem",
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
                    <Search color="white" />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item display={"flex"} ml={"auto"}>
          <Grid container alignItems={"center"} spacing={{ xs: 0, md: 2 }}>
            <Grid item>
              <Box
                display={"flex"}
                alignItems={"center"}
                sx={{ display: { xs: "none", md: "flex" } }}
                color={"white.main"}
              >
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
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  fontSize={"0.5rem"}
                >
                  <Typography fontSize={"0.8rem"}>EN/</Typography>
                  <Box display={"flex"} alignItems={"center"}>
                    <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
                      USD
                    </Typography>
                    <ExpandMore fontSize="small" color="dark" />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              position={"relative"}
              onMouseOver={() => setOpenUserInfo(true)}
              onMouseLeave={() => setOpenUserInfo(false)}
            >
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
                <Box
                  size="medium"
                  sx={{
                    color: {
                      xs: "dark.main",
                      md: "white.main",
                    },
                  }}
                >
                  <PersonOutlineOutlined
                    sx={{ fontSize: { xs: 25, sm: 37.5, md: 40 } }}
                  />
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  fontSize={"0.5rem"}
                >
                  <Typography
                    fontSize={"0.8rem"}
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
                      fontSize={"0.8rem"}
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
                <>
                  <Box
                    position={"absolute"}
                    top={"100%"}
                    right={0}
                    minWidth={300}
                    bgcolor={"Background"}
                    border={"1px solid lightgray"}
                    p={"1.5rem"}
                    borderRadius={"1rem"}
                    flexDirection={"column"}
                    gap={"0.25rem"}
                    overflow={"auto"}
                    sx={{
                      display: { xs: "none", md: "flex" },
                      zIndex: 1000,
                    }}
                  >
                    {" "}
                    {!user?.name ? (
                      <>
                        <Button
                          variant="contained"
                          size="large"
                          color="dark"
                          fullWidth
                          sx={{
                            borderRadius: "1.5rem",
                            color: "white.main",
                            textTransform: "capitalize",
                          }}
                          onClick={() =>
                            setUser({
                              name: "Emily",
                              img: "/assets/images/emily.png",
                            })
                          }
                        >
                          Sign Up
                        </Button>
                        <Button
                          variant="text"
                          size="large"
                          fullWidth
                          sx={{
                            bgcolor: "transparent",
                            borderRadius: "1.5rem",
                            color: "dark.main",
                            textTransform: "capitalize",
                          }}
                          onClick={() => setUser({ name: "Solen" })}
                        >
                          Register
                        </Button>
                      </>
                    ) : (
                      <>
                        <Grid
                          width={1}
                          container
                          display={"flex"}
                          alignItems={"center"}
                          gap={1}
                        >
                          <Grid item display={"flex"}>
                            <Avatar
                              src={user?.img || "/assets/images/profile.webp"}
                            />
                          </Grid>
                          <Grid item md={9} display={"flex"}>
                            <Typography
                              flex={1}
                              fontWeight={400}
                              fontSize={"0.9rem"}
                            >
                              Welcome back,{" "}
                              <Box component={"span"} fontWeight={"bold"}>
                                {user.name}
                              </Box>
                            </Typography>
                          </Grid>
                        </Grid>
                        <Box
                          width={1}
                          container
                          display={"flex"}
                          alignItems={"center"}
                          gap={1}
                        >
                          {/* <Avatar sx={{ width: 40, height: 40 }} /> */}
                          <Button
                            onClick={() => signOut()}
                            variant="text"
                            color="info"
                            sx={{ ml: "48px", textTransform: "unset" }}
                          >
                            Sign Out
                          </Button>
                        </Box>
                      </>
                    )}
                    <Divider flexItem />
                    <SmallDeviceButton
                      startImage={<LuClipboardList fontSize={"inherit"} />}
                      title={"My Orders"}
                    />
                    <SmallDeviceButton
                      startImage={<RiCopperCoinLine fontSize={"inherit"} />}
                      title={"My Coins"}
                    />
                    <SmallDeviceButton
                      startImage={<AiOutlineMessage fontSize={"inherit"} />}
                      title={"Message Center"}
                    />
                    <SmallDeviceButton
                      startImage={<CreditCard fontSize={"inherit"} />}
                      title={"Payments"}
                    />
                    <SmallDeviceButton
                      startImage={
                        <FavoriteBorderOutlined fontSize={"inherit"} />
                      }
                      title={"Wish List"}
                    />
                    <SmallDeviceButton
                      startImage={
                        <ConfirmationNumberOutlined fontSize={"inherit"} />
                      }
                      title={"My Coupons"}
                    />
                    <Divider flexItem />
                    <SmallDeviceButton title={"DC Center"} />
                    <SmallDeviceButton title={"Buyer Protection"} />
                    <SmallDeviceButton title={"Help Center"} />
                    <SmallDeviceButton title={"Disputes & Reports"} />
                    <SmallDeviceButton title={"Accessility"} />
                  </Box>
                  <Box
                    // id={"after-container"}
                    sx={{
                      position: "absolute",
                      width: "12px",
                      height: "12px",
                      transform: "rotate(45deg)",
                      left: "50%",
                      bottom: -6,
                      background: "rgba(240, 240, 240, 1)",
                    }}
                  />
                </>
              )}
            </Grid>
            <Grid item>
              <Box
                display={"flex"}
                gap={"0.25rem"}
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
                  <ShoppingCart
                    sx={{ fontSize: { xs: 25, sm: 37.5, md: 40 } }}
                  />
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
        mt={"1rem"}
        width={1}
        sx={{
          display: {
            xs: "none",
            md: "flex",
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
            // sx={{ overflowY: "hidden" }}
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
            >
              <Box
                // left={"50px"}
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

      <SlidingMenu open={open} handleClose={handleClose} />
    </Box>
  );
}

export default index;
