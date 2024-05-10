import useUserStore from "@/store/user";
import getLanguage from "@/utils/getLanguage";
import { Box, Grid, Typography } from "@mui/material";
import { Fragment } from "react";
import DealsProductCard from "./DealsProductCard";
import { GetProduct } from "@/model/productModel";

interface ThreeInOneDealerProps {
  title: string;
  subtitle: string;
  top?: boolean;
  first?: boolean;
  productList?: GetProduct[];
  number: number;
}

function ThreeInOneDeal({
  top,
  title,
  subtitle,
  first,
  productList,
  number,
}: ThreeInOneDealerProps) {
  const { lang } = useUserStore();
  return (
    <Grid item width={1} height={"50%"}>
      <Box height={1} p={!top ? "0.5rem 0 0 0" : "0 0 0.5rem 0"}>
        <Box
          height={1}
          p={"1.5rem"}
          borderRadius={"1rem"}
          bgcolor={"action.hover"}
        >
          <Typography
            fontSize={"1.5rem"}
            fontWeight={"bold"}
            color={first ? "primary.main" : "text.primary"}
          >
            {getLanguage(title, lang)}
          </Typography>
          <Typography fontSize={"1.1rem"} mb={3} color={"text.primary"}>
            {getLanguage(subtitle, lang)}
          </Typography>
          <Grid container spacing={2} width={1}>
            {Array(number)
              .fill(true)
              .map((val, ind) => (
                <Fragment key={ind}>
                  <DealsProductCard
                    image={`/assets/images/product${ind + 2}.webp`}
                    price={18.55}
                    discountValue={8.95}
                    discountPercent={55}
                    size={number}
                  />
                </Fragment>
              ))}
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
}

export default ThreeInOneDeal;
