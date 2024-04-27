import { ObjectId } from "mongoose";
import { Rating } from "./ratingModel";
import { Image } from "./imageModel";
import { DiscountType, GetDiscount, ReturnedDiscount } from "./discountModel";

export interface IReview {
  user: ObjectId;
  product: ObjectId | IProduct;
  text: string;
  rating: number;
}

export interface IProductCategory {
  id: string;
  stockItem: ObjectId | IStockItem;
  name: string;
  additionalPrice: number;
  additionalCost: number;
}

export interface IStockItem {
  id: string;
  stockType: ObjectId;
  name: string;
  price: number;
  costToProduce: number;
}

export interface IProduct {
  id: ObjectId;
  name: string;
  description: string;
  price: number;
  ratings: Rating;
  productCategory: ObjectId | IProductCategory;
  tags: string[];
  images: { images: ObjectId } & Image;
  reviews: ObjectId[] & IReview[];
  popularity: number;
  sold: number;
  productVariants: ObjectId[] & IProductVariant[];
}

export interface IReturnedProduct {
  id: ObjectId;
  name: string;
  price: number;
  discountedPrice: (discounts: GetDiscount[]) => IAfterDiscountAndPercent;
  ratings: Rating;
  images: { images: ObjectId } & Image;
  shipping: (discounts: GetDiscount[]) => ShippingState;
  deals: (discounts: GetDiscount[]) => string;
  productVariants: ObjectId[];
  reviews: ObjectId[];
}

export enum EVariantType {
  sub = "sub",
  main = "main",
}

export interface IProductVariant {
  id: ObjectId;
  value: String;
  stockVarietyType: String;
  product: ObjectId;
  imageIndex: number;
  type: EVariantType;
  subVariants: ObjectId[];
  price: number;
  numberOfAvailable: number;
}

export interface ShippingState {
  status: boolean;
  above: number;
}

export interface IAfterDiscountAndPercent {
  afterDiscount: number;
  discountPercent: number;
}

export class GetProduct {
  private id: ObjectId;
  private name: string;
  private description: string;
  private productCategory: ObjectId | IProductCategory;
  private tags: string[];
  private price: number;
  private images: { images: ObjectId } & Image;
  private ratings: Rating;
  private reviews: ObjectId[] & IReview[];
  private popularity: number;
  private sold: number;
  private productVariants: ObjectId[] & IProductVariant[];

  constructor(product: IProduct) {
    this.id = product.id;
    this.name = product.name;
    this.description = product.description;
    this.productCategory = product.productCategory;
    this.tags = product.tags;
    this.price = product.price;
    this.images = product.images;
    this.ratings = product.ratings;
    this.reviews = product.reviews;
    this.popularity = product.popularity;
    this.sold = product.sold;
    this.productVariants = product.productVariants;
  }

  getShippingDiscount(discounts: GetDiscount[]): ShippingState {
    let discountList: ReturnedDiscount[] = [];
    discounts.forEach((discount) => {
      let d = discount.getDiscountInfo();
      if (d.products.includes(this.id.toString()) && d.status == "active") {
        discountList.push(d);
      }
    });

    let returnPrice: ShippingState = { status: false, above: 0 };

    discountList.forEach((discount) => {
      switch (discount.discountType) {
        case DiscountType.freeShipping:
          return (returnPrice = {
            status: discount.status == "active",
            above: discount.above,
          });
        default:
          return (returnPrice = { status: false, above: 0 });
      }
    });

    return returnPrice;
  }

  getDiscountedPriceAndPercent(
    discounts: GetDiscount[]
  ): IAfterDiscountAndPercent {
    let discountList: ReturnedDiscount[] = [];
    discounts.forEach((discount) => {
      let d = discount.getDiscountInfo();
      if (
        d.products.includes(this.id.toString()) &&
        d.status == "active" &&
        d.discountType !== DiscountType.freeShipping
      ) {
        discountList.push(d);
      }
    });

    let returnPriceAndPercent: IAfterDiscountAndPercent = {
      afterDiscount: 0,
      discountPercent: 0,
    };
    let returnPrice: number = 0;

    discountList.forEach((discount) => {
      switch (discount.discountType) {
        case DiscountType.percentageDiscount:
          returnPrice =
            this.price - (discount.discountAmount * this.price) / 100;
          return (returnPriceAndPercent = {
            afterDiscount: returnPrice,
            discountPercent: discount.discountAmount,
          });
        case DiscountType.cashDiscount:
          returnPrice = this.price - discount.discountAmount;
          let returnPercent = Math.ceil(
            (discount.discountAmount / this.price) * 100
          );

          return (returnPriceAndPercent = {
            afterDiscount: returnPrice,
            discountPercent: returnPercent,
          });
        default:
          returnPriceAndPercent = {
            afterDiscount: 0,
            discountPercent: 0,
          };
      }
    });

    return returnPriceAndPercent;
  }

  getDeals(discounts: GetDiscount[]) {
    let dealName: string = "";

    discounts.forEach((discount) => {
      let d = discount.getDiscountInfo();
      if (
        d.products.includes(this.id.toString()) &&
        d.status == "active" &&
        d.discountType !== DiscountType.freeShipping
      ) {
        dealName = d.deal;
      }
    });

    return dealName;
  }

  getProductVariants() {}

  getProductForCard(): IReturnedProduct {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      discountedPrice: this.getDiscountedPriceAndPercent,
      ratings: this.ratings,
      images: this.images,
      shipping: this.getShippingDiscount,
      deals: this.getDeals,
      productVariants: this.productVariants,
      reviews: this.reviews,
    };
  }
}
