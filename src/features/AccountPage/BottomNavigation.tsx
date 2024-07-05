import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosList } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { useState } from "react";
import { Typography } from "@mui/material";

export default function BottomNavigationBar({
  page,
  children,
}: {
  page: number;
  children: JSX.Element;
}) {
  const [value, setValue] = useState<number>(page);

  return (
    <Box
      display={{ xs: "block", md: "none" }}
      sx={{ width: 1 }}
      position={"fixed"}
      bottom={0}
      borderTop={"1px solid"}
      borderColor={"background.lighter"}
      zIndex={1000}
    >
      {children}
      <BottomNavigation
        sx={{
          zIndex: 10,
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          sx={{
            flex: 1,
            maxWidth: "unset",
            zIndex: 10,
            bgcolor: { xs: "background.paper", md: "background.light" },
          }}
          label="Home"
          icon={
            <Box height={25} sx={{ aspectRatio: 1 }}>
              <IoHomeOutline style={{ height: "inherit", width: "inherit" }} />
            </Box>
          }
        />
        <BottomNavigationAction
          sx={{
            flex: 1,
            maxWidth: "unset",
            zIndex: 10,
            bgcolor: { xs: "background.paper", md: "background.light" },
          }}
          label="Category"
          icon={
            <Box height={25} sx={{ aspectRatio: 1 }}>
              <IoIosList style={{ height: "inherit", width: "inherit" }} />
            </Box>
          }
        />
        <BottomNavigationAction
          sx={{
            flex: 1,
            maxWidth: "unset",
            zIndex: 10,
            bgcolor: { xs: "background.paper", md: "background.light" },
          }}
          label="Cart"
          icon={
            <Box height={25} sx={{ aspectRatio: 1 }}>
              <BsCart3 style={{ height: "inherit", width: "inherit" }} />
            </Box>
          }
        />
        <BottomNavigationAction
          sx={{
            flex: 1,
            maxWidth: "unset",
            zIndex: 10,
            bgcolor: { xs: "background.paper", md: "background.light" },
          }}
          label="Account"
          icon={
            <Box height={25} sx={{ aspectRatio: 1 }}>
              <CiUser style={{ height: "inherit", width: "inherit" }} />
            </Box>
          }
        />
      </BottomNavigation>
    </Box>
  );
}
