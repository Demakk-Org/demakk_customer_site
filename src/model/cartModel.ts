import { ObjectId } from "mongoose";
import { IOrderItem } from "./orderModel";

export interface ICart {
  id: ObjectId;
  orderItems: IOrderItem[];
}

export class GetCart {
  private id: ObjectId;
  private orderItems: IOrderItem[];

  constructor(cart: ICart) {
    this.id = cart.id;
    this.orderItems = cart.orderItems;
  }

  getCart() {
    return { id: this.id, orderItems: this.orderItems };
  }
}
