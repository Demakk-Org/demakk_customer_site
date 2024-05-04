import { ObjectId } from "mongoose";
import { Rating } from "./ratingModel";
import { Image } from "./imageModel";
import { DiscountType, GetDiscount, IReturnedDiscount } from "./discountModel";

export interface IReview {
  user: ObjectId;
  product: ObjectId | IProduct;
  text: string;
  rating: number;
}

export interface IProductCategory {
  _id: string;
  stockItem: ObjectId | IStockItem;
  name: string;
  additionalPrice: number;
  additionalCost: number;
}

export interface IStockItem {
  _id: string;
  stockType: ObjectId;
  name: string;
  price: number;
  costToProduce: number;
}

export interface IProduct {
  _id: ObjectId;
  name: string;
  description: string;
  price: number;
  tags: string[];
  images: Image;
  popularity: number;
  sold: number;
  ratings: Rating;
}

export type IProductForPage = IProduct & {
  productCategory: IProductCategory;
  productVariants: IProductVariant[];
  reviews: IReview[];
};

export type IProductForCard = IProduct & {
  productCategory: ObjectId;
  productVariants: ObjectId[];
  reviews: ObjectId[];
};

export interface IReturnedProduct {
  id: ObjectId;
  name: string;
  price: number;
  discountedPrice: (discounts: GetDiscount[]) => IAfterDiscountAndPercent;
  rating: Rating;
  images: Image;
  shipping: (discounts: GetDiscount[]) => ShippingState;
  deals: (discounts: GetDiscount[]) => string;
}

export type IReturnedProductForCard = {
  reviews: ObjectId[];
  productVariants: ObjectId[];
} & IReturnedProduct;

export type IReturnedProductForPage = {
  reviews: IReview[];
  productVariants: IProductVariant[];
} & IReturnedProduct;

export enum EVariantType {
  sub = "sub",
  main = "main",
}

export interface IProductVariant {
  _id: ObjectId;
  value: string;
  stockVarietyType: string;
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
  public id: ObjectId;
  public name: string;
  public description: string;
  public tags: string[];
  public price: number;
  public images: Image;
  public rating: Rating;
  public popularity: number;
  public sold: number;

  constructor(product: IProduct) {
    this.id = product._id;
    this.name = product.name;
    this.description = product.description;
    this.tags = product.tags;
    this.price = product.price;
    this.images = product.images;
    this.rating = product.ratings;
    this.popularity = product.popularity;
    this.sold = product.sold;
  }

  getShippingDiscount(discounts: GetDiscount[]): ShippingState {
    let discountList: IReturnedDiscount[] = [];
    discounts.forEach((discount) => {
      let d = discount.getDiscountInfo();
      d.getProducts()?.forEach((product) => {
        if (product.id == this.id && d.status == "active") {
          discountList.push(d);
        }
      });
    });

    let returnPrice: ShippingState = { status: false, above: 0 };

    discountList.forEach((discount) => {
      switch (discount.discountType.name) {
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
    let discountList: IReturnedDiscount[] = [];

    discounts.forEach((discount) => {
      let d = discount.getDiscountInfo();
      d.getProducts()?.forEach((product) => {
        if (
          d.status == "active" &&
          product.id == this.id &&
          d.discountType.name !== DiscountType.freeShipping
        ) {
          discountList.push(d);
        }
      });
    });

    let returnPriceAndPercent: IAfterDiscountAndPercent = {
      afterDiscount: 0,
      discountPercent: 0,
    };
    let returnPrice: number = 0;

    discountList.forEach((discount) => {
      switch (discount.discountType.name) {
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
    console.log("it's here");
    discounts.forEach((discount) => {
      let d = discount.getDiscountInfo();

      d.getProducts()?.forEach((product) => {
        if (
          product.id.toString() == this.id.toString() &&
          d.status == "active" &&
          d.discountType.name !== DiscountType.freeShipping
        ) {
          dealName = d.deal.dealType.name;
        }
      });
    });

    return dealName;
  }
}

export class GetProductForCard extends GetProduct {
  private reviews: ObjectId[];
  private productCategory: ObjectId;
  private productVariants: ObjectId[];

  constructor(
    product: IProduct,
    reviews: ObjectId[],
    productCategory: ObjectId,
    productVariants: ObjectId[]
  ) {
    super(product);
    this.reviews = reviews;
    this.productCategory = productCategory;
    this.productVariants = productVariants;
  }

  getProductForCard(): IReturnedProductForCard {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      discountedPrice: this.getDiscountedPriceAndPercent,
      rating: this.rating,
      images: this.images,
      shipping: this.getShippingDiscount,
      deals: this.getDeals,
      productVariants: this.productVariants,
      reviews: this.reviews,
    };
  }
}

export class GetProductForPage extends GetProduct {
  private reviews: IReview[];
  private productCategory: IProductCategory;
  private productVariants: IProductVariant[];

  constructor(
    product: IProduct,
    reviews: IReview[],
    productCategory: IProductCategory,
    productVariants: IProductVariant[]
  ) {
    super(product);
    this.reviews = reviews;
    this.productCategory = productCategory;
    this.productVariants = productVariants;
  }

  getProductForCard(): IReturnedProductForPage {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      discountedPrice: this.getDiscountedPriceAndPercent,
      rating: this.rating,
      images: this.images,
      shipping: this.getShippingDiscount,
      deals: this.getDeals,
      productVariants: this.productVariants,
      reviews: this.reviews,
    };
  }
}
