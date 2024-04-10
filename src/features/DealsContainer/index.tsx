import { Box } from "@mui/material";

import SmallDeviceDealsContainer from "./containers/SmallDeviceDealsContainer";
import LargeDeviceDealsContainer from "./containers/LargeDeviceDealsContainer";

function DealsContainer() {
  return (
    <Box
      display={"flex"}
      p={{ xs: "1rem", md: "3rem 6rem", xl: "3rem 12rem" }}
      width={1}
      bgcolor={"background.paper"}
    >
      <SmallDeviceDealsContainer />
      <LargeDeviceDealsContainer />
    </Box>
  );
}

export default DealsContainer;
