import DetailsPage from '@/features/ProductDetail/DetailsPage';
import styles from '@/styles/Home.module.css';
import React, { useEffect } from 'react';

export default function ProductsDetail({ item }: { item: Product }) {
  const { discount, setDiscount } = useDiscountStore();
  const { product, setProduct, page, limit, nextPage, prevPage } =
    useProductStore();
  useEffect(() => {
    // setDiscount();
    setProduct(item);
    setDiscount();
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
          <DetailsPage />
        </Box>
      </main>
    </>
  );
}

import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from 'next';
import useDiscountStore from '@/store/discount';
import { GetProduct, Product } from '@/model/productModel';
import useProductStore from '@/store/product';
import Head from 'next/head';
import { Box } from '@mui/material';
import NavBar from '@/features/Navbar';
import { LANG } from '@/store/user';

export async function getStaticPaths() {
  const res = await fetch('https://demakk-backend.vercel.app/api/v1/product');
  const products = await res.json();
  const paths = products.data.data.map((product: any) => {
    return {
      params: { id: `${product.id.toString()}` },
    };
  });
  return { paths, fallback: false };
}

export const getStaticProps = (async (context: any) => {
  const id = context.params.id;
  const res = await fetch(
    `https://demakk-backend.vercel.app/api/v1/product/${id}`
  );
  const product = await res.json();
  const item: Product = product.data;
  console.log('from item', item);
  return { props: { item } };
}) satisfies GetStaticProps<{
  item: Product;
}>;
