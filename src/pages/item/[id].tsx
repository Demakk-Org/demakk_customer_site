import DetailsPage from '@/features/ProductDetail/DetailsPage';
import React, { useEffect } from 'react';

export default function ProductsDetail({ repo }: any) {
  const { discount, setDiscount } = useDiscountStore();

  useEffect(() => {
    setDiscount();
  }, []);

  return (
    <>
      <DetailsPage data={repo.data} />
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
  const repo = await res.json();
  console.log(repo);
  // const product = new GetProduct(repo.data);

  // console.log(product);
  // return { props: { product: repo.data } };
  return { props: { repo } };
}) satisfies GetStaticProps<{
  repo: Product;
}>;
