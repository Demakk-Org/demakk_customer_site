import { Box } from "@mui/material";

import SmallDeviceDealsContainer from "./containers/SmallDeviceDealsContainer";
import LargeDeviceDealsContainer from "./containers/LargeDeviceDealsContainer";
import useDiscountStore from "@/store/discount";
import { useEffect } from "react";
import LayoutTwo from "./layouts/layout-3c-3-3-3";
import LayoutOne from "./layouts/layout-3c-4-2-3";

function DealsContainer() {
  const { deal, discount, setDeal, setDiscount } = useDiscountStore();
  console.log("Deals from deals container", deal, discount);

  useEffect(() => {
    setDeal();
    setDiscount();
  }, []);

  if (!deal.length || !discount.length) return <></>;
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      p={{ xs: "1rem", md: "3rem 6rem", xl: "3rem 12rem" }}
      width={1}
      bgcolor={"background.paper"}
      gap={4}
    >
      <SmallDeviceDealsContainer />
      <LargeDeviceDealsContainer />
    </Box>
  );
}

export default DealsContainer;
