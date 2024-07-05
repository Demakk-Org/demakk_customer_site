import { ObjectId } from "mongoose";

export enum PaymentType {
  Visa,
  MasterCard,
  TeleBirr,
}

export interface IPaymentMethod {
  id: string;
  type: PaymentType;
  value: string;
}
