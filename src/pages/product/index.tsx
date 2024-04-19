import NavBar from '@/features/Navbar';
import { product1 } from '../../../product';
import styles from '@/styles/Home.module.css';

import { Avatar, Box, Button, Typography } from "@mui/material";
import getPrice from "@/utils/getPrice";
import Head from "next/head";
import { useEffect } from "react";
import useProductStore from "@/store/product";
import { LANG } from "@/store/user";

function Product() {
  const { products, setProducts, page, limit, nextPage, prevPage } =
    useProductStore();
  console.log(products);

  useEffect(() => {
    setProducts({ limit: 10, lang: LANG.en, page: 1 });
  }, []);

  return (
    <>
      <Head>
        <title>Demakk Ecommerce site</title>
        <meta
          name="description"
          content="The best ecommerce to shop with custom design"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <Box width={'100%'} minHeight={'100vh'} bgcolor={'background.paper'}>
          <NavBar />
          {products.map((product) => {
            const p = product.getProductforCard();
            console.log(p);
            return (
              <Box key={p.id.toString()}>
                <Avatar
                  variant="square"
                  src={p?.images && p?.images}
                  sx={{ width: 80, height: 80 }}
                />
                <Typography color={'text.primary'}>{p.name}</Typography>
              </Box>
            );
          })}
        </Box>
      </main>
    </>
  );
}

export default Product;
