import {
  AppBar,
  Box,
  Typography,
  IconButton,
  Toolbar,
  Stack,
} from "@mui/material";
import { IoChevronBackOutline, IoHomeOutline } from "react-icons/io5";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { Login, Logout } from "@mui/icons-material";
import { Dispatch, SetStateAction } from "react";
import useOrderStore from "@/store/order";
import getLanguage from "@/utils/getLanguage";
import useUserStore from "@/store/user";

interface ITopNavigationBar {
  setSnackBar: Dispatch<
    SetStateAction<{
      type: "success" | "error";
      open: boolean;
      message: string;
    }>
  >;
  pageType: string;
  setOpenAccountModal: Dispatch<SetStateAction<boolean>>;
}

export default function TopNavigationBar({
  setSnackBar,
  setOpenAccountModal,
  pageType,
}: ITopNavigationBar) {
  const { emptyOrderList } = useOrderStore();
  const { lang, setRefresh } = useUserStore();

  const handleLogOut = () => {
    emptyOrderList();
    signOut(auth);
    setSnackBar({
      type: "success",
      open: true,
      message: getLanguage("loggedOutSuccessfully", lang),
    });
    setRefresh();
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
              {getLanguage("demakk", lang)}
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontSize: { xs: "1rem" } }}
            >
              {pageType}
            </Typography>
          </Stack>
          {auth?.currentUser?.uid ? (
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
