import React, { useState } from "react";
import SideNav from "../../components/SideNav";
import { Box } from "@mui/material";

export default function SideNavigation() {
  const [sideNavHeight, setSideNavHeight] = useState("calc(100vh - 150px)");
  return (
    <Box width={1} position={"relative"}>
      {" "}
      <SideNav />;
    </Box>
  );
}
