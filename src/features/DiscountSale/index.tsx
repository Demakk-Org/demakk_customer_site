import { Box } from "@mui/material";
import LargeDeviceAdvertContainer from "./components/largeDeviceAdvertContainer";
import SmallDeviceAdvertContainer from "./components/smallDeviceAdvertContainer";
import { useEffect } from "react";
import { countDown } from "@/utils/countDown";
import useUserStore from "@/store/user";

function DiscountSale() {
  const { lang } = useUserStore();
  useEffect(() => {
    // console.log("language changed", lang);
    if (document) {
      countDown("Apr 10, 2024 15:55:00", lang);
    }
  }, [lang]);

  return (
    <Box
      display={"flex"}
      p={{ md: "3rem 6rem", xl: "3rem 12rem" }}
      sx={{ backgroundImage: "url(/assets/images/background.webp)" }}
      width={1}
    >
      <SmallDeviceAdvertContainer />
      <LargeDeviceAdvertContainer />
    </Box>
  );
}

export default DiscountSale;
