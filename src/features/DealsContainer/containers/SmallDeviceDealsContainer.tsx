import { Box, Button, Typography } from "@mui/material";

import CarouselContainer from "@/component/CarouselContainer";
import DealsComponentForMobile from "../components/DealsComponentForMobile";
import { ArrowForwardIos } from "@mui/icons-material";
import { Breakpoints } from "@/data/carouselBreakPoints";
import getLanguage from "@/utils/getLanguage";
import useUserStore from "@/store/user";
import useDiscountStore from "@/store/discount";
import { Fragment } from "react";

function SmallDeviceDealsContainer() {
  const { lang } = useUserStore();
  const { deal, discount } = useDiscountStore();

  if (!deal) return <></>;

  return (
    <Box
      width={1}
      display={{ xs: "flex", md: "none" }}
      flexDirection={"column"}
      gap={"0.25rem"}
    >
      <Typography
        fontSize={{ xs: "1.1rem", sm: "2rem" }}
        pl={{ sm: "1rem" }}
        fontWeight={"bold"}
        color={"text.primary"}
        letterSpacing={"1.5px"}
      >
        {deal[0].getDeal().dealType.name}
      </Typography>
      <Typography
        pl={{ sm: "1rem" }}
        fontSize={{ xs: "1rem", sm: "1.4rem" }}
        fontWeight={400}
        letterSpacing={0.5}
        color={"text.primary"}
      >
        {deal[0].getDeal().dealType.subTitle}
      </Typography>
      <Box width={1} mt={1}>
        <CarouselContainer
          type={Breakpoints.smallOther}
          infinite={false}
          animate={false}
        >
          {deal[0]
            .getAllProductsForDeal()
            .slice(0, 5)
            .map((product) => (
              <Fragment key={product.id.toString()}>
                <DealsComponentForMobile
                  imgUrl={product.images.imageUrls[product.images.primary]}
                  price={product.price}
                  discountPrice={
                    product.getDiscountedPriceAndPercent(discount).afterDiscount
                  }
                  ordersNumber={product.sold}
                />
              </Fragment>
            ))}

          <Box display={"flex"} height={1}>
            <Button
              fullWidth
              endIcon={<ArrowForwardIos />}
              sx={{ color: "text.primary" }}
            >
              {getLanguage("more", lang)}
            </Button>
          </Box>
        </CarouselContainer>
      </Box>
    </Box>
  );
}

export default SmallDeviceDealsContainer;
