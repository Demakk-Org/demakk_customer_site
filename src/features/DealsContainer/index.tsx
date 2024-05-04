import { Box } from "@mui/material";

import SmallDeviceDealsContainer from "./containers/SmallDeviceDealsContainer";
import LargeDeviceDealsContainer from "./containers/LargeDeviceDealsContainer";
import useDiscountStore from "@/store/discount";
import { useEffect } from "react";
import LayoutTwo from "./layouts/layout-3c-3-3-3";

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
      <LayoutTwo
        threeInOne={{
          title: deal[0].getDeal().dealType.name,
          subtitle: deal[0].getDeal().dealType.subTitle,
          productList: deal[0].getAllProductsForDeal(),
        }}
        center={{
          title: deal[0].getDeal().dealType.name,
          subtitle: deal[0].getDeal().dealType.subTitle,
          productList: deal[0].getAllProductsForDeal(),
        }}
        leftTop={{
          title: deal[1].getDeal().dealType.name,
          subtitle: deal[1].getDeal().dealType.subTitle,
          productList: deal[1].getAllProductsForDeal(),
        }}
        leftBottom={{
          title: deal[3].getDeal().dealType.name,
          subtitle: deal[3].getDeal().dealType.subTitle,
          productList: deal[3].getAllProductsForDeal(),
        }}
      />
    </Box>
  );
}

export default DealsContainer;
