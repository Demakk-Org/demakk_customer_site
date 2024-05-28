import ProductDetails from "@/features/ProductDetail/ProductDetails";
import styles from "@/styles/Home.module.css";
import React, { useEffect } from "react";
import type { GetStaticProps } from "next";
import useDiscountStore from "@/store/discount";
import { IProductForPage } from "@/model/productModel";
import useProductStore from "@/store/product";
import Head from "next/head";
import { Box } from "@mui/material";
import NavBar from "@/features/Navbar";

export default function ProductsDetail({ item }: { item: IProductForPage }) {
  const { setDiscount } = useDiscountStore();
  const { setProduct, page, limit, nextPage, prevPage } = useProductStore();
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
        <Box width={"100%"} minHeight={"100vh"} bgcolor={"background.paper"}>
          <NavBar />
          <ProductDetails />
        </Box>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    "https://demakk-backend.vercel.app/api/v1/product?page=4"
  );
  const products = await res.json();
  const paths = products.data.data.map((product: any) => {
    return {
      params: { id: `${product._id.toString()}` },
    };
  });
  return { paths, fallback: false };
}

export const getStaticProps = (async (context: any) => {
  const id = context.params.id;
  const res = await fetch(`https://demakk-backend.vercel.app/api/v1/product/${id}`);
  const product = await res.json();
  const item: IProductForPage = product.data;
  console.log("from item", item);
  return { props: { item } };
}) satisfies GetStaticProps<{
  item: IProductForPage;
}>;
