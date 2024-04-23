import DetailsPage from '@/features/ProductDetail/DetailsPage';
import React from 'react';
import data from '../../data/library';

export default function ProductsDetail({ repo }: any) {
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

type Repo = {
  name: string;
  stargazers_count: number;
};

// export const getStaticPaths = (async () => {
//   console.log('hi');
//   return {
//     paths: [
//       {
//         params: {
//           id: `${params.id}`,
//         },
//       }, // See the "paths" section below
//     ],
//     fallback: true, // false or "blocking"
//   };
// }) satisfies GetStaticPaths;
export async function getStaticPaths() {
  // When this is true (in preview environments) don't
  // prerender any static pages
  // (faster builds, but slower initial page load)
  // if (process.env.SKIP_BUILD_STATIC_GENERATION) {
  //   return {
  //     paths: [],
  //     fallback: 'blocking',
  //   };
  // }

  // Call an external API endpoint to get posts
  const res = await fetch('https://demakk-backend.vercel.app/api/v1/product');
  const products = await res.json();

  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = products.data.data.map((product) => {
    return {
      params: { id: `${product.id.toString()}` },
    };
  });

  // { fallback: false } means other routes should 404
  return { paths, fallback: false };
}

export const getStaticProps = (async (context: any) => {
  const id = context.params.id;
  const res = await fetch(
    `https://demakk-backend.vercel.app/api/v1/product/${id}`
  );
  const repo = await res.json();

  console.log(repo);
  return { props: { repo } };
}) satisfies GetStaticProps<{
  repo: Repo;
}>;

// export default function Page({
//   repo,
// }: InferGetStaticPropsType<typeof getStaticProps>) {
//   return repo.stargazers_count;
// }
