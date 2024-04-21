import NavBar from '@/features/Navbar';
import styles from '@/styles/Home.module.css';

import { Avatar, Box, Button, Typography } from '@mui/material';
import getPrice from '@/utils/getPrice';
import Head from 'next/head';
import { useEffect } from 'react';
import useProductStore from '@/store/product';
import { LANG } from '@/store/user';
import useDiscountStore from '@/store/discount';

function Product() {
  const { products, setProducts, page, limit, nextPage, prevPage } =
    useProductStore();
  const { discount, setDiscount } = useDiscountStore();

  useEffect(() => {
    setProducts({ limit, lang: LANG.en, page });
  }, [page, limit, setProducts]);

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
        <Box
          width={'100%'}
          minHeight={'100vh'}
          bgcolor={'background.paper'}
          // p={"2rem"}
        >
          <NavBar />
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Box p={'1rem'} display={'flex'} gap={'1rem'}>
              {products.map((product) => {
                const p = product.getProductforCard();
                console.log(p.discountedPrice(discount));

                return (
                  <Box
                    key={p.id.toString()}
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                  >
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

            <Box display={'flex'} alignItems={'center'} gap={2}>
              <Button variant="contained" onClick={() => prevPage()}>
                Prev
              </Button>
              <Button variant="contained" onClick={() => nextPage()}>
                Next
              </Button>
              <Typography color={'text.primary'}>Page: {page}</Typography>
            </Box>
          </Box>
        </Box>
      </main>
    </>
  );
}

export default Product;
