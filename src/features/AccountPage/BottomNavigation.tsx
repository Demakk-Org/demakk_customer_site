import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosList } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { useState } from "react";

export default function BottomNavigationBar() {
  const [value, setValue] = useState<number>(3);

  return (
    <Box
      sx={{ width: 1 }}
      position={"fixed"}
      bottom={0}
      borderTop={"1px solid"}
      borderColor={"background.lighter"}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          sx={{ flex: 1, maxWidth: "unset" }}
          label="Home"
          icon={
            <Box height={25} sx={{ aspectRatio: 1 }}>
              <IoHomeOutline style={{ height: "inherit", width: "inherit" }} />
            </Box>
          }
        />
        <BottomNavigationAction
          sx={{ flex: 1, maxWidth: "unset" }}
          label="Category"
          icon={
            <Box height={25} sx={{ aspectRatio: 1 }}>
              <IoIosList style={{ height: "inherit", width: "inherit" }} />
            </Box>
          }
        />
        <BottomNavigationAction
          sx={{ flex: 1, maxWidth: "unset" }}
          label="Cart"
          icon={
            <Box height={25} sx={{ aspectRatio: 1 }}>
              <BsCart3 style={{ height: "inherit", width: "inherit" }} />
            </Box>
          }
        />
        <BottomNavigationAction
          sx={{ flex: 1, maxWidth: "unset" }}
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
