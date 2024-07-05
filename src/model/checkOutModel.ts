import { IAddress } from "./addressModel";
import { IOrderItem } from "./orderModel";
import { IPaymentMethod } from "./paymentMethod";

export interface ICheckOut {
  shippingAddress: IAddress;
  paymentMethod?: IPaymentMethod;
  orderItems: IOrderItem[];
}

export default class GetCheckOut {
  private shippingAddress: IAddress;
  private paymentMethod?: IPaymentMethod;
  private orderItems: IOrderItem[];

  constructor(checkout: ICheckOut) {
    this.shippingAddress = checkout.shippingAddress;
    this.paymentMethod = checkout?.paymentMethod;
    this.orderItems = checkout.orderItems;
  }

  getCheckOut() {
    return {
      shippingAddress: this.shippingAddress,
      paymentMethod: this.paymentMethod,
      orderItems: this.orderItems,
    };
  }
}
