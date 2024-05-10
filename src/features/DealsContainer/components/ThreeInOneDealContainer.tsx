import useUserStore from "@/store/user";
import { Box, Grid, Typography } from "@mui/material";
import { GetProduct } from "@/model/productModel";
import DealsProductCard from "./DealsProductCard";
import useDiscountStore from "@/store/discount";
import getPrice from "@/utils/getPrice";

interface IThreeInOneDealContainer {
  title: string;
  subtitle: string;
  productList: GetProduct[];
}

function ThreeInOneDealContainer({
  title,
  subtitle,
  productList,
}: IThreeInOneDealContainer) {
  const { lang } = useUserStore();
  const { discount } = useDiscountStore();
  return (
    <Box
      display={{ xs: "none", sm: "flex" }}
      flexDirection={"column"}
      height={1}
      p={"1.5rem"}
      bgcolor={"action.hover"}
      borderRadius={"1rem"}
    >
      <Typography
        fontSize={"1.5rem"}
        fontWeight={"bold"}
        color={"text.dealHeader"}
      >
        {title}
      </Typography>
      <Typography fontSize={"1.1rem"} mb={3} color={"text.primary"}>
        {subtitle}
      </Typography>
      <Box
        flex={1}
        p={2}
        borderRadius={"1rem"}
        bgcolor={"bright.main"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box width={0.7} position={"relative"}>
          <Box
            width={1}
            component={"img"}
            src={productList[0].images.imageUrls[productList[0].images.primary]}
            sx={{ aspectRatio: 1, borderRadius: "1rem" }}
          />
          <Box
            width={0.65}
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"flex-end"}
            gap={"0.5rem"}
          >
            <Typography
              fontSize={"0.8rem"}
              fontWeight={"bold"}
              color={"text.price"}
              sx={{ textWrap: "nowrap" }}
            >
              ETB
              <Typography component={"span"} fontSize={"1.2rem"}>
                {
                  getPrice(
                    productList[0].getDiscountedPriceAndPercent(discount)
                      .afterDiscount
                  ).int
                }
              </Typography>
              .
              {
                getPrice(
                  productList[0].getDiscountedPriceAndPercent(discount)
                    .afterDiscount
                ).dec
              }
            </Typography>
            <Typography
              noWrap
              textOverflow={"ellipsis"}
              fontSize={"0.9rem"}
              color={"text.contrast"}
              sx={{ textDecoration: "line-through" }}
            >
              ETB {getPrice(productList[0].price).int}.
              {getPrice(productList[0].price).dec}
            </Typography>
          </Box>
          <Box
            position={"absolute"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            top={"70%"}
            left={"65%"}
            border={"none"}
            width={"50%"}
            sx={{
              aspectRatio: 1,
              backgroundImage: "url(/assets/images/discountTag.webp)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPositionY: "center",
            }}
          >
            <Typography
              fontSize={"2.5rem"}
              pr={"0.9rem"}
              pb={"0.5rem"}
              color={"bright.main"}
            >
              {
                productList[0].getDiscountedPriceAndPercent(discount)
                  .discountPercent
              }
            </Typography>
          </Box>
        </Box>
        <Grid container width={1} mt={"0rem"} spacing={2}>
          <DealsProductCard
            image={
              productList[1].images.imageUrls[productList[1].images.primary]
            }
            discountValue={
              productList[1].getDiscountedPriceAndPercent(discount)
                .afterDiscount
            }
            price={productList[1].price}
            discountPercent={
              productList[1].getDiscountedPriceAndPercent(discount)
                .discountPercent
            }
            notShowDiscountPercent={true}
            size={2}
          />
          <DealsProductCard
            image={
              productList[2].images.imageUrls[productList[2].images.primary]
            }
            discountValue={
              productList[2].getDiscountedPriceAndPercent(discount)
                .afterDiscount
            }
            price={productList[2].price}
            discountPercent={
              productList[2].getDiscountedPriceAndPercent(discount)
                .discountPercent
            }
            notShowDiscountPercent={true}
            size={2}
          />
        </Grid>
      </Box>
    </Box>
  );
}

export default ThreeInOneDealContainer;
