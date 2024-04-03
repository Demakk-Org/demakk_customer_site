import { Box, Button, Typography } from "@mui/material";

import CarouselContainer from "@/component/CarouselContainer";
import DealsComponentForMobile from "../components/DealsComponentForMobile";
import { ArrowForwardIos } from "@mui/icons-material";
import language from "@/data/dictionary";

function SmallDeviceDealsContainer() {
  return (
    <Box
      width={1}
      display={{ xs: "flex", md: "none" }}
      flexDirection={"column"}
    >
      <Typography
        fontSize={{ xs: "1.1rem", sm: "2rem" }}
        pl={{ sm: "1rem" }}
        fontWeight={"bold"}
        color={"text.primary"}
      >
        {language.en.welcomeDeal}
      </Typography>
      <Typography
        pl={{ sm: "1rem" }}
        fontSize={{ xs: "0.9rem", sm: "1.4rem" }}
        fontWeight={400}
      >
        {language.en.yourExclusivePrice}
      </Typography>
      <Box width={1} mt={1}>
        <CarouselContainer type={"smallOther"} infinite={false} animate={false}>
          <DealsComponentForMobile
            imgUrl={"/assets/images/product2.webp"}
            price={17}
            discountPrice={32}
            ordersNumber={122}
          />
          <DealsComponentForMobile
            imgUrl={"/assets/images/product3.webp"}
            price={37}
            discountPrice={49}
            ordersNumber={271}
          />
          <DealsComponentForMobile
            imgUrl={"/assets/images/product4.webp"}
            price={11}
            discountPrice={18}
            ordersNumber={98}
          />
          <DealsComponentForMobile
            imgUrl={"/assets/images/product5.webp"}
            price={7}
            discountPrice={13}
            ordersNumber={950}
          />
          <Box display={"flex"} height={1}>
            <Button
              color="demakkSecondary"
              endIcon={<ArrowForwardIos />}
              sx={{ color: "text.primary" }}
            >
              {language.en.more}
            </Button>
          </Box>
        </CarouselContainer>
      </Box>
    </Box>
  );
}

export default SmallDeviceDealsContainer;
