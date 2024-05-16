import { ObjectId } from "mongoose";
import { GetProduct, IProduct } from "./productModel";
import { IDeal } from "./dealModel";

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

export interface IReturnedDiscount {
  id: ObjectId;
  discountType: { name: DiscountType };
  discountAmount: number;
  status: DiscountStatus;
  getProducts: () => GetProduct[];
  products: IProduct[];
  deal: IDeal;
  above: number;
}

export interface IDiscount {
  _id: ObjectId;
  discountType: { name: DiscountType };
  discountAmount: number;
  status: DiscountStatus;
  products: IProduct[];
  deal: IDeal;
  aboveAmount: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export class GetDiscount {
  private id: ObjectId;
  private discountType: { name: DiscountType };
  private discountAmount: number;
  private status: DiscountStatus;
  private products: IProduct[];
  private deal: IDeal;
  private aboveAmount: number;

  constructor(discount: IDiscount) {
    this.id = discount._id;
    this.discountType = discount.discountType;
    this.discountAmount = discount.discountAmount;
    this.status = discount.status;
    this.products = discount.products;
    this.deal = discount.deal;
    this.aboveAmount = discount.aboveAmount;
  }

  getProductsFromDiscount(): GetProduct[] {
    let products: GetProduct[] = [];
    this.products?.forEach((product) => {
      products.push(new GetProduct(product));
    });

    return products;
  }

  getDiscountInfo(): IReturnedDiscount {
    return {
      id: this.id,
      discountType: this.discountType,
      discountAmount: this.discountAmount,
      status: this.status,
      getProducts: this.getProductsFromDiscount,
      products: this.products,
      deal: this.deal,
      above: this.aboveAmount,
    };
  }
}
