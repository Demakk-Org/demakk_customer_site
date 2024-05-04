import NavBar from "@/features/Navbar";
import styles from "@/styles/Home.module.css";

import { Avatar, Box, Button, Typography } from "@mui/material";
import getPrice from "@/utils/getPrice";
import Head from "next/head";
import { useEffect } from "react";
import useProductStore from "@/store/product";
import { LANG } from "@/store/user";
import useDiscountStore from "@/store/discount";
import { IProductForPage } from "@/model/productModel";
import getProduct from "@/hooks/getProduct";

function Product({ item }: { item: IProductForPage }) {
  const { products, setProducts, setProduct, page, limit, nextPage, prevPage } =
    useProductStore();
  const { discount, setDiscount } = useDiscountStore();

  useEffect(() => {
    setProducts({ limit, lang: LANG.en, page });
    setDiscount();
    if (item) {
      setProduct(item);
    }
  }, [page]);

  return (
    <>
      <Head>
        <title>Demakk E-commerce site</title>
        <meta
          name="description"
          content="The best e-commerce to shop with custom design"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <Box width={"100%"} minHeight={"100vh"} bgcolor={"background.paper"}>
          <NavBar />
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Box p={"1rem"} display={"flex"} gap={"1rem"}>
              {products.map((product) => {
                const p = product.getProductForCard();
                return (
                  <Box
                    key={p.id.toString()}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                  >
                    <Avatar
                      variant="square"
                      src={p?.images && p?.images.imageUrls[0]}
                      sx={{ width: 80, height: 80 }}
                    />
                    <Typography color={"text.primary"}>
                      {p.id.toString()}
                    </Typography>
                    <Typography color={"text.primary"}>{p.name}</Typography>
                    <Box
                      display={"flex"}
                      gap={"0.5rem"}
                      flexDirection={"row-reverse"}
                    >
                      {p.price ? (
                        <Typography
                          color={"text.primary"}
                          sx={{
                            textDecoration: p.discountedPrice(discount)
                              .afterDiscount
                              ? "line-through"
                              : "unset",
                          }}
                        >
                          {getPrice(p.price).int}.{getPrice(p.price).dec}
                        </Typography>
                      ) : (
                        <></>
                      )}
                      {p.discountedPrice(discount).afterDiscount ? (
                        <Typography color={"text.primary"}>
                          {
                            getPrice(p.discountedPrice(discount).afterDiscount)
                              .int
                          }
                          .
                          {
                            getPrice(p.discountedPrice(discount).afterDiscount)
                              .dec
                          }
                        </Typography>
                      ) : (
                        <></>
                      )}
                    </Box>

                    {p.rating?.average ? (
                      <Typography color={"text.primary"}>
                        {p.rating.average}
                      </Typography>
                    ) : (
                      <></>
                    )}
                    <Box display={"flex"} gap="0.5rem">
                      {p.discountedPrice(discount).afterDiscount ? (
                        <Typography color={"text.primary"}>
                          {p.deals(discount)}
                        </Typography>
                      ) : (
                        <></>
                      )}
                      {p.discountedPrice(discount).discountPercent ? (
                        <Typography color={"text.primary"}>
                          {p.discountedPrice(discount).discountPercent}%
                        </Typography>
                      ) : (
                        <></>
                      )}
                    </Box>

                    {p.shipping(discount).status ? (
                      <Typography color={"text.primary"}>
                        Free shipping{" "}
                        {p.shipping(discount).above > 0 &&
                          ` over $${p.shipping(discount).above}`}
                      </Typography>
                    ) : (
                      <></>
                    )}
                  </Box>
                );
              })}
            </Box>

            <Box display={"flex"} alignItems={"center"} gap={2}>
              <Button variant="contained" onClick={() => prevPage()}>
                Prev
              </Button>
              <Button variant="contained" onClick={() => nextPage()}>
                Next
              </Button>
              <Typography color={"text.primary"}>Page: {page}</Typography>
            </Box>
          </Box>
        </Box>
      </main>
    </>
  );
}

export default Product;

export async function getStaticProps() {
  const item = await getProduct({ productId: "65cbb7eedbb6c540322a61ce" });

  return {
    props: {
      item,
    },
  };
}
