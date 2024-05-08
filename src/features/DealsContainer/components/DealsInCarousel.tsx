import { Box, Grid, Typography } from "@mui/material";
import advertProductList from "@/data/advertProductList";
import CarouselContainer from "@/component/CarouselContainer";
import useUserStore from "@/store/user";
import getLanguage from "@/utils/getLanguage";
import { Breakpoints } from "@/data/carouselBreakPoints";
import getPrice from "@/utils/getPrice";
import { GetProduct } from "@/model/productModel";
import useDiscountStore from "@/store/discount";

interface IDealInCarousel {
  title: string;
  subtitle: string;
  productList: GetProduct[];
  showPercent?: boolean;
}

function DealsInCarousel({
  title,
  subtitle,
  productList,
  showPercent,
}: IDealInCarousel) {
  const { lang, user } = useUserStore();
  const { discount } = useDiscountStore();
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      p={"1.5rem"}
      bgcolor={"action.hover"}
      borderRadius={"1rem"}
      height={1}
    >
      <Typography fontSize={"1.5rem"} fontWeight={"bold"} color={"text.price"}>
        {title}
      </Typography>
      <Typography fontSize={"1.1rem"} mb={3} color={"text.primary"}>
        {subtitle}
      </Typography>
      {!user ? (
        <Box width={1} className="carousel--container" mt={"auto"}>
          <CarouselContainer
            type={Breakpoints.small}
            infinite={true}
            animate={true}
          >
            {productList?.map((product, index) => (
              <Box
                key={index}
                display={"flex"}
                flexDirection={"column"}
                gap={"0.5rem"}
              >
                <Box
                  borderRadius={2}
                  width={1}
                  component={"img"}
                  src={product.images?.imageUrls[product.images.primary]}
                  sx={{ backgroundSize: "cover", aspectRatio: 1 }}
                />
                <Box
                  width={1}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={"0.5rem"}
                >
                  <Typography
                    fontSize={"1.1rem"}
                    fontWeight={"bold"}
                    color={"text.price"}
                  >
                    US $
                    {
                      getPrice(
                        product.getDiscountedPriceAndPercent(discount)
                          .afterDiscount
                      ).int
                    }
                    .
                    {
                      getPrice(
                        product.getDiscountedPriceAndPercent(discount)
                          .afterDiscount
                      ).dec
                    }
                  </Typography>
                  <Typography
                    fontSize={"0.95rem"}
                    color={"text.secondary"}
                    sx={{ textDecoration: "line-through" }}
                  >
                    US ${getPrice(product.price).int}.
                    {getPrice(product.price).dec}
                  </Typography>
                </Box>
              </Box>
            ))}
          </CarouselContainer>
        </Box>
      ) : (
        <Box
          flex={1}
          p={0}
          mt={"auto"}
          borderRadius={"1rem"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Box m={"auto"} width={1} position={"relative"}>
            <Box
              width={1}
              component={"img"}
              src={productList[0]?.images.imageUrls[0]}
              sx={{ aspectRatio: 1, borderRadius: "1rem" }}
            />
            <Box
              width={1}
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"flex-end"}
              gap={"0.5rem"}
            >
              <Typography
                fontSize={"1rem"}
                fontWeight={500}
                color={"text.price"}
                sx={{ textWrap: "nowrap" }}
              >
                ETB{" "}
                <Typography
                  component={"span"}
                  fontSize={"1.2rem"}
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
                noWrap
                textOverflow={"ellipsis"}
                fontSize={"0.9rem"}
                color={"text.primary"}
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
              top={"50%"}
              left={"55%"}
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
          <Grid container width={1} mt={"0rem"} spacing={0.75}>
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
                    fontSize={"1rem"}
                    m={"auto"}
                    fontWeight={700}
                    color={"text.price"}
                    sx={{ textWrap: "nowrap" }}
                  >
                    ETB{" "}
                    {/* <Typography
                      component={"span"}
                      fontSize={"1.2rem"}
                      fontWeight={700}
                    > */}
                    {
                      getPrice(
                        productList[0]?.getDiscountedPriceAndPercent(discount)
                          .afterDiscount
                      ).int
                    }
                    {/* </Typography> */}.
                    {
                      getPrice(
                        productList[0]?.getDiscountedPriceAndPercent(discount)
                          .afterDiscount
                      ).dec
                    }
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
                    m={"auto"}
                    fontSize={"1rem"}
                    fontWeight={700}
                    color={"text.price"}
                    sx={{ textWrap: "nowrap" }}
                  >
                    ETB{" "}
                    {/* <Typography
                      component={"span"}
                      fontSize={"1.2rem"}
                      fontWeight={700}
                    > */}
                    {
                      getPrice(
                        productList[2]?.getDiscountedPriceAndPercent(discount)
                          .afterDiscount
                      ).int
                    }
                    {/* </Typography> */}.
                    {
                      getPrice(
                        productList[2]?.getDiscountedPriceAndPercent(discount)
                          .afterDiscount
                      ).dec
                    }
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
}

export default DealsInCarousel;
