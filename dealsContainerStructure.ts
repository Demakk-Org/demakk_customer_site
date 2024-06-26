import { Product } from "@/model/product";
import mongoose from "mongoose";

interface Rating {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  count: number;
  average: number;
}

interface Image {
  rid: mongoose.Types.ObjectId;
  type: string;
  name: string;
  description: string;
  urls: string[];
  primary: number;
}

// export interface Product {
//   id: mongoose.Types.ObjectId;
//   name: string;
//   description: string;
//   price: number;
//   ratings?: Rating;
//   productCategory: string;
//   tags: string[];
//   images?: Image;
//   reviews?: mongoose.Types.ObjectId;
//   popularity: number;
// }

enum DealType {
  welcomeDeals = "Welcome deals",
  topBrands = "Top Brands",
  bestSellers = "Best Sellers",
  weeklyDeals = "Weekly Deals",
}

export enum DiscountType {
  cashDiscount = "Cash Discount",
  percentageDiscount = "Percentage Discount",
  freeShipping = "Free Shipping",
  volumeDiscount = "Volume Discount",
}

export interface Discount {
  discountType: DiscountType;
  discountAmount: number;
  status: boolean;
  products: Product[];
  createdAt?: Date;
  updatedAt?: Date;
}

interface ProductCategory {
  id: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface DiscountProduct {
  products: Product[];
  discountType: DiscountType;
  discountAmount: number;
}

interface DiscountedProduct extends Product {
  discountedPrice: number;
}

export interface Deal {
  dealType: DealType;
  subtitle: string;
  image?: string;
  products: GetDiscountProductList;
}

interface DealsContainer {
  welcomeDeals?: Deal;
  topBrands?: Deal;
  bestSellers?: Deal;
  weeklyDeals?: Deal;
}

// export const productCategories: ProductCategory[] = [
//   {
//     id: "124345646",
//     name: "T-shirts",
//   },
//   {
//     id: "124345647",
//     name: "Shirts",
//   },
//   {
//     id: "124345648",
//     name: "Pants",
//   },
//   {
//     id: "124345649",
//     name: "Shoes",
//   },
//   {
//     id: "124345650",
//     name: "Bags",
//   },
//   {
//     id: "124345651",
//     name: "Accessories",
//   },
//   {
//     id: "124345652",
//     name: "Others",
//   },
// ];

class GetDiscountProductList {
  products: Product[];
  discountType: DiscountType;
  discountAmount: number;

  constructor(
    products: Product[],
    discountType: DiscountType,
    discountAmount: number
  ) {
    this.products = products;
    this.discountType = discountType;
    this.discountAmount = discountAmount;
  }

  // getPercentageDiscount(){

  // }

  getDiscountAmount(price: number): number {
    switch (this.discountType) {
      case DiscountType.cashDiscount:
        return price - this.discountAmount;
      case DiscountType.percentageDiscount:
        return price - (price * this.discountAmount) / 100;
      case DiscountType.freeShipping:
        return 0;
      case DiscountType.volumeDiscount:
        return price - price * this.discountAmount;
      default:
        return price;
    }
  }

  getListWithDiscountAmount(): DiscountedProduct[] {
    return this.products.map((product) => {
      return {
        ...product,
        discountedPrice: this.getDiscountAmount(product.price),
      };
    });
  }
}

/*
  deals
    [
      discount
        [
          {discountAmount
          discountType}
        ]
    ]

*/
