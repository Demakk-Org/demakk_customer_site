import { ReactElement } from "react";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import AccountPageLayout from "@/layout/AccountPageLayout";
import OrderDetailTabContent from "@/features/AccountPage/components/OrderDetailTabContent";
import { GetStaticPaths, GetStaticProps } from "next";
import axios from "axios";
import { ObjectId } from "mongoose";
import { chosenBackendUrl } from "@/store/user";

export default function Home({ orderId }: { orderId: string }): ReactElement {
  return (
    <>
      <Head>
        <title>Order</title>
        <meta
          name="description"
          content="The best e-commerce to shop with custom design"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <AccountPageLayout selectedTab={1} pageType="order">
          <OrderDetailTabContent orderId={orderId} />
        </AccountPageLayout>
      </main>
    </>
  );
}

export const getStaticPaths = (async () => {
  let orders = await axios.get(`${chosenBackendUrl}/order/ids`);

  let paths = orders.data.data.map((order: { _id: ObjectId }) => {
    return {
      params: {
        orderId: order._id,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  console.log(context, "context");

  return { props: { orderId: context.params?.orderId } };
}) satisfies GetStaticProps<{
  orderId: string | string[] | undefined;
}>;
