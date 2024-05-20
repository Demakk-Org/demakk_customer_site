import { ObjectId } from "mongoose";
import { Image } from "./imageModel";
import { IProductVariant } from "./productModel";

export interface IOrderStatus {
  _id?: ObjectId;
  name: string;
  orderIndex: number;
}

export interface ICoupon {
  _id: ObjectId;
  name: string;
  discountAmount: number;
  discountType: { name: string };
  appliesToProductCategory: ObjectId[];
}

export interface IOrderItem {
  _id: ObjectId;
  productVariant: IProductVariant;
  quantity: number;
  couponCode?: ICoupon;
}

export interface IOrder {
  _id: ObjectId;
  orderItems: IOrderItem[];
  orderDate: Date;
  deliverDate: Date;
  orderStatus: String;
}

export class GetOrder {
  private id: ObjectId;
  private orderItems: IOrderItem[];
  private orderDate: Date;
  private deliveryDate: Date;
  private orderStatus: String;

  constructor(order: IOrder) {
    this.id = order._id;
    this.orderItems = order.orderItems;
    this.orderDate = order.orderDate;
    this.deliveryDate = order.deliverDate;
    this.orderStatus = order.orderStatus;
  }

  getOrder() {
    return {
      id: this.id.toString(),
      orderItems: this.orderItems,
      orderDate: this.orderDate,
      deliveryDate: this.deliveryDate,
      orderStatus: this.orderStatus,
    };
  }
}
