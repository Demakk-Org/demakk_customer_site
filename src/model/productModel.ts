import mongoose from 'mongoose';
import { Rating } from './ratingModel';
import { Image } from './imageModel';
import { DiscountType, GetDiscount, ReturnedDiscount } from './discountModel';

export interface Product {
  id: mongoose.Types.ObjectId;
  name: string;
  description: string;
  price: number;
  ratings?: Rating;
  productCategory: string;
  tags: string[];
  images?: Image;
  reviews?: mongoose.Types.ObjectId;
  popularity: number;
}

export interface ShippingState {
  status: boolean;
  above: number;
}

export class GetProduct {
  private id: mongoose.Types.ObjectId;
  private name: string;
  private description: string;
  private price: number;
  private ratings?: Rating;
  private productCategory: string;
  private tags: string[];
  private images?: Image;
  private reviews?: mongoose.Types.ObjectId;
  private popularity: number;

  constructor(product: Product) {
    this.id = product.id;
    this.name = product.name;
    this.description = product.description;
    this.price = product.price;
    this.ratings = product.ratings;
    this.productCategory = product.productCategory;
    this.tags = product.tags;
    this.images = product.images;
    this.reviews = product.reviews;
    this.popularity = product.popularity;
  }

  // getDiscountList(discounts: GetDiscount[]) {
  //   let discountList: ReturnedDiscount[] = [];
  //   discounts.forEach((discount) => {
  //     let d = discount.getDiscountInfo();
  //     if (d.products.includes(this.id.toString()) && d.status == "active") {
  //       discountList.push(d);
  //     }
  //   });

  //   console.log(discountList);
  //   return discountList;
  // }

  getShippingDiscount(discounts: GetDiscount[]): ShippingState {
    let discountList: ReturnedDiscount[] = [];
    discounts.forEach((discount) => {
      let d = discount.getDiscountInfo();
      if (d.products.includes(this.id.toString()) && d.status == 'active') {
        discountList.push(d);
      }
    });

    let returnPrice: ShippingState = { status: false, above: 0 };

    discountList.forEach((discount) => {
      console.log(discount.discountType);
      switch (discount.discountType) {
        case DiscountType.freeShipping:
          return (returnPrice = {
            status: discount.status == 'active',
            above: discount.discountAmount,
          });
        default:
          return (returnPrice = { status: false, above: 0 });
      }
    });

    return returnPrice;
  }

  getDiscountedPrice(discounts: GetDiscount[]) {
    let discountList: ReturnedDiscount[] = [];
    discounts.forEach((discount) => {
      let d = discount.getDiscountInfo();
      if (d.products.includes(this.id.toString()) && d.status == 'active') {
        discountList.push(d);
      }
    });

    let returnPrice: number = 0;
    discountList.forEach((discount) => {
      console.log(discount.discountType);
      switch (discount.discountType) {
        case DiscountType.percentageDiscount:
          return (returnPrice =
            this.price - (discount.discountAmount * this.price) / 100);
        case DiscountType.cashDiscount:
          return (returnPrice = this.price - discount.discountAmount);
        default:
          return (returnPrice = 0);
      }
    });

    return returnPrice;
  }

  getProductforCard() {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      discountedPrice: this.getDiscountedPrice,
      ratings: this.ratings?.average,
      images: this.images?.images[0],
      shipping: this.getShippingDiscount,
    };
  }
}
