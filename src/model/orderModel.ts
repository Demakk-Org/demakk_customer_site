import { ObjectId } from "mongoose";
import { Image } from "./imageModel";

export interface IOrderStatus {
  _id: ObjectId;
  name: string;
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
  product: {
    name: { en?: string; am?: string; or?: string };
    images: Image;
    _Id: ObjectId;
    price: number;
  };
  quantity: number;
  couponCode?: ICoupon;
}

export interface IOrder {
  _id: ObjectId;
  orderItems: IOrderItem[];
  orderDate: Date;
  deliverDate: Date;
  orderStatus: IOrderStatus;
}

export class GetOrder {
  private id: ObjectId;
  private orderItems: IOrderItem[];
  private orderDate: Date;
  private deliveryDate: Date;
  private orderStatus: IOrderStatus;

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