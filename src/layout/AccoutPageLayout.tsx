import AccountPageBreadcrumbs from "@/features/AccountPage/Breadcrumbs";
import TopNavigationBar from "@/features/AccountPage/TopNavigation";
import SmallDeviceLogin from "@/features/Login/smallDeviceLogin";
import { auth } from "@/firebase/firebase";
import useUserStore from "@/store/user";
import getLanguage from "@/utils/getLanguage";
import {
  Alert,
  Box,
  Button,
  Divider,
  Grid,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";

export const accountTabList = [
  { name: "overview", link: "/account" },
  { name: "orders", link: "/order" },
  { name: "payments", link: "/payment" },
  { name: "settings", link: "/account/settings" },
  { name: "shippingAddress", link: "/address" },
  { name: "messageCenter", link: "/message-center" },
  { name: "", link: "#" },
  { name: "wallet", link: "/user/account/credit_card_management" },
  { name: "inviteFriends", link: "#" },
  { name: "", link: "#" },
  { name: "helpCenter", link: "#" },
  { name: "suggestion", link: "#" },
];

interface IAccountPageLayout {
  children: ReactElement;
  pageType: "account" | "order" | "setting" | "payment" | "wallet" | "address";
  selectedTab: number;
}

function AccountPageLayout({
  children,
  pageType,
  selectedTab,
}: IAccountPageLayout) {
  const { lang } = useUserStore();

  const router = useRouter();
  const [openAccountModal, setOpenAccountModal] = useState(false);
  const [snackBar, setSnackBar] = useState<{
    type: "success" | "error";
    open: boolean;
    message: string;
  }>({ type: "success", message: "Hello World!", open: false });
  console.log(auth?.currentUser);

  useEffect(() => {
    if (auth?.currentUser) {
      return;
    }
    setOpenAccountModal(true);
  }, []);

  return (
    <Box
      width={"100%"}
      minHeight={"100vh"}
      bgcolor={"background.paper"}
      position={"relative"}
    >
      <TopNavigationBar
        setSnackBar={setSnackBar}
        setOpenAccountModal={setOpenAccountModal}
        pageType={getLanguage(pageType, lang)}
      />

      <Box
        display={"flex"}
        maxWidth={{ xs: 1, md: "90%" }}
        margin={"auto"}
        flexDirection={"column"}
        pb={"5rem"}
      >
        <AccountPageBreadcrumbs />

        <Grid container spacing={{ sm: 3, md: 4 }}>
          <Grid item display={{ xs: "none", sm: "flex" }} sm={3}>
            <Stack bgcolor={"background.lighter"} p={"1rem 0"} pr={0} width={1}>
              <Typography
                variant="h6"
                fontWeight={"bold"}
                color={"text.primary"}
                pl={"1rem"}
                pb={"0.5rem"}
                fontSize={{ sm: "0.9rem", md: "1.1rem" }}
              >
                {getLanguage("account", lang)}
              </Typography>

              {accountTabList.map((button, index) => {
                if (button.name) {
                  return (
                    <Button
                      key={index}
                      fullWidth
                      size="large"
                      onClick={() => router.push(button.link)}
                      sx={{
                        justifyContent: "flex-start",
                        borderLeft: "4px solid transparent",
                        borderRadius: "0",
                        color: "text.primary",
                        bgcolor:
                          accountTabList.indexOf(button) == selectedTab
                            ? "background.paper"
                            : "",
                        borderColor:
                          accountTabList.indexOf(button) == selectedTab
                            ? "demakkPrimary.main"
                            : "",
                        "&:hover": {
                          bgcolor: "background.paper",
                        },
                      }}
                    >
                      {getLanguage(button.name, lang)}
                    </Button>
                  );
                } else {
                  return (
                    <Divider key={index} flexItem sx={{ m: "0.5rem 1rem" }} />
                  );
                }
              })}
            </Stack>
          </Grid>

          <Grid item xs={12} sm={9}>
            {children}
          </Grid>
        </Grid>
      </Box>

      <SmallDeviceLogin
        open={openAccountModal}
        handleClose={() => setOpenAccountModal(false)}
        setSnackBar={setSnackBar}
      />

      {/* {snackBar?.open && ( */}
      <Snackbar
        autoHideDuration={2500}
        open={snackBar?.open}
        onClose={() =>
          setSnackBar((p) => ({
            ...p,
            open: false,
          }))
        }
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      >
        <Alert
          onClose={() => setSnackBar((p) => ({ ...p, open: false }))}
          severity={snackBar?.type}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackBar?.message}
        </Alert>
      </Snackbar>
      {/* )} */}
    </Box>
  );
}

export default AccountPageLayout;
