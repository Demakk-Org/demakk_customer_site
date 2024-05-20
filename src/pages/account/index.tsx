import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import useUserStore from "@/store/user";
import SmallDeviceLogin from "@/features/Login/smallDeviceLogin";
import BottomNavigationBar from "@/features/AccountPage/BottomNavigation";
import OverviewTabContent from "@/features/AccountPage/components/OverviewTabContent";
import OrdersTabContent from "@/features/AccountPage/components/OrdersTabContent";
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
import PaymentTabContent from "@/features/AccountPage/components/PaymentTabContent";
import SettingTabContent from "@/features/AccountPage/components/SettingTabContent";
import ShippingAddressTabContent from "@/features/AccountPage/components/ShippingAddressTabContent";
import { useRouter } from "next/router";

const buttons = [
  "Overview",
  "Orders",
  "Payments",
  // "Refund and return",
  // "Feedback",
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
  const router = useRouter();

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
            maxWidth={{ xs: 1, md: "90%" }}
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
                {selectedTab == 0 && <OverviewTabContent />}
                {selectedTab == 1 && <OrdersTabContent />}
                {selectedTab == 2 && <PaymentTabContent />}
                {selectedTab == 3 && <SettingTabContent />}
                {selectedTab == 4 && <ShippingAddressTabContent />}
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
