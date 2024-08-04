import {
  Box,
  Button,
  Collapse,
  Grid,
  Grow,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import ImageFromFirebase from "@/component/ImageFromFirebase";
import { ImageType } from "@/component/FirebaseImageUploadComponent";
import Image from "next/image";
import Loading from "@/component/Loading";
import { IProductForCard } from "@/model/productModel";
import { demakkFont } from "@/pages/_app";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useTranslation } from "next-i18next";
import handleAddOrderItem from "@/api/orderItem/handleAddOrderItem";
import useTokenStore from "@/store/token";
import usePageStore from "@/store/page";
import useCartStore from "@/store/cart";
import useUserStore from "@/store/user";
import handleLikeProduct from "@/features/Product/ProductsCard/utils/handleLikeProduct";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

function FavoriteProductListComponent({
  favoriteProducts,
}: {
  favoriteProducts: null | IProductForCard[];
}) {
  const router = useRouter();
  const { t } = useTranslation(["order"]);
  const { setLoading, setOpenModal } = usePageStore();
  const { token } = useTokenStore();
  const { setCart } = useCartStore();
  const { lang, setUser } = useUserStore();

  const [showMoreDropDown, setShowMoreDropDown] = useState(false);
  const container = useRef();
  return (
    <>
      {!favoriteProducts ? (
        <Stack color={"text.primary"} minHeight={"250px"}>
          <Loading windowMode />
        </Stack>
      ) : favoriteProducts.length == 0 ? (
        <Stack
          p={"3rem"}
          bgcolor={"background.light"}
          alignItems={"center"}
          justifyContent={"center"}
          color={"text.primary"}
          spacing={1}
        >
          <Image
            width={150}
            height={150}
            src={"/assets/images/not-found.jpeg"}
            alt="product not found"
          />
          <Typography
            fontWeight={"bold"}
            fontSize={"1.2rem"}
            className={demakkFont.className}
            letterSpacing={1}
          >
            {t("itIsEmptyHere")}
          </Typography>
          <Button
            variant="outlined"
            color="contrast"
            sx={{ borderRadius: "2rem" }}
            onClick={() => router.push("/")}
          >
            {t("startShopping", { ns: "actions" })}
          </Button>
        </Stack>
      ) : (
        favoriteProducts.map((product, index) => (
          <Stack key={index} width={1} bgcolor={"background.light"} p={2}>
            <Grid container spacing={2}>
              <Grid item md={2.5}>
                <ImageFromFirebase
                  type={ImageType.product}
                  width={"100%"}
                  quality="240p"
                  name={product.images?.imageUrls[0]}
                />
              </Grid>

              <Grid item md={6}>
                <Stack color={"text.primary"} spacing={1}>
                  <Typography fontSize={"1.2rem"} noWrap>
                    {product.name}
                  </Typography>
                  <Typography fontSize={"1.1rem"}>
                    1000+ {t("orders")}
                  </Typography>
                  <Typography fontSize={"1.3rem"}>
                    {t("etb", { ns: "common" })} {product.price}
                  </Typography>
                </Stack>
              </Grid>

              <Grid item md={3.5}>
                <Stack height={1} spacing={2} justifyContent={"center"}>
                  <Button
                    variant="outlined"
                    color="contrast"
                    sx={{ borderRadius: "2rem" }}
                    onClick={() => {
                      handleAddOrderItem({
                        productVariantId: product.productVariants[0],
                        quantity: 2,
                        token,
                        setLoading,
                        setCart,
                        lang,
                      });
                    }}
                  >
                    {t("addToCart", { ns: "actions" })}
                  </Button>
                  <Stack direction={"row"} spacing={1}>
                    <Box width={1} position={"relative"}>
                      <Button
                        variant="outlined"
                        fullWidth
                        color="contrast"
                        sx={{ borderRadius: "2rem" }}
                        endIcon={
                          !showMoreDropDown ? <ExpandMore /> : <ExpandLess />
                        }
                        onClick={() => setShowMoreDropDown((p) => !p)}
                      >
                        {t("more", { ns: "common" })}
                      </Button>

                      <Box sx={{ overflow: "hidden" }} ref={container}>
                        <Slide
                          in={showMoreDropDown}
                          direction="up"
                          container={container.current}
                        >
                          <Stack
                            position={"absolute"}
                            top={"110%"}
                            left={0}
                            minWidth={"max-content"}
                            bgcolor={"background.lightOpaque"}
                            py={1}
                            borderRadius={2}
                          >
                            <Button
                              color="contrast"
                              disabled
                              sx={{ justifyContent: "flex-start" }}
                            >
                              {t("moveToAnotherList", { ns: "account" })}
                            </Button>
                            <Button
                              color="contrast"
                              disabled
                              sx={{ justifyContent: "flex-start" }}
                            >
                              {t("viewSimilarItems", { ns: "account" })}
                            </Button>
                          </Stack>
                        </Slide>
                      </Box>
                    </Box>

                    <Button
                      variant="outlined"
                      fullWidth
                      color="contrast"
                      sx={{ borderRadius: "2rem" }}
                      onClick={() => {
                        setOpenModal({
                          open: true,
                          title: "Confirm",
                          description:
                            "Sure you want to delete items from your wishlist?",
                          callBackFn: () => {
                            setLoading(true);
                            handleLikeProduct({
                              token,
                              productId: product._id.toString(),
                              setUser,
                            }).then(() => {
                              setLoading(false);
                            });
                          },
                        });
                      }}
                    >
                      {t("delete", { ns: "actions" })}
                    </Button>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        ))
      )}
    </>
  );
}

export default FavoriteProductListComponent;
