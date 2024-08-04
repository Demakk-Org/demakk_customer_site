import {
  AppBar,
  Box,
  Typography,
  IconButton,
  Toolbar,
  Stack,
} from "@mui/material";
import { IoChevronBackOutline, IoHomeOutline } from "react-icons/io5";
import { Login, Logout } from "@mui/icons-material";
import { Dispatch, SetStateAction } from "react";
import useOrderStore from "@/store/order";
import useUserStore from "@/store/user";
import useTokenStore from "@/store/token";
import usePageStore from "@/store/page";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

interface ITopNavigationBar {
  pageType?: string;
  setOpenAccountModal: Dispatch<SetStateAction<boolean>>;
}

export default function TopNavigationBar({
  setOpenAccountModal,
  pageType,
}: ITopNavigationBar) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { emptyOrderList } = useOrderStore();
  const { setUser, signOut } = useUserStore();
  const { token, setToken } = useTokenStore();
  const { setSnackBar } = usePageStore();

  const handleLogOut = () => {
    emptyOrderList();
    setSnackBar({
      type: "success",
      open: true,
      message: t("loggedOutSuccessfully", { ns: "response" }),
    });
    setToken(null);
    token ? setUser(token) : signOut();
  };

  const handleLogIn = () => {
    setOpenAccountModal(true);
  };

  return (
    <Box
      sx={{ flexGrow: 1 }}
      width={1}
      position={"sticky"}
      top={0}
      zIndex={1100}
    >
      <AppBar position={"sticky"} color="darken">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: { xs: 0, sm: 1 } }}
            onClick={() => router.back()}
          >
            <Box
              height={25}
              display={{ xs: "none", sm: "inline" }}
              sx={{ aspectRatio: 1 }}
            >
              <IoHomeOutline style={{ height: "inherit", width: "inherit" }} />
            </Box>
            <Box
              height={25}
              display={{ xs: "inline", sm: "none" }}
              sx={{ aspectRatio: 1 }}
            >
              <IoChevronBackOutline
                style={{ height: "inherit", width: "inherit" }}
              />
            </Box>
          </IconButton>
          <Stack flex={1}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontSize: { xs: "1rem" } }}
            >
              {t("demakk")}
            </Typography>
            {pageType && (
              <Typography
                variant="h6"
                component="div"
                sx={{ fontSize: { xs: "1rem" } }}
              >
                {pageType}
              </Typography>
            )}
          </Stack>
          {token ? (
            <IconButton
              title={"Log out"}
              size="large"
              edge="start"
              color="inherit"
              aria-label="log out"
              onClick={handleLogOut}
            >
              <Box height={25} sx={{ aspectRatio: 1 }}>
                <Logout style={{ height: "inherit", width: "inherit" }} />
              </Box>
            </IconButton>
          ) : (
            <IconButton
              title={"Log in"}
              size="large"
              edge="start"
              color="inherit"
              aria-label="log in"
              onClick={handleLogIn}
            >
              <Box height={25} sx={{ aspectRatio: 1 }}>
                <Login style={{ height: "inherit", width: "inherit" }} />
              </Box>
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
