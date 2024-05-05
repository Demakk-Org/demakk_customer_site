import { Grid } from "@mui/material";
import useUserStore from "@/store/user";
import DealsProductCardContainer from "../components/DealsProductCardContainer";
import { GetProduct } from "@/model/productModel";
import ThreeInOneDealContainer from "../components/ThreeInOneDealContainer";

interface ILayoutOne {
  threeInOne: {
    title: string;
    subtitle: string;
    productList: GetProduct[];
  };
  top: {
    title: string;
    subtitle: string;
    productList: GetProduct[];
  };
  bottomLeft: {
    title: string;
    subtitle: string;
    productList: GetProduct[];
  };
  bottomRight: {
    title: string;
    subtitle: string;
    productList: GetProduct[];
  };
}

function LayoutOne({ threeInOne, top, bottomLeft, bottomRight }: ILayoutOne) {
  const { user } = useUserStore();
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <ThreeInOneDealContainer
          title={threeInOne.title}
          subtitle={threeInOne.subtitle}
          productList={threeInOne.productList}
        />
      </Grid>
      <Grid item xs={8} direction={"column"} container spacing={2}>
        <Grid item>
          <DealsProductCardContainer
            position={"none"}
            first
            title={top.title}
            subtitle={top.subtitle}
            productList={top.productList}
            number={4}
          />
        </Grid>

        <Grid item direction={"row"} container spacing={2}>
          <Grid item xs={4.8}>
            <DealsProductCardContainer
              position="none"
              title={bottomLeft.title}
              subtitle={bottomLeft.subtitle}
              productList={bottomLeft.productList}
              number={2}
            />
          </Grid>
          <Grid item xs={7.2}>
            <DealsProductCardContainer
              position="none"
              title={bottomRight.title}
              subtitle={bottomRight.subtitle}
              productList={bottomRight.productList}
              number={3}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LayoutOne;
