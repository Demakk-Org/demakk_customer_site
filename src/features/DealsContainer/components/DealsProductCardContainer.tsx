import { Box, Grid, Typography } from "@mui/material";
import { Fragment } from "react";
import DealsProductCard from "./DealsProductCard";
import { GetProduct } from "@/model/productModel";
import useDiscountStore from "@/store/discount";

interface IDealsProductCardContainer {
  title: string;
  subtitle: string;
  position: "top" | "bottom" | "none";
  first?: boolean;
  productList: GetProduct[];
  number: number;
  showPercent?: boolean;
}

function DealsProductCardContainer({
  position,
  title,
  subtitle,
  first,
  productList,
  number,
  showPercent,
}: IDealsProductCardContainer) {
  const { discount } = useDiscountStore();
  return (
    <Grid item width={1}>
      <Box
        className="horizontal-deal-container"
        height={1}
        p={
          position == "bottom"
            ? "0.5rem 0 0 0"
            : position == "top"
            ? "0 0 0.5rem 0"
            : "0"
        }
      >
        <Box
          height={1}
          p={"1.5rem"}
          borderRadius={"1rem"}
          bgcolor={"action.hover"}
        >
          <Typography
            fontSize={"1.5rem"}
            fontWeight={"bold"}
            color={first ? "text.dealHeader" : "text.primary"}
          >
            {title}
          </Typography>
          <Typography fontSize={"1.1rem"} mb={3} color={"text.primary"}>
            {subtitle}
          </Typography>
          <Grid container spacing={2} width={1}>
            {productList?.slice(0, number)?.map((product, ind) => (
              <Fragment key={ind}>
                <DealsProductCard
                  notShowDiscountPercent={!showPercent}
                  image={product.images.imageUrls[product.images.primary]}
                  price={product.price}
                  discountValue={
                    product?.getDiscountedPriceAndPercent(discount)
                      .afterDiscount
                  }
                  discountPercent={
                    product?.getDiscountedPriceAndPercent(discount)
                      .discountPercent
                  }
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

export default DealsProductCardContainer;
