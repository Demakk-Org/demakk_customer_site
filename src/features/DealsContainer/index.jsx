import { Box, Grid } from "@mui/material";
import SocialContainer from "./components/SocialContainer";
import DealsInCarousel from "./components/DealsInCarousel";
import DealInFullHeight from "./components/DealInFullHeight";
import ThreeInOneDeal from "./components/ThreeInOneDeal";

function DealsContainer() {
  return (
    <Box display={"flex"} p={{ md: "3rem 6rem", xl: "3rem 12rem" }} width={1}>
      <Grid width={1} container spacing={2}>
        <Grid item xs={3}>
          <Box display={"flex"} flexDirection={"column"} gap={2} height={1}>
            <SocialContainer />
            <DealsInCarousel />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <DealInFullHeight />
        </Grid>
        <Grid item xs={5}>
          <Grid container height={1} width={1}>
            <ThreeInOneDeal
              top={true}
              title={"Top Brands"}
              subtitle={"Top price & quality picks"}
              first={true}
            />
            <ThreeInOneDeal
              title={"Weekly deals"}
              subtitle={"Low prices in the past 30 days"}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DealsContainer;
