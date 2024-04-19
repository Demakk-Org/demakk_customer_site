import { GetProduct, Product } from '@/model/product';
import { LANG } from '@/store/user';
import axios from 'axios';

export interface GetProductProps {
  limit: number;
  page: number;
  lang: LANG;
}

const getProducts = async ({ limit, page, lang }: GetProductProps) => {
  const products = await axios.patch(
    'https://demakk-backend.vercel.app/api/v1/product',
    {
      limit,
      page,
      lang,
    }
  );

  const list: GetProduct[] = products.data.data.data.map((product: Product) => {
    product;
    const newProduct = new GetProduct(product);
    // console.log(newProduct);
    return newProduct;
  });

  return list;
};

export default getProducts;
