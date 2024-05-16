import { Box, Typography, Grid } from "@mui/material";

import { GetProduct } from "@/model/productModel";
import getPrice from "@/utils/getPrice";
import useDiscountStore from "@/store/discount";

interface IDealInFullHeight {
  title: string;
  subtitle: string;
  productList: GetProduct[];
  showPercent?: boolean;
}

function DealInFullHeight({
  title,
  subtitle,
  productList,
  showPercent,
}: IDealInFullHeight) {
  const { discount } = useDiscountStore();
  console.log(productList);
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
      >
        <Box width={0.7} position={"relative"}>
          <Box
            width={1}
            component={"img"}
            src={productList[0]?.images.imageUrls[0]}
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
              fontWeight={500}
              color={"text.price"}
              sx={{ textWrap: "nowrap" }}
            >
              ETB
              <Typography
                component={"span"}
                fontSize={"1.1rem"}
                fontWeight={700}
              >
                {
                  getPrice(
                    productList[0]?.getDiscountedPriceAndPercent(discount)
                      .afterDiscount
                  ).int
                }
              </Typography>
              .
              {
                getPrice(
                  productList[0]?.getDiscountedPriceAndPercent(discount)
                    .afterDiscount
                ).dec
              }
            </Typography>
            <Typography
              title={`ETB ${getPrice(productList[0]?.price).int}.${
                getPrice(productList[0]?.price).dec
              }`}
              noWrap
              textOverflow={"ellipsis"}
              fontSize={"0.9rem"}
              color={"text.contrast"}
              sx={{ textDecoration: "line-through" }}
            >
              ETB {getPrice(productList[0]?.price).int}.
              {getPrice(productList[0]?.price).dec}
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
                productList[0]?.getDiscountedPriceAndPercent(discount)
                  .discountPercent
              }
            </Typography>
          </Box>
        </Box>
        <Grid container width={1} mt={"0rem"} spacing={2}>
          <Grid item xs={6}>
            <Box width={1} display={"flex"} flexDirection={"column"} gap={1}>
              <Box
                border="1px solid black"
                component={"img"}
                borderRadius={"1rem"}
                width={1}
                sx={{ aspectRatio: 1, objectFit: "cover" }}
                src="/assets/images/product8.webp"
              />
              <Box
                display={"flex"}
                justifyContent={"flex-start"}
                alignItems={"flex-end"}
                gap={"0.5rem"}
              >
                <Typography
                  fontSize={"0.8rem"}
                  fontWeight={500}
                  color={"text.price"}
                  sx={{ textWrap: "nowrap" }}
                >
                  ETB{" "}
                  <Typography
                    component={"span"}
                    fontSize={"1rem"}
                    fontWeight={700}
                  >
                    {
                      getPrice(
                        productList[0]?.getDiscountedPriceAndPercent(discount)
                          .afterDiscount
                      ).int
                    }
                  </Typography>
                  .
                  {
                    getPrice(
                      productList[0]?.getDiscountedPriceAndPercent(discount)
                        .afterDiscount
                    ).dec
                  }
                </Typography>
                <Typography
                  title={`ETB ${getPrice(productList[1].price).int}.${
                    getPrice(productList[1].price).dec
                  }`}
                  noWrap
                  textOverflow={"ellipsis"}
                  fontSize={"0.9rem"}
                  color={"text.contrast"}
                  sx={{ textDecoration: "line-through" }}
                >
                  ETB {getPrice(productList[1].price).int}.
                  {getPrice(productList[1].price).dec}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box width={1} display={"flex"} flexDirection={"column"} gap={1}>
              <Box
                border="1px solid lightgray"
                component={"img"}
                borderRadius={"1rem"}
                width={1}
                sx={{ aspectRatio: 1, objectFit: "cover" }}
                src="/assets/images/product.webp"
              />
              <Box
                display={"flex"}
                justifyContent={"flex-start"}
                alignItems={"flex-end"}
                gap={"0.5rem"}
              >
                <Typography
                  fontSize={"0.8rem"}
                  fontWeight={500}
                  color={"text.price"}
                  sx={{ textWrap: "nowrap" }}
                >
                  ETB{" "}
                  <Typography
                    component={"span"}
                    fontSize={"1rem"}
                    fontWeight={700}
                  >
                    {
                      getPrice(
                        productList[2]?.getDiscountedPriceAndPercent(discount)
                          .afterDiscount
                      ).int
                    }
                  </Typography>
                  .
                  {
                    getPrice(
                      productList[2]?.getDiscountedPriceAndPercent(discount)
                        .afterDiscount
                    ).dec
                  }
                </Typography>
                <Typography
                  title={`ETB ${getPrice(productList[2].price).int}.${
                    getPrice(productList[2].price).dec
                  }`}
                  noWrap
                  textOverflow={"ellipsis"}
                  fontSize={"0.9rem"}
                  color={"text.contrast"}
                  sx={{ textDecoration: "line-through" }}
                >
                  ETB {getPrice(productList[2].price).int}.
                  {getPrice(productList[2].price).dec}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default DealInFullHeight;
