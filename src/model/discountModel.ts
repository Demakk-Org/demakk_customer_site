import mongoose from "mongoose";

export enum DiscountType {
  cashDiscount = "Cash discount",
  percentageDiscount = "Percentage discount",
  freeShipping = "Free Shipping",
  volumeDiscount = "Volume Discount",
}

export enum DiscountStatus {
  active = "active",
  closed = "closed",
  pending = "pending",
}

export interface ReturnedDiscount {
  id: mongoose.Types.ObjectId;
  discountType: string;
  discountAmount: number;
  status: DiscountStatus;
  products: string[];
}

export interface Discount {
  id: mongoose.Types.ObjectId;
  discountType: DiscountType;
  discountAmount: number;
  status: DiscountStatus;
  products: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export class GetDiscount {
  private id: mongoose.Types.ObjectId;
  private discountType: DiscountType;
  private discountAmount: number;
  private status: DiscountStatus;
  private products: string[];
  private createdAt?: Date;
  private updatedAt?: Date;

  constructor(discount: Discount) {
    this.id = discount.id;
    this.discountType = discount.discountType;
    this.discountAmount = discount.discountAmount;
    this.status = discount.status;
    this.products = discount.products;
    this.createdAt = discount.createdAt;
    this.updatedAt = discount.updatedAt;
  }

  getDiscountType(discountTypeId: string) {}

  getDiscountInfo(): ReturnedDiscount {
    return {
      id: this.id,
      discountType: this.discountType,
      discountAmount: this.discountAmount,
      status: this.status,
      products: this.products,
    };
  }
}
