import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import useUserStore from "@/store/user";
import SmallDeviceLogin from "@/features/Login/smallDeviceLogin";
import BottomNavigationBar from "@/features/AccountPage/BottomNavigation";
import TopNavigationBar from "@/features/AccountPage/TopNavigation";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import AccountPageBreadcrumbs from "@/features/AccountPage/Breadcrumbs";
import { CiViewList } from "react-icons/ci";
import { IoIosArrowForward, IoIosHeartEmpty } from "react-icons/io";
import { PiClockCountdown, PiUserList } from "react-icons/pi";
import { RiCoupon2Line } from "react-icons/ri";
import { BiDollarCircle } from "react-icons/bi";

const buttons = [
  "Overview",
  "Orders",
  "Payments",
  "Refund and return",
  "Feedback",
  "Settings",
  "Shipping address",
  "Message center",
  "",
  "Wallet",
  "Invite Friends",
  "",
  "Help Center",
  "Suggestion",
  "Manage Reports",
];

function Account() {
  const { user } = useUserStore();
  const [openAccountModal, setOpenAccountModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState<number>(0);

  useEffect(() => {
    if (!user?.name) {
      setOpenAccountModal(true);
    }
  }, []);

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
        <Box
          width={"100%"}
          minHeight={"100vh"}
          bgcolor={"background.paper"}
          position={"relative"}
        >
          <TopNavigationBar />
          <Box
            display={"flex"}
            maxWidth={{ xs: 1, md: "80%" }}
            margin={"auto"}
            flexDirection={"column"}
            pb={"133px"}
          >
            <AccountPageBreadcrumbs />

            <Grid container spacing={{ sm: 3, md: 4 }}>
              <Grid item display={{ xs: "none", sm: "flex" }} sm={3}>
                <Stack
                  bgcolor={"background.lighter"}
                  p={"1rem 0"}
                  pr={0}
                  width={1}
                >
                  <Typography
                    variant="h6"
                    fontWeight={"bold"}
                    color={"text.primary"}
                    pl={"1rem"}
                    pb={"0.5rem"}
                    fontSize={{ sm: "0.9rem", md: "1.1rem" }}
                  >
                    Account
                  </Typography>

                  {buttons.map((button, index) => {
                    if (button) {
                      return (
                        <Button
                          key={index}
                          fullWidth
                          size="large"
                          onClick={() =>
                            setSelectedTab(buttons.indexOf(button))
                          }
                          sx={{
                            justifyContent: "flex-start",
                            borderLeft: "4px solid transparent",
                            borderRadius: "0",
                            color: "text.primary",
                            bgcolor:
                              buttons.indexOf(button) == selectedTab
                                ? "background.paper"
                                : "",
                            borderColor:
                              buttons.indexOf(button) == selectedTab
                                ? "demakkPrimary.main"
                                : "",
                            "&:hover": {
                              bgcolor: "background.paper",
                            },
                          }}
                        >
                          {button}
                        </Button>
                      );
                    } else {
                      return (
                        <Divider
                          key={index}
                          flexItem
                          sx={{ m: "0.5rem 1rem" }}
                        />
                      );
                    }
                  })}
                </Stack>
              </Grid>

              <Grid item xs={12} sm={9}>
                <Stack width={1} gap={{ xs: 3, md: 4 }}>
                  <Box
                    width={1}
                    p={2}
                    bgcolor={"background.lighter"}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={2}
                  >
                    <Avatar
                      src="/assets/images/profile.webp"
                      sx={{
                        width: { xs: 50, sm: 50, md: 60 },
                        height: { xs: 50, sm: 50, md: 60 },
                      }}
                    />
                    <Grid container>
                      <Grid item xs={4} sm={3}>
                        <Box
                          component={"div"}
                          display={"flex"}
                          flexDirection={"column"}
                          alignItems={"center"}
                          gap={1}
                          color={"text.primary"}
                          sx={{ cursor: "pointer" }}
                        >
                          <Box
                            width={{ xs: 25, sm: 35 }}
                            height={{ xs: 25, sm: 35 }}
                          >
                            <IoIosHeartEmpty
                              style={{ width: "inherit", height: "inherit" }}
                            />
                          </Box>
                          <Typography
                            fontSize={{ xs: "0.9rem", sm: "1.1rem" }}
                            letterSpacing={1}
                          >
                            Wish List
                          </Typography>
                        </Box>
                      </Grid>

                      <Grid item xs={4} sm={3}>
                        <Box
                          component={"div"}
                          display={"flex"}
                          flexDirection={"column"}
                          alignItems={"center"}
                          gap={1}
                          color={"text.primary"}
                          sx={{ cursor: "pointer" }}
                        >
                          <Box
                            width={{ xs: 25, sm: 35 }}
                            height={{ xs: 25, sm: 35 }}
                          >
                            <PiUserList
                              style={{ width: "inherit", height: "inherit" }}
                            />
                          </Box>
                          <Typography
                            fontSize={{ xs: "0.9rem", sm: "1.1rem" }}
                            letterSpacing={1}
                          >
                            Following
                          </Typography>
                        </Box>
                      </Grid>

                      <Grid item display={{ xs: "none", sm: "block" }} sm={3}>
                        <Box
                          component={"div"}
                          display={"flex"}
                          flexDirection={"column"}
                          alignItems={"center"}
                          gap={1}
                          color={"text.primary"}
                          sx={{ cursor: "pointer" }}
                        >
                          <Box
                            width={{ xs: 25, sm: 35 }}
                            height={{ xs: 25, sm: 35 }}
                          >
                            <PiClockCountdown
                              style={{ width: "inherit", height: "inherit" }}
                            />
                          </Box>
                          <Typography
                            fontSize={{ xs: "0.9rem", sm: "1.1rem" }}
                            letterSpacing={1}
                          >
                            Viewed
                          </Typography>
                        </Box>
                      </Grid>

                      <Grid item xs={4} sm={3}>
                        <Box
                          component={"div"}
                          display={"flex"}
                          flexDirection={"column"}
                          alignItems={"center"}
                          gap={1}
                          color={"text.primary"}
                          sx={{ cursor: "pointer" }}
                        >
                          <Box
                            width={{ xs: 25, sm: 35 }}
                            height={{ xs: 25, sm: 35 }}
                          >
                            <RiCoupon2Line
                              style={{ width: "inherit", height: "inherit" }}
                            />
                          </Box>
                          <Typography
                            fontSize={{ xs: "0.9rem", sm: "1.1rem" }}
                            letterSpacing={1}
                          >
                            Coupons
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>

                  <Stack
                    width={1}
                    p={2}
                    bgcolor={"background.lighter"}
                    // divider={<Divider flexItem />}
                    // gap={2}
                  >
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      // py={"1rem"}
                      color={"text.primary"}
                    >
                      <Typography
                        letterSpacing={1}
                        fontSize={{ xs: "1rem", sm: "1.4rem" }}
                        fontWeight={{ xs: 400, sm: 500 }}
                      >
                        My Orders
                      </Typography>
                      <Button
                        sx={{
                          color: "text.primary",
                          display: "flex",
                          alignItems: "center",
                        }}
                        endIcon={
                          <Box display={"flex"}>
                            <IoIosArrowForward />
                          </Box>
                        }
                      >
                        <Typography>View All</Typography>
                      </Button>
                    </Box>

                    <Divider flexItem sx={{ my: "1rem" }} />

                    <Grid container py={"1rem"}>
                      <Grid item xs={3}>
                        <Box
                          component={"div"}
                          display={"flex"}
                          flexDirection={"column"}
                          alignItems={"center"}
                          sx={{ cursor: "pointer" }}
                          gap={1}
                          color={"text.primary"}
                        >
                          <Box
                            width={{ xs: 35, sm: 45 }}
                            height={{ xs: 35, sm: 45 }}
                          >
                            <Avatar
                              variant={"rounded"}
                              src="/assets/images/wallet.webp"
                              sx={{ width: "inherit", height: "inherit" }}
                            />
                          </Box>
                          <Typography
                            fontSize={{ xs: "0.8rem", sm: "1rem" }}
                            letterSpacing={1}
                            sx={{ textWrap: "wrap" }}
                          >
                            Unpaid
                          </Typography>
                        </Box>
                      </Grid>

                      <Grid item xs={3}>
                        <Box
                          component={"div"}
                          display={"flex"}
                          flexDirection={"column"}
                          alignItems={"center"}
                          sx={{ cursor: "pointer" }}
                          gap={1}
                          color={"text.primary"}
                        >
                          <Box
                            width={{ xs: 35, sm: 45 }}
                            height={{ xs: 35, sm: 45 }}
                          >
                            <Avatar
                              variant={"rounded"}
                              src="/assets/images/tobeshipped.webp"
                              sx={{ width: "inherit", height: "inherit" }}
                            />
                          </Box>
                          <Typography
                            fontSize={{ xs: "0.8rem", sm: "1rem" }}
                            letterSpacing={1}
                            sx={{ textWrap: "wrap" }}
                            textAlign={"center"}
                          >
                            To be shipped
                          </Typography>
                        </Box>
                      </Grid>

                      <Grid item xs={3}>
                        <Box
                          component={"div"}
                          display={"flex"}
                          flexDirection={"column"}
                          alignItems={"center"}
                          gap={1}
                          sx={{ cursor: "pointer" }}
                          color={"text.primary"}
                        >
                          <Box
                            width={{ xs: 35, sm: 45 }}
                            height={{ xs: 35, sm: 45 }}
                          >
                            <Avatar
                              variant={"rounded"}
                              src="/assets/images/shippment.webp"
                              sx={{ width: "inherit", height: "inherit" }}
                            />
                          </Box>
                          <Typography
                            fontSize={{ xs: "0.8rem", sm: "1rem" }}
                            letterSpacing={1}
                            textAlign={"center"}
                            sx={{ textWrap: "wrap" }}
                          >
                            Shipped
                          </Typography>
                        </Box>
                      </Grid>

                      <Grid item xs={3}>
                        <Box
                          component={"div"}
                          display={"flex"}
                          flexDirection={"column"}
                          alignItems={"center"}
                          gap={1}
                          sx={{ cursor: "pointer" }}
                          color={"text.primary"}
                        >
                          <Box
                            width={{ xs: 35, sm: 45 }}
                            height={{ xs: 35, sm: 45 }}
                          >
                            <Avatar
                              variant={"rounded"}
                              src="/assets/images/underreview.webp"
                              sx={{ width: "inherit", height: "inherit" }}
                            />
                          </Box>
                          <Typography
                            fontSize={{ xs: "0.8rem", sm: "1rem" }}
                            letterSpacing={1}
                            textAlign={"center"}
                            sx={{ textWrap: "wrap" }}
                          >
                            To be reviewed
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>

                    <Divider
                      flexItem
                      sx={{ my: "1rem", display: { xs: "none", sm: "flex" } }}
                    />

                    <Button
                      sx={{
                        display: { xs: "none", sm: "flex" },
                        alignItems: "center",
                        color: "text.primary",
                      }}
                      fullWidth
                      startIcon={
                        <Box display={"flex"}>
                          <CiViewList />
                        </Box>
                      }
                      endIcon={
                        <Box display={"flex"} alignItems={"center"}>
                          <IoIosArrowForward />
                        </Box>
                      }
                    >
                      <Typography flex={1} textAlign={"left"} lineHeight={1}>
                        My Appeal
                      </Typography>
                    </Button>

                    <Divider flexItem sx={{ my: "1rem" }} />

                    <Button
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "text.primary",
                      }}
                      fullWidth
                      startIcon={
                        <Box display={"flex"}>
                          <BiDollarCircle />
                        </Box>
                      }
                      endIcon={
                        <Box display={"flex"} alignItems={"center"}>
                          <IoIosArrowForward />
                        </Box>
                      }
                    >
                      <Typography flex={1} textAlign={"left"} lineHeight={1}>
                        In dispute
                      </Typography>
                    </Button>
                  </Stack>

                  <Stack
                    display={{ xs: "none", sm: "flex" }}
                    width={1}
                    p={2}
                    bgcolor={"background.lighter"}
                  >
                    <Box color={"text.primary"}>
                      <Typography
                        letterSpacing={1}
                        fontSize={{ xs: "1rem", sm: "1.4rem" }}
                        fontWeight={{ xs: 400, sm: 500 }}
                      >
                        More to love
                      </Typography>
                    </Box>
                  </Stack>

                  <Stack
                    display={{ xs: "flex", sm: "none" }}
                    width={1}
                    py={2}
                    gap={1}
                    bgcolor={"background.lighter"}
                  >
                    <Button
                      size="large"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "text.primary",
                        px: "1rem",
                      }}
                      fullWidth
                      endIcon={
                        <Box display={"flex"} alignItems={"center"}>
                          <IoIosArrowForward />
                        </Box>
                      }
                    >
                      <Typography
                        flex={1}
                        textAlign={"left"}
                        lineHeight={1}
                        fontSize={"1.1rem"}
                      >
                        Setting
                      </Typography>
                    </Button>

                    <Button
                      size="large"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "text.primary",
                        px: "1rem",
                      }}
                      fullWidth
                      endIcon={
                        <Box display={"flex"} alignItems={"center"}>
                          <IoIosArrowForward />
                        </Box>
                      }
                    >
                      <Typography
                        flex={1}
                        textAlign={"left"}
                        lineHeight={1}
                        fontSize={"1.1rem"}
                      >
                        Help Center
                      </Typography>
                    </Button>

                    <Button
                      size="large"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "text.primary",
                        px: "1rem",
                      }}
                      fullWidth
                      endIcon={
                        <Box display={"flex"} alignItems={"center"}>
                          <IoIosArrowForward />
                        </Box>
                      }
                    >
                      <Typography
                        flex={1}
                        textAlign={"left"}
                        lineHeight={1}
                        fontSize={"1.1rem"}
                      >
                        Suggestion
                      </Typography>
                    </Button>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Box>
          <BottomNavigationBar />
        </Box>
        {!openAccountModal && (
          <SmallDeviceLogin
            open={openAccountModal}
            handleClose={() => setOpenAccountModal(false)}
          />
        )}
      </main>
    </>
  );
}

export default Account;
