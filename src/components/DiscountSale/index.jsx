import { Box } from "@mui/material";
import LargeDeviceAdvertContainer from "./components/largeDeviceAdvertContainer";
import SmallDeviceAdvertContainer from "./components/smallDeviceAdvertContainer";

function DiscountSale() {
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
