import { Grid, Stack } from "@mui/material";
import React from "react";
import SocialContainer from "../components/SocialContainer";
import useUserStore from "@/store/user";
import DealsProductCardContainer from "../components/DealsProductCardContainer";
import { GetProduct } from "@/model/productModel";
import DealsInCarousel from "../components/DealsInCarousel";

interface ILayoutOne {
  threeInOne: {
    title: string;
    subtitle: string;
    productList: GetProduct[];
  };
  fourList: {
    title: string;
    subtitle: string;
    productList: GetProduct[];
  };
  twoList: {
    title: string;
    subtitle: string;
    productList: GetProduct[];
  };
  threeList: {
    title: string;
    subtitle: string;
    productList: GetProduct[];
  };
}

function LayoutOne({ threeInOne, fourList, twoList, threeList }: ILayoutOne) {
  const { user } = useUserStore();
  return (
    <Grid container spacing={1}>
      <Grid item xs={5}>
        {!user && <SocialContainer />}
        <DealsInCarousel
          title={threeInOne.title}
          subtitle={threeInOne.subtitle}
          productList={threeInOne.productList}
        />
      </Grid>
      <Grid item xs={7} container direction={"column"}>
        <Grid item>
          <DealsProductCardContainer
            position={"none"}
            title={fourList.title}
            subtitle={fourList.subtitle}
            productList={fourList.productList}
            number={4}
          />
        </Grid>
        <Grid item container>
          <Grid item>
            <DealsProductCardContainer
              position={"none"}
              title={twoList.title}
              subtitle={twoList.subtitle}
              productList={twoList.productList}
              number={2}
            />
          </Grid>
          <Grid item>
            <DealsProductCardContainer
              position={"none"}
              title={threeList.title}
              subtitle={threeList.subtitle}
              productList={threeList.productList}
              number={3}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LayoutOne;
