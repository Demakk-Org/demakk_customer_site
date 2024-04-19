import { Deal, productCategories } from "./dealsContainerStructure";

export interface Product {
  id: string;
  name: string;
  imgUrl: string;
  price: number;
  rating: number;
  productCategory: string;
}

export const productList: Product[] = [
  {
    id: "546545623",
    name: "Red sleeveless T-shirt",
    imgUrl: "http://localhost:3000/assets/images/product3.webp",
    price: 100,
    rating: 5,
    productCategory: "124345646",
  },
  {
    id: "546545624",
    name: "Grren sleeveless T-shirt",
    imgUrl: "http://localhost:3000/assets/images/product4.webp",
    price: 100,
    rating: 3.5,
    productCategory: "124345646",
  },
  {
    id: "546545625",
    name: "Black sleeveless T-shirt",
    imgUrl: "http://localhost:3000/assets/images/product5.webp",
    price: 100,
    rating: 4,
    productCategory: "124345646",
  },
];

interface ProductCard extends Product {
  sold: number;
  deals: Deal[];
}

class ProductCard {
  constructor({ id, name, imgUrl, price, rating, productCategory }: Product) {
    this.id = id;
    this.name = name;
    this.imgUrl = imgUrl;
    this.price = price;
    this.rating = rating;
    this.productCategory = productCategory;
  }

  getProductCategory() {
    return productCategories.filter(
      (category) => category.id === this.productCategory
    );
  }
}

export const product1 = new ProductCard({
  id: "546545623",
  name: "Red sleeveless T-shirt",
  imgUrl: "http://localhost:3000/assets/images/product4.webp",
  price: 100,
  rating: 5,
  productCategory: "124345646",
});
