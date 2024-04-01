import { Box } from "@mui/material";
import LargeDeviceAdvertContainer from "./components/largeDeviceAdvertContainer";
import SmallDeviceAdvertContainer from "./components/smallDeviceAdvertContainer";
import { useEffect } from "react";
import { countDown } from "@/utils/countDown";

function DiscountSale() {
  useEffect(() => {
    if (document) {
      countDown("Apr 3, 2024 12:00:00");
    }
  });

  return (
    <Box
      display={"flex"}
      p={{ md: "3rem 6rem", xl: "3rem 12rem" }}
      sx={{ backgroundImage: "url(/assets/images/background.webp)" }}
      width={1}
    >
      <LargeDeviceAdvertContainer />
      <SmallDeviceAdvertContainer />
    </Box>
  );
}

export default DiscountSale;
