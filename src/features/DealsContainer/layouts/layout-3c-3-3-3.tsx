import { Grid } from "@mui/material";
import SocialContainer from "../components/SocialContainer";
import useUserStore from "@/store/user";
import DealsProductCardContainer from "../components/DealsProductCardContainer";
import { GetProduct } from "@/model/productModel";
import ThreeInOneDealContainer from "../components/ThreeInOneDealContainer";
import DealsInCarousel from "../components/DealsInCarousel";

interface ILayoutOne {
  threeInOne: {
    title: string;
    subtitle: string;
    productList: GetProduct[];
  };
  center: {
    title: string;
    subtitle: string;
    productList: GetProduct[];
  };
  leftTop: {
    title: string;
    subtitle: string;
    productList: GetProduct[];
  };
  leftBottom: {
    title: string;
    subtitle: string;
    productList: GetProduct[];
  };
}

function LayoutTwo({ threeInOne, center, leftTop, leftBottom }: ILayoutOne) {
  const { user } = useUserStore();
  return (
    <Grid container spacing={2}>
      <Grid item xs={3} container spacing={2}>
        {!user && (
          <Grid item width={1}>
            <SocialContainer />
          </Grid>
        )}
        <Grid item width={1} flex={1}>
          <DealsInCarousel
            title={threeInOne.title}
            subtitle={threeInOne.subtitle}
            productList={threeInOne.productList}
          />
        </Grid>
      </Grid>
      <Grid item xs={4} direction={"column"}>
        <ThreeInOneDealContainer
          title={center.title}
          subtitle={center.subtitle}
          productList={center.productList}
        />
      </Grid>
      <Grid item xs={5} direction={"column"} rowGap={2} container>
        <Grid item>
          <DealsProductCardContainer
            position={"none"}
            first
            title={leftTop.title}
            subtitle={leftTop.subtitle}
            productList={leftTop.productList}
            number={3}
            showPercent
          />
        </Grid>
        <Grid item>
          <DealsProductCardContainer
            position={"none"}
            title={leftBottom.title}
            subtitle={leftBottom.subtitle}
            productList={leftBottom.productList}
            number={3}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LayoutTwo;
