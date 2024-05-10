import useDiscountStore from "@/store/discount";
import LayoutTwo from "../layouts/layout-3c-3-3-3";
import LayoutOne from "../layouts/layout-3c-4-2-3";
import { Box } from "@mui/material";

function LargeDeviceDealsContainer() {
  const { deal } = useDiscountStore();

  return (
    <Box display={{ xs: "none", md: "block" }}>
      {/* <LayoutTwo
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
      /> */}

      <LayoutOne
        threeInOne={{
          title: deal[0].getDeal().dealType.name,
          subtitle: deal[0].getDeal().dealType.subTitle,
          productList: deal[0].getAllProductsForDeal(),
        }}
        top={{
          title: deal[0].getDeal().dealType.name,
          subtitle: deal[0].getDeal().dealType.subTitle,
          productList: deal[0].getAllProductsForDeal(),
        }}
        bottomLeft={{
          title: deal[1].getDeal().dealType.name,
          subtitle: deal[1].getDeal().dealType.subTitle,
          productList: deal[1].getAllProductsForDeal(),
        }}
        bottomRight={{
          title: deal[3].getDeal().dealType.name,
          subtitle: deal[3].getDeal().dealType.subTitle,
          productList: deal[3].getAllProductsForDeal(),
        }}
      />
    </Box>
  );
}

export default LargeDeviceDealsContainer;
