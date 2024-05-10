import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { IoChevronBackOutline, IoHomeOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { Stack } from "@mui/material";

export default function TopNavigationBar() {
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
              Demakk
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontSize: { xs: "1rem" } }}
            >
              Account
            </Typography>
          </Stack>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="search"
          >
            <Box height={25} sx={{ aspectRatio: 1 }}>
              <IoIosSearch style={{ height: "inherit", width: "inherit" }} />
            </Box>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
