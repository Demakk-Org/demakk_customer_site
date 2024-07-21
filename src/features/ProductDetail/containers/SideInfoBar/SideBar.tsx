import React, { useState } from "react";
import SideNav from "../../components/SideBar";
import { Box } from "@mui/material";

export default function SideBar() {
  // const [sideNavHeight, setSideNavHeight] = useState("calc(100vh - 150px)");
  return (
    <Box width={1} position={"relative"}>
      <SideNav />;
    </Box>
  );
}
