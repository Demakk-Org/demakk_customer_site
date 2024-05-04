import { Box, Grid } from "@mui/material";

import SocialContainer from "../components/SocialContainer";
import DealsInCarousel from "../components/DealsInCarousel";
import DealInFullHeight from "../components/DealInFullHeight";
import useDiscountStore from "@/store/discount";
import useUserStore from "@/store/user";
import DealsProductCardContainer from "../components/DealsProductCardContainer";

function LargeDeviceDealsContainer() {
  const { deal } = useDiscountStore();
  const { user } = useUserStore();

  return (
    <Grid width={1} container spacing={2} display={{ xs: "none", md: "flex" }}>
      <Grid item xs={3}>
        <Box display={"flex"} flexDirection={"column"} gap={2} height={1}>
          {!user && <SocialContainer />}
          <DealsInCarousel
            title={deal[0].getDeal().dealType.name}
            subtitle={deal[0].getDeal().dealType.subTitle}
            productList={deal[0].getAllProductsForDeal()}
          />
        </Box>
      </Grid>
      <Grid item xs={4}>
        <DealInFullHeight
          title={deal[0]?.getDeal().dealType.name}
          subtitle={deal[0]?.getDeal().dealType.subTitle}
          productList={deal[3]?.getAllProductsForDeal()}
        />
      </Grid>
      <Grid item xs={5}>
        <Grid container height={1} width={1}>
          <DealsProductCardContainer
            position="top"
            first
            title={deal[1]?.getDeal().dealType.name}
            subtitle={deal[1]?.getDeal().dealType.subTitle}
            productList={deal[1]?.getAllProductsForDeal()}
            number={3}
          />
          <DealsProductCardContainer
            position={"bottom"}
            title={deal[3]?.getDeal().dealType.name}
            subtitle={deal[3]?.getDeal().dealType.subTitle}
            productList={deal[3]?.getAllProductsForDeal()}
            number={3}
            showPercent
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LargeDeviceDealsContainer;
