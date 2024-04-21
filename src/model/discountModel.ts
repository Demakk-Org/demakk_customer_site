import { Product } from "./productModel";

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

export class GetDiscount {
  private discountType: DiscountType;
  private discountAmount: number;
  private status: boolean;
  private products: Product[];
  private createdAt?: Date;
  private updatedAt?: Date;

  constructor(discount: Discount) {
    this.discountType = discount.discountType;
    this.discountAmount = discount.discountAmount;
    this.status = discount.status;
    this.products = discount.products;
    this.createdAt = discount.createdAt;
    this.updatedAt = discount.updatedAt;
  }
}
