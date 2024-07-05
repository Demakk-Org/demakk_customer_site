import { ObjectId } from "mongoose";
import { Image } from "./imageModel";
import { IProductVariant } from "./productModel";
import { IAddress } from "./addressModel";

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
  isChecked: boolean;
}

export interface IOrder {
  _id: ObjectId;
  orderItems: IOrderItem[];
  orderDate: Date;
  deliverDate: Date;
  orderStatus: String;
  deliveryAddress: IAddress;
}

export class GetOrder {
  private id: ObjectId;
  private orderItems: IOrderItem[];
  private orderDate: Date;
  private deliveryDate: Date;
  private orderStatus: String;
  private deliveryAddress: IAddress;

  constructor(order: IOrder) {
    this.id = order._id;
    this.orderItems = order.orderItems;
    this.orderDate = order.orderDate;
    this.deliveryDate = order.deliverDate;
    this.orderStatus = order.orderStatus;
    this.deliveryAddress = order.deliveryAddress;
  }

  getOrder() {
    return {
      id: this.id.toString(),
      orderItems: this.orderItems,
      orderDate: this.orderDate,
      deliveryDate: this.deliveryDate,
      orderStatus: this.orderStatus,
      deliveryAddress: this.deliveryAddress,
    };
  }
}
