import getDeal from '@/hooks/getDeal';
import mongoose, { ObjectId } from 'mongoose';

export enum DiscountType {
  cashDiscount = 'Cash discount',
  percentageDiscount = 'Percentage discount',
  freeShipping = 'Free shipping',
  volumeDiscount = 'Volume discount',
}

export enum DiscountStatus {
  active = 'active',
  closed = 'closed',
  pending = 'pending',
}

export interface ReturnedDiscount {
  id: ObjectId;
  discountType: string;
  discountAmount: number;
  status: DiscountStatus;
  products: string[];
  deal: string;
  above: number;
}

export interface Discount {
  id: ObjectId;
  discountType: DiscountType;
  discountAmount: number;
  status: DiscountStatus;
  products: string[];
  deal: string;
  aboveAmount: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export class GetDiscount {
  private id: ObjectId;
  private discountType: DiscountType;
  private discountAmount: number;
  private status: DiscountStatus;
  private products: string[];
  private deal: string;
  private aboveAmount: number;
  private createdAt?: Date;
  private updatedAt?: Date;

  constructor(discount: Discount) {
    this.id = discount.id;
    this.discountType = discount.discountType;
    this.discountAmount = discount.discountAmount;
    this.status = discount.status;
    this.products = discount.products;
    this.deal = discount.deal;
    this.aboveAmount = discount.aboveAmount;
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
      deal: this.deal,
      above: this.aboveAmount,
    };
  }
}
