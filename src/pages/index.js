import Head from 'next/head';
import styles from '@/styles/Home.module.css';

import Navbar from '@/features/Navbar';
import DiscountSale from '@/features/DiscountSale';
import PinLocation from '@/features/Home/PinLocation';
import Recommendation from '@/features/Recommendation';
import Footer from '@/features/Footer';
import DealsContainer from '@/features/DealsContainer';
import MoreProductsCard from '@/features/ProductsCard/products/moreProductsCard';

import { Box } from '@mui/material';
import ProductIndex from '@/features/ProductsCard';

export default function Home() {
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
          {/* <Navbar /> */}
          <PinLocation />
          <Recommendation />
          <DiscountSale />
          <ProductIndex />
          {/* <DealsContainer /> */}
          <Footer />
        </Box>
      </main>
    </>
  );
}
