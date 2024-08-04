import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import AccountPageBreadcrumbs from "@/features/AccountPage/Breadcrumbs";
import TopNavigationBar from "@/features/AccountPage/TopNavigation";
import SmallDeviceLogin from "@/features/Login/smallDeviceLogin";
import useTokenStore from "@/store/token";
import { ReactElement, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import NavBarContainer from "@/features/Navbar/containers/NavBarContainer";
import AccountTabButton from "@/component/AccountTabButton";

interface IAccountPageLayout {
  children: ReactElement;
  pageType:
    | "Account"
    | "Order"
    | "Settings"
    | "Payments"
    | "Wallet"
    | "Address"
    | "";
  selectedTab:
    | "overview"
    | "orders"
    | "payments"
    | "settings"
    | "shippingAddress"
    | "messageCenter"
    | "wallet"
    | "inviteFriends"
    | "helpCenter"
    | "suggestion"
    | "none";
}

function AccountPageLayout({
  children,
  pageType,
  selectedTab,
}: IAccountPageLayout) {
  const { t } = useTranslation(["account", "common"]);
  const { token } = useTokenStore();

  const [openAccountModal, setOpenAccountModal] = useState(false);

  useEffect(() => {
    !token && setOpenAccountModal(true);
  }, [token]);

  return (
    <Box
      width={1}
      height={1}
      bgcolor={"background.paper"}
      position={"relative"}
      overflow={"auto"}
    >
      <NavBarContainer>
        <TopNavigationBar
          setOpenAccountModal={setOpenAccountModal}
          pageType={pageType}
        />
      </NavBarContainer>

      <Box
        display={"flex"}
        maxWidth={{ xs: 1, md: "90%" }}
        margin={"auto"}
        flexDirection={"column"}
        pb={"2rem"}
      >
        <AccountPageBreadcrumbs />

        <Grid container spacing={{ sm: 3, md: 4 }} alignItems={"flex-start"}>
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
                {t("account")}
              </Typography>

              <AccountTabButton
                name={t("overview")}
                selected={selectedTab == "overview"}
                url="/account"
              />
              <AccountTabButton
                name={t("orders")}
                selected={selectedTab == "orders"}
                url="/order"
              />
              <AccountTabButton
                name={t("payments")}
                selected={selectedTab == "payments"}
                url="/payment"
              />
              <AccountTabButton
                name={t("settings")}
                selected={selectedTab == "settings"}
                url="/account/settings"
              />
              <AccountTabButton
                name={t("shippingAddress")}
                selected={selectedTab == "shippingAddress"}
                url="/address"
              />
              <AccountTabButton
                name={t("messageCenter")}
                selected={selectedTab == "messageCenter"}
                url="/message-center"
                disabled
              />
              <Divider flexItem sx={{ m: "0.5rem 1rem" }} />
              <AccountTabButton
                name={t("wallet")}
                selected={selectedTab == "wallet"}
                url="/user/account/credit_card_management"
                disabled
              />
              <AccountTabButton
                name={t("inviteFriends")}
                selected={selectedTab == "inviteFriends"}
                url="/user/account/credit_card_management"
                disabled
              />
              <Divider flexItem sx={{ m: "0.5rem 1rem" }} />
              <AccountTabButton
                name={t("helpCenter")}
                selected={selectedTab == "helpCenter"}
                url="/user/account/credit_card_management"
                disabled
              />
              <AccountTabButton
                name={t("suggestion")}
                selected={selectedTab == "suggestion"}
                url="/user/account/credit_card_management"
                disabled
              />
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
      />
    </Box>
  );
}

export default AccountPageLayout;
